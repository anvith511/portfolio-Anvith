'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL not supported for 3D background:', e);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 3.2, 7.5);
    camera.lookAt(0, 0, 0);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Determine current theme
    const isDark = () => document.documentElement.classList.contains('dark');

    // 1. Undulating Wireframe Terrain
    const terrainWidth = 32;
    const terrainHeight = 32;
    const terrainSegments = 46;
    const terrainGeometry = new THREE.PlaneGeometry(terrainWidth, terrainHeight, terrainSegments, terrainSegments);
    
    // Initial rotation of terrain plane so it stretches towards the horizon
    terrainGeometry.rotateX(-Math.PI / 2.2);

    const terrainMaterial = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: isDark() ? 0xffffff : 0x000000,
      transparent: true,
      opacity: isDark() ? 0.20 : 0.08,
    });

    const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrainMesh.position.set(0, -2.4, -2);
    scene.add(terrainMesh);

    // Keep original positions for sinusoidal displacement
    const posAttribute = terrainGeometry.attributes.position;
    const basePositions = posAttribute.array.slice() as Float32Array;

    // 2. Floating Cybernetic Particles (Constellation Field)
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 28;
      particlePositions[i * 3 + 1] = (Math.random() - 0.2) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.003;
      particleVelocities[i * 3 + 1] = 0.002 + Math.random() * 0.004;
      particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: isDark() ? 0xffffff : 0x111111,
      size: 0.045,
      transparent: true,
      opacity: isDark() ? 0.35 : 0.25,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 3. Floating Geometric Polyhedra (Engineering Nodes)
    const polyGeometry1 = new THREE.IcosahedronGeometry(0.85, 1);
    const polyMaterial1 = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: isDark() ? 0xffffff : 0x222222,
      transparent: true,
      opacity: isDark() ? 0.22 : 0.15,
    });
    const polyMesh1 = new THREE.Mesh(polyGeometry1, polyMaterial1);
    polyMesh1.position.set(6.5, 1.2, -3.5);
    scene.add(polyMesh1);

    const polyGeometry2 = new THREE.OctahedronGeometry(0.7, 0);
    const polyMaterial2 = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: isDark() ? 0xffffff : 0x222222,
      transparent: true,
      opacity: isDark() ? 0.18 : 0.12,
    });
    const polyMesh2 = new THREE.Mesh(polyGeometry2, polyMaterial2);
    polyMesh2.position.set(-6.8, -0.4, -4);
    scene.add(polyMesh2);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0006;
      mouseY = (e.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Interaction Parallax
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY * 0.0004;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!renderer) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener('resize', handleResize);

    // Theme Change Observer
    const observer = new MutationObserver(() => {
      const dark = isDark();
      terrainMaterial.color.setHex(dark ? 0xffffff : 0x000000);
      terrainMaterial.opacity = dark ? 0.20 : 0.08;

      particleMaterial.color.setHex(dark ? 0xffffff : 0x111111);
      particleMaterial.opacity = dark ? 0.35 : 0.25;

      polyMaterial1.color.setHex(dark ? 0xffffff : 0x222222);
      polyMaterial1.opacity = dark ? 0.22 : 0.15;

      polyMaterial2.color.setHex(dark ? 0xffffff : 0x222222);
      polyMaterial2.opacity = dark ? 0.18 : 0.12;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 3;
      camera.position.y = 3.2 - targetY * 2 - scrollY;
      camera.lookAt(0, -scrollY * 0.5, -2);

      // 1. Terrain waves
      const currentPos = terrainGeometry.attributes.position;
      const count = currentPos.count;
      for (let i = 0; i < count; i++) {
        const u = basePositions[i * 3];
        const v = basePositions[i * 3 + 1];
        // Sinusoidal mathematical wave equations
        const z = Math.sin(u * 0.35 + elapsedTime * 0.75) * 0.42 +
                  Math.cos(v * 0.4 + elapsedTime * 0.6) * 0.45 +
                  Math.sin((u + v) * 0.25 + elapsedTime * 0.4) * 0.3;
        currentPos.setZ(i, z);
      }
      currentPos.needsUpdate = true;

      // 2. Floating particles movement
      const pPositions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3 + 1] += particleVelocities[i * 3 + 1];
        pPositions[i * 3] += particleVelocities[i * 3];

        // Loop particles when they drift above viewport
        if (pPositions[i * 3 + 1] > 10) {
          pPositions[i * 3 + 1] = -4;
          pPositions[i * 3] = (Math.random() - 0.5) * 28;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // 3. Polyhedra rotation & gentle float
      polyMesh1.rotation.x = elapsedTime * 0.25;
      polyMesh1.rotation.y = elapsedTime * 0.35;
      polyMesh1.position.y = 1.2 + Math.sin(elapsedTime * 0.6) * 0.25;

      polyMesh2.rotation.x = elapsedTime * 0.3;
      polyMesh2.rotation.z = elapsedTime * 0.2;
      polyMesh2.position.y = -0.4 + Math.cos(elapsedTime * 0.5) * 0.2;

      renderer?.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      terrainGeometry.dispose();
      terrainMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      polyGeometry1.dispose();
      polyMaterial1.dispose();
      polyGeometry2.dispose();
      polyMaterial2.dispose();

      if (renderer) {
        renderer.dispose();
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.95 }}
      />
    </div>
  );
}

export default Scene;

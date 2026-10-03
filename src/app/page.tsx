import { getSections } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import GitHubSection from '@/components/sections/GitHubSection';
import ActivitySection from '@/components/sections/ActivitySection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import AskAnvith from '@/components/features/AskAnvith';
import InteractiveTerminal from '@/components/features/InteractiveTerminal';
import RecruiterMode from '@/components/features/RecruiterMode';

export default async function Home() {
  const sections = await getSections();
  const enabledSections = (sections || [])
    .filter(s => s.enabled !== false && (s as any).is_enabled !== false)
    .sort((a, b) => (a.order ?? (a as any).order_index ?? 0) - (b.order ?? (b as any).order_index ?? 0));

  const sectionComponents: Record<string, React.ReactNode> = {
    hero: <HeroSection key="hero" />,
    stats: <StatsSection key="stats" />,
    projects: <ProjectsSection key="projects" />,
    experience: <ExperienceSection key="experience" />,
    skills: <SkillsSection key="skills" />,
    timeline: <TimelineSection key="timeline" />,
    achievements: <AchievementsSection key="achievements" />,
    certifications: <CertificationsSection key="certifications" />,
    github: <GitHubSection key="github" />,
    activity: <ActivitySection key="activity" />,
    about: <AboutSection key="about" />,
    contact: <ContactSection key="contact" />,
  };

  return (
    <PageTransition>
      <div className="flex flex-col gap-32 pb-32">
        {enabledSections.map(section => {
          const key = section.slug || (section as any).section_id || section.type || section.id;
          return sectionComponents[key] || null;
        })}
      </div>
      <AskAnvith />
      <InteractiveTerminal />
      <RecruiterMode />
    </PageTransition>
  );
}

import { createClient } from '@supabase/supabase-js';
import {
  HeroContent,
  AboutContent,
  Section,
  Project,
  Experience,
  Education,
  SkillCategory,
  Skill,
  Achievement,
  Certification,
  Statistic,
  TimelineEvent,
  Activity,
  BlogPost,
  SocialLink,
  ResumeFile
} from '@/types/database';
import * as fallback from '../data/fallback';

// Initialize Supabase client conditionally
let supabase: ReturnType<typeof createClient> | null = null;

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url' &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your-supabase-anon-key'
  );
}

if (isSupabaseConfigured()) {
  supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getHeroContent(): Promise<HeroContent> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('hero_content').select('*').single();
      if (!error && data) return data as HeroContent;
    } catch (e) {
      console.error('Error fetching hero content:', e);
    }
  }
  return fallback.fallbackHeroContent;
}

export async function getAboutContent(): Promise<AboutContent> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('about_content').select('*').single();
      if (!error && data) return data as AboutContent;
    } catch (e) {
      console.error('Error fetching about content:', e);
    }
  }
  return fallback.fallbackAboutContent;
}

export async function getSections(): Promise<Section[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('sections').select('*').order('order_index');
      if (!error && data) return data as Section[];
    } catch (e) {
      console.error('Error fetching sections:', e);
    }
  }
  return fallback.fallbackSections;
}

export async function getProjects(): Promise<Project[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('projects').select('*').order('order_index');
      if (!error && data) return data as Project[];
    } catch (e) {
      console.error('Error fetching projects:', e);
    }
  }
  return fallback.fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('projects').select('*').eq('slug', slug).single();
      if (!error && data) return data as Project;
    } catch (e) {
      console.error(`Error fetching project ${slug}:`, e);
    }
  }
  return fallback.fallbackProjects.find(p => p.slug === slug) || null;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('projects').select('*').eq('featured', true).order('order_index');
      if (!error && data) return data as Project[];
    } catch (e) {
      console.error('Error fetching featured projects:', e);
    }
  }
  return fallback.fallbackProjects.filter(p => p.featured);
}

export async function getExperience(): Promise<Experience[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('experience').select('*').order('order_index');
      if (!error && data) return data as Experience[];
    } catch (e) {
      console.error('Error fetching experience:', e);
    }
  }
  return fallback.fallbackExperience;
}

export async function getEducation(): Promise<Education[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('education').select('*').order('order_index');
      if (!error && data) return data as Education[];
    } catch (e) {
      console.error('Error fetching education:', e);
    }
  }
  return fallback.fallbackEducation;
}

export async function getSkillCategories(): Promise<{ category: SkillCategory; skills: Skill[] }[]> {
  if (supabase) {
    try {
      const { data: categories, error: catError } = await supabase.from('skill_categories').select('*').order('order_index');
      if (!catError && categories) {
        const { data: skills, error: skillError } = await supabase.from('skills').select('*').order('order_index');
        if (!skillError && skills) {
          return categories.map((cat: any) => ({
            category: cat as SkillCategory,
            skills: ((skills || []) as any[]).filter((s: any) => s.category_id === cat.id) as Skill[]
          }));
        }
      }
    } catch (e) {
      console.error('Error fetching skills:', e);
    }
  }
  return fallback.fallbackSkillCategories;
}

export async function getAchievements(): Promise<Achievement[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('achievements').select('*').order('order_index');
      if (!error && data) return data as Achievement[];
    } catch (e) {
      console.error('Error fetching achievements:', e);
    }
  }
  return fallback.fallbackAchievements;
}

export async function getCertifications(): Promise<Certification[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('certifications').select('*').order('order_index');
      if (!error && data) return data as Certification[];
    } catch (e) {
      console.error('Error fetching certifications:', e);
    }
  }
  return fallback.fallbackCertifications;
}

export async function getStatistics(): Promise<Statistic[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('statistics').select('*').order('order_index');
      if (!error && data) return data as Statistic[];
    } catch (e) {
      console.error('Error fetching statistics:', e);
    }
  }
  return fallback.fallbackStatistics;
}

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('timeline_events').select('*').order('year', { ascending: false });
      if (!error && data) return data as TimelineEvent[];
    } catch (e) {
      console.error('Error fetching timeline events:', e);
    }
  }
  return fallback.fallbackTimelineEvents;
}

export async function getActivities(): Promise<Activity[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('activities').select('*').order('date', { ascending: false });
      if (!error && data) return data as Activity[];
    } catch (e) {
      console.error('Error fetching activities:', e);
    }
  }
  return fallback.fallbackActivities;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('blog_posts').select('*').order('published_at', { ascending: false });
      if (!error && data) return data as BlogPost[];
    } catch (e) {
      console.error('Error fetching blog posts:', e);
    }
  }
  return fallback.fallbackBlogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
      if (!error && data) return data as BlogPost;
    } catch (e) {
      console.error(`Error fetching blog post ${slug}:`, e);
    }
  }
  return fallback.fallbackBlogPosts.find(p => p.slug === slug) || null;
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('social_links').select('*').order('order_index');
      if (!error && data) return data as SocialLink[];
    } catch (e) {
      console.error('Error fetching social links:', e);
    }
  }
  return fallback.fallbackSocialLinks;
}

export async function getActiveResume(): Promise<ResumeFile | null> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('resume_files').select('*').eq('is_active', true).single();
      if (!error && data) return data as ResumeFile;
    } catch (e) {
      console.error('Error fetching active resume:', e);
    }
  }
  return fallback.fallbackResumeFile;
}

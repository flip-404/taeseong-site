export interface WorkExperience {
  id: string;
  companyName: string;
  position: string;
  team?: string;
  duration: string;
  logo: {
    text: string;
    bgColor: string;
    image?: string;
  };
  projects?: Project[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  achievements?: Achievement[];
  externalLink?: string;
  blogLink?: string;
}

export interface Achievement {
  title: string;
  description: string;
  type: 'technical' | 'business' | 'team';
  items: AchievementItem[];
}

export interface AchievementItem {
  title: string;
  link?: string;
  linkDescription?: string;
}

export interface PersonalProject {
  name: string;
  date: string;
  description: string;
  tech: string[];
  logo: string;
  achievement?: string;
  link?: string;
}

export interface Activity {
  title: string;
  date: string;
  type: 'education' | 'mentoring' | 'study' | 'award' | 'certificate';
}

export interface Award {
  title: string;
  date: string;
  description?: string[];
}

export interface Education {
  school: string;
  major: string;
  duration: string;
}

// Sector gradient configuration for Greenberg Engineering
// These gradients are revealed on hover interactions

export const SECTOR_GRADIENTS = {
  infra: 'linear-gradient(135deg, #0A0F3C, #2C5DA9, #C8DAF9)',
  esg: 'linear-gradient(135deg, #33644A, #528940, #A1DDAA)',
  systems: 'linear-gradient(135deg, #3A294F, #8D68AA, #F4D6FF)',
  skills: 'linear-gradient(135deg, #844212, #EC954E, #FFD9B2)',
  safety: 'linear-gradient(135deg, #A20505, #D40114, #FF7474)',
} as const;

export type SectorId = keyof typeof SECTOR_GRADIENTS;

export interface Sector {
  id: SectorId;
  name: string;
  tagline: string;
  description: string;
  icon: string;
}

export const SECTORS: Sector[] = [
  {
    id: 'infra',
    name: 'Infrastructure',
    tagline: 'Winning Expertise',
    description: 'Building the foundations of tomorrow',
    icon: 'Building2',
  },
  {
    id: 'esg',
    name: 'ESG',
    tagline: 'Winning Expertise',
    description: 'Sustainable solutions for a greener future',
    icon: 'Leaf',
  },
  {
    id: 'systems',
    name: 'Systems',
    tagline: 'Winning Expertise',
    description: 'Integrated engineering excellence',
    icon: 'Cpu',
  },
  {
    id: 'skills',
    name: 'Skills',
    tagline: 'Winning Expertise',
    description: 'Empowering the next generation',
    icon: 'GraduationCap',
  },
  {
    id: 'safety',
    name: 'Safety',
    tagline: 'Winning Expertise',
    description: 'Protecting what matters most',
    icon: 'Shield',
  },
] as const;

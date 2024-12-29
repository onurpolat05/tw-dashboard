import { LucideIcon } from 'lucide-react';

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  painPointId: string;
}

export interface SolutionSectionProps {
  className?: string;
}

export interface SolutionCardProps extends Omit<Solution, 'id' | 'painPointId'> {
  className?: string;
} 
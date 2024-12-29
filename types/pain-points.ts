import { LucideIcon } from 'lucide-react';

export interface PainPoint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export interface PainPointSectionProps {
  className?: string;
  showSources?: boolean;
}

export interface PainPointCardProps extends Omit<PainPoint, 'id'> {
  className?: string;
} 
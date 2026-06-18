import { Calendar, Clock, Monitor, Tag, Users } from 'lucide-react';

export const workshopDetails = [
  {
    id: 'age',
    label: 'Age Group',
    value: '8–14 Years',
    description: 'Tailored for young minds',
    icon: Users,
    color: 'text-primary'
  },
  {
    id: 'duration',
    label: 'Duration',
    value: '4 Weeks',
    description: 'Hands-on learning journey',
    icon: Clock,
    color: 'text-secondary'
  },
  {
    id: 'mode',
    label: 'Mode',
    value: 'Online (Live)',
    description: 'Interactive virtual classes',
    icon: Monitor,
    color: 'text-primary'
  },
  {
    id: 'fee',
    label: 'Fee',
    value: '₹2,999',
    description: 'No hidden charges',
    icon: Tag,
    color: 'text-secondary'
  },
  {
    id: 'start',
    label: 'Start Date',
    value: '15 July 2026',
    description: 'Batch starts soon',
    icon: Calendar,
    color: 'text-primary'
  }
];

import { NavModel } from '../../models';
import { nanoid } from 'nanoid';

export const navItems: NavModel[] = [
  { path: '#', name: 'Find work', id: nanoid() },
  { path: '#', name: 'Pricing', id: nanoid() },
  { path: '#', name: 'Blog', id: nanoid() },
  { path: '#', name: 'About us', id: nanoid() },
  { path: '#', name: 'Login', id: nanoid() },
  { path: '#', name: 'Get Started', id: nanoid() },
];

import telegram from '../../assets/images/telegram.png';
import fb from '../../assets/images/fb.png';
import git from '../../assets/images/git.png';
import ig from '../../assets/images/ig.png';
import twitter from '../../assets/images/twitter.png';
import so from '../../assets/images/so.png';
import linkedin from '../../assets/images/linkedin.png';
import { nanoid } from 'nanoid';
import { NavModel } from '../../models';

export const footerLogoItems: NavModel[] = [
  { id: nanoid(), path: 'info@jobanaut.co', name: 'info@jobanaut.co' },
  { id: nanoid(), path: 'learn@jobanaut.co', name: 'learn@jobanaut.co' },
  { id: nanoid(), path: 'learn@jobanaut.co', name: 'learn@jobanaut.co' },
];

export const footerSocials: NavModel[] = [
  { id: nanoid(), path: '#', name: telegram },
  { id: nanoid(), path: '#', name: fb },
  { id: nanoid(), path: '#', name: git },
  { id: nanoid(), path: '#', name: ig },
  { id: nanoid(), path: '#', name: twitter },
  { id: nanoid(), path: '#', name: so },
  { id: nanoid(), path: '#', name: linkedin },
];

export const footerSocialsLinks: NavModel[] = [
  { id: nanoid(), path: '#', name: 'Jobanuat.io' },
  { id: nanoid(), path: '#', name: 'Copyright' },
  { id: nanoid(), path: '#', name: 'Use of Terms & Condition' },
];

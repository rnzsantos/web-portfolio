import gameHub from '../assets/game-hub.png';
import eCommerce from '../assets/e-commerce.png';
import whatowatch from '../assets/whatowatch.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
  code: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'whatowatch',
    description: `(IN DEVELOPMENT) Find and search your next movie to watch with hundreds
                  of thousands of movie made available by free API of TMDB.
                  Check the users rating, overview, casts and more. Beautifully
                  designed components with shadcn/ui built on top of Radix UI
                  and Tailwind CSS.`,
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    image: whatowatch,
    link: 'https://whatowatch-renzo.vercel.app/',
    code: 'https://github.com/rnzsantos',
  },
  {
    id: 2,
    title: 'Game Hub',
    description: `Check the latest, popular and top rated video games. 
                  Built using React and TypeScript, simplified data
                  fetching, improved performance due to caching of data
                  with React Query and minimalist approach for handling
                  global state using Zustand.`,
    tools: ['React', 'TypeScript', 'Chakra UI'],
    image: gameHub,
    link: 'https://gamehub-renzo.vercel.app/',
    code: 'https://github.com/rnzsantos/game-hub',
  },
  {
    id: 3,
    title: 'PStore',
    description: `Simple e-commerce website built using MERN Stack as the
                  final capstone in Zuitt Bootcamp. Composed of the most
                  basic functionality of a shopping app. Utilized each
                  tool in a tech stack with a RESTful API backend
                  tested using Postman.`,
    tools: ['MongoDB', 'Express', 'React', 'Node'],
    image: eCommerce,
    link: 'https://pstore-renzo.vercel.app/',
    code: 'https://github.com/rnzsantos/pstore',
  },
];

export default projects;

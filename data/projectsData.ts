export interface MediaItem {
  id: number;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  fullDescription: string;
  media: MediaItem[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Social Media Content Creation',
    category: 'Social Media',
    thumbnail: '/images/social1-cover.png',
    fullDescription: 'A comprehensive social media campaign featuring engaging posts and video content designed to maximize audience engagement and brand visibility.',
    media: [
      { id: 1, title: 'Social Post 1', type: 'image', url: '/images/social1-cover.png' },
      { id: 2, title: 'Social Post 2', type: 'image', url: '/images/social1-cover.png' },
    ],
  },
  {
    id: 2,
    title: 'Product Promotion Video',
    category: 'Social Media',
    thumbnail: '/images/project2-cover.png',
    fullDescription: 'Dynamic product promotion videos optimized for social media platforms, featuring modern transitions and engaging visual effects.',
    media: [
      { id: 1, title: 'Promo Video', type: 'video', url: '/videos/promo.mp4', thumbnail: '/images/project2-cover.png' },
    ],
  },
  {
    id: 3,
    title: 'Product Promotion Video',
    category: 'AI Video',
    thumbnail: '/images/project3-cover.png',
    fullDescription: 'Cutting-edge AI-powered product videos that showcase innovative technology and creative storytelling.',
    media: [
      { id: 1, title: 'AI Video', type: 'video', url: '/videos/ai-promo.mp4', thumbnail: '/images/project3-cover.png' },
    ],
  },
  {
    id: 4,
    title: 'YouTube Video Content Creation',
    category: '2D Animation',
    thumbnail: '/images/project4-cover.png',
    fullDescription: 'Professional 2D character animations for YouTube content, featuring smooth movements and expressive character designs.',
    media: [
      { id: 1, title: 'Animation Scene 1', type: 'video', url: '/videos/animation.mp4', thumbnail: '/images/project4-cover.png' },
    ],
  },
  {
    id: 5,
    title: 'Product Promotion Video',
    category: 'AI Video',
    thumbnail: '/images/project5-cover.png',
    fullDescription: 'AI-generated promotional content that combines creativity with automation for stunning visual results.',
    media: [
      { id: 1, title: 'AI Promo', type: 'video', url: '/videos/ai-promo2.mp4', thumbnail: '/images/project5-cover.png' },
    ],
  },
  {
    id: 6,
    title: 'Product Promotion Video',
    category: 'AI Video',
    thumbnail: '/images/project6-cover.png',
    fullDescription: 'Advanced AI video production showcasing the latest in automated content creation technology.',
    media: [
      { id: 1, title: 'AI Production', type: 'video', url: '/videos/ai-promo3.mp4', thumbnail: '/images/project6-cover.png' },
    ],
  },
  {
    id: 7,
    title: 'Website Design & Development',
    category: 'Web Development',
    thumbnail: '/images/web1.png',
    fullDescription: 'Complete tour and taxi booking website featuring modern UI/UX design, responsive layouts, and seamless booking functionality.',
    media: [
      { id: 1, title: 'Homepage Design', type: 'image', url: '/images/web1.png' },
      { id: 2, title: 'Booking Interface', type: 'image', url: '/images/web1.png' },
    ],
  },
  {
    id: 8,
    title: 'Mobile Application',
    category: 'Web Development',
    thumbnail: '/images/web2.png',
    fullDescription: 'Innovative mobile app for rice plant disease diagnosis using AI and machine learning technology.',
    media: [
      { id: 1, title: 'App Interface', type: 'image', url: '/images/web2.png' },
      { id: 2, title: 'Diagnosis Screen', type: 'image', url: '/images/web2.png' },
    ],
  },
  {
    id: 9,
    title: 'Website Landing Page Design',
    category: 'Web Development',
    thumbnail: '/images/web3.png',
    fullDescription: 'Modern, eye-catching landing page design with unique visual elements and conversion-optimized layout.',
    media: [
      { id: 1, title: 'Landing Page', type: 'image', url: '/images/web3.png' },
    ],
  },
];

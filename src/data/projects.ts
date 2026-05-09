export interface Project {
  id: number
  title: string
  category: string
  description: string
  result: string
  // Replace src with real image paths under /public/work/
  src: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Campaign Title One',
    category: 'Instagram',
    description:
      'Replace this with a real campaign description — what was the brief, what did you create, and why it worked.',
    result: '+42% engagement rate over 30 days',
    src: '/work/project-1.jpg',
    tags: ['Reels', 'Copywriting', 'Analytics'],
  },
  {
    id: 2,
    title: 'Campaign Title Two',
    category: 'TikTok',
    description:
      'Replace this with a real campaign description. Keep it punchy — one or two sentences is enough.',
    result: '1.2M views in first week',
    src: '/work/project-2.jpg',
    tags: ['Short-form Video', 'Trend Strategy'],
  },
  {
    id: 3,
    title: 'Campaign Title Three',
    category: 'Brand Identity',
    description:
      'Replace this with a real campaign description. Highlight your role and the outcome.',
    result: 'Launched in 6 markets',
    src: '/work/project-3.jpg',
    tags: ['Brand Voice', 'Content Strategy', 'Email'],
  },
  {
    id: 4,
    title: 'Campaign Title Four',
    category: 'LinkedIn',
    description:
      'Replace this with a real campaign description. Metrics and storytelling together make for a strong case study.',
    result: '3× organic reach vs. prior quarter',
    src: '/work/project-4.jpg',
    tags: ['B2B', 'Thought Leadership'],
  },
]

export const GITHUB_USER = 'SandyTheAdventurer';

export const profile = {
  name: 'Sandeep Suresh',
  handle: 'SandyTheAdventurer',
  role: 'ML & Robotics Engineer',
  tagline:
    'I build reinforcement learning agents and autonomous robots — from self-play StarCraft II bots to rover navigation stacks.',
  location: 'Coimbatore, India',
  email: 'sandeepsuresh00800@gmail.com',
  avatar: `https://avatars.githubusercontent.com/u/68272706?v=4`,
  links: [
    { label: 'GitHub', href: 'https://github.com/SandyTheAdventurer' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sandeep-suresh-17847428a/' },
    { label: 'Hugging Face', href: 'https://huggingface.co/SandyTheAdventurer' },
  ],
};

export const about = [
  'I’m a Computer Science undergraduate at PSG Institute of Technology and Applied Research who loves reinforcement learning. Most of what I build is about agents that learn to act — in games, in simulated clusters, and on real rovers.',
  'I co-lead PSG Team Aurora, where I own the ROS 2 autonomy stack for our competition rovers. On the research side, I work on combining RL with genetic programming for symbolic regression.',
];

export const stats = [
  { value: '1455', label: 'ELO in SC2 AI Arena' },
  { value: 'Finalist', label: 'International Rover Challenge ’26' },
  { value: '2', label: 'Papers under review (Q1)' },
];

export const experience = [
  {
    title: 'Co-Lead',
    org: 'PSG Team Aurora',
    place: 'Coimbatore',
    points: [
      'Co-lead a student team that designs and builds rovers for international competitions, coordinating interdisciplinary subsystems across multiple events.',
    ],
  },
  {
    title: 'Autonomy Lead — Finalist',
    org: 'International Rover Challenge ’26',
    place: 'Manipal Institute of Technology, Udupi',
    points: [
      'Led the rover’s sensing-to-action pipeline: fused GPS and visual odometry (RTAB-Map) through an EKF for localization, feeding a Nav2 planner into motor control on a Jetson/ESP32 compute stack.',
      'Owned the full ROS 2 software stack.',
    ],
  },
  {
    title: 'Team Lead — 11th Place',
    org: 'European Rover Challenge ’25',
    place: 'Remote',
    points: [
      'Led a 16-member team building an autonomous rover system; implemented frontier exploration and object detection for sample identification, placing 11th among 25+ international teams.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    org: 'RND OptimizAR',
    place: 'Coimbatore',
    date: 'May 2026 – Jun 2026',
    points: [
      'Built an autonomous deployment-helper agent with LangGraph to improve release workflows — remote application management, real-time log tracing and self-healing verification, all driven through Slack.',
    ],
  },
];

export const publications = [
  {
    title: 'Genetic Programming for Symbolic Regression with Reinforcement-Guided Crossover',
    venue: 'Under peer review — Neural Computing and Applications (Q1)',
    summary:
      'A learnable crossover operator that fuses genetic algorithms with RL: a trained policy replaces fixed heuristic crossover, improving over standard GP baselines.',
  },
  {
    title: 'A Novel Mathematical and Machine Learning Framework for Microclimate Assessment in Restored Ecosystems',
    venue: 'Under peer review — Modeling Earth Systems and Environment (Q1)',
    summary:
      'Symbolic regression applied to model multi-year microclimate change at Kanha Shanti Vanam.',
  },
];

export const projects = [
  {
    name: 'StarRL',
    repo: 'StarRL',
    highlight: '1455 ELO · 40% win rate · SC2 AI Arena 2026 S1',
    description:
      'Hierarchical PPO agent for StarCraft II (Zerg) with factorized actions (41→4 types + 6 params) and cross-attention fusion of a CNN, Transformer entity encoder and LSTM. Trained via an ELO-ranked self-play league and a scripted-bot curriculum.',
    tags: ['PPO', 'Self-play', 'Transformers', 'PyTorch'],
  },
  {
    name: 'R-DDPM',
    repo: 'R-DDPM',
    highlight: 'Recurrent diffusion for longitudinal data',
    description:
      'Recurrent DDPM (U-Net + ConvGRU) for longitudinal medical image generation, extending the U-Net with spatial attention and FiLM time modulation to model dependencies across image sequences.',
    tags: ['Diffusion', 'ConvGRU', 'Attention'],
  },
  {
    name: 'Coenv',
    repo: 'coenv',
    highlight: 'OpenEnv RL environment for LLM agents',
    description:
      'A full cluster simulator — nodes, pods, deployments, HPAs — exposed as an RL environment to benchmark LLM agents on cluster-management tasks. Ships a FastAPI server and Python client, containerized and deployed to Hugging Face Spaces.',
    tags: ['LLM agents', 'FastAPI', 'Docker'],
  },
  {
    name: 'RL Algorithms',
    repo: 'Rl-Algorithms',
    highlight: 'PPO · A2C · DQN · VPG from scratch',
    description:
      'Clean PyTorch implementations of classic RL algorithms for discrete action spaces, fully compatible with Gymnasium environments.',
    tags: ['PyTorch', 'Gymnasium'],
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'C++'] },
  {
    group: 'RL & ML',
    items: ['PPO', 'A2C', 'DQN', 'VPG', 'Deep Learning', 'ConvGRU / LSTM', 'Transformers', 'DDPM'],
  },
  {
    group: 'Robotics & Autonomy',
    items: ['ROS 2', 'Nav2', 'Autonomous Navigation', 'EKF', 'Visual Odometry', 'Embedded Systems'],
  },
  {
    group: 'Tools & Infra',
    items: ['PyTorch', 'Docker', 'Git', 'LangGraph', 'FastAPI', 'Ray', 'Linux'],
  },
];

export const education = [
  {
    title: 'B.E. Computer Science',
    org: 'PSG Institute of Technology and Applied Research, Coimbatore',
    date: 'Aug 2023 – Jun 2027',
    note: 'CGPA 7.65 / 10',
  },
  {
    title: 'Higher Secondary',
    org: 'Jaycees Matriculation and Higher Secondary School',
    date: '2023',
    note: '92.6%',
  },
];

// Repos already featured above, or not meant for a portfolio.
export const hiddenRepos = new Set([
  'SandyTheAdventurer',
  'SandyTheAdventurer.github.io',
  'dotfiles',
  'nvim-config',
  'Fcc',
]);

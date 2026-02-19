// config.js — 用户只需编辑此文件
const USER_CONFIG = {
  name: "Wei Chen",
  initials: "WC",
  role: "PhD Candidate",
  university: "Carnegie Mellon University",
  email: "weichen@cs.cmu.edu",
  bio: "Research on efficient large language model alignment and reasoning. Interested in reinforcement learning from human feedback and scalable oversight.",
  photo: "",

  stats: [
    { value: "12", label: "Publications" },
    { value: "580+", label: "Citations" },
    { value: "4", label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/citations?user=example",
    github: "https://github.com/weichen-ml",
    twitter: "",
    cv: "assets/cv.pdf",
  },

  publications: [
    {
      year: 2025,
      title: "Reward-Guided Tree Search for Efficient LLM Reasoning",
      authors: "Wei Chen, Yuxiang Zhou, Shuang Li, Graham Neubig",
      venue: "ICML 2025",
      links: { pdf: "#", code: "#" },
      abstract: "We propose a reward-guided tree search algorithm that improves chain-of-thought reasoning in large language models while reducing inference cost by 40%.",
    },
    {
      year: 2024,
      title: "Aligning Language Models with Minimal Human Feedback",
      authors: "Wei Chen, Shuang Li, Graham Neubig",
      venue: "NeurIPS 2024",
      links: { pdf: "#", code: "#" },
      abstract: "We introduce a sample-efficient RLHF framework that achieves competitive alignment performance using 10x fewer human preference labels through active learning.",
    },
    {
      year: 2023,
      title: "Contrastive Preference Optimization for Code Generation",
      authors: "Wei Chen, Yuxiang Zhou, Graham Neubig",
      venue: "ICLR 2024",
      links: { pdf: "#", code: "#" },
      abstract: "A contrastive learning approach to preference optimization that significantly improves code generation quality on HumanEval and MBPP benchmarks.",
    },
  ],

  projects: [
    {
      name: "AlignKit",
      desc: "An open-source toolkit for LLM alignment research, supporting DPO, PPO, and reward modeling.",
      tags: ["Python", "PyTorch", "Transformers"],
      url: "#",
    },
    {
      name: "TreeReason",
      desc: "Efficient tree-search decoding framework for improving LLM reasoning with verifier guidance.",
      tags: ["Python", "vLLM", "MCTS"],
      url: "#",
    },
  ],

  news: [
    { date: "2025.01", badge: "New", text: "Paper accepted at ICML 2025!" },
    { date: "2024.09", badge: "Award", text: "Received the CMU SCS Dean's Fellowship." },
    { date: "2024.05", badge: "New", text: "Paper accepted at NeurIPS 2024!" },
  ],

  education: [
    { period: "2022–Present", degree: "Ph.D. in Computer Science", institution: "Carnegie Mellon University" },
    { period: "2018–2022", degree: "B.S. in Computer Science", institution: "Peking University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Google DeepMind" },
    { period: "Summer 2023", role: "Research Intern", institution: "Meta FAIR" },
  ],
};

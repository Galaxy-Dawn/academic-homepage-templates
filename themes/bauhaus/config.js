// config.js — 用户只需编辑此文件
const USER_CONFIG = {
  name:       "Jane Smith",
  initials:   "JS",
  role:       "PhD Candidate",
  university: "MIT",
  email:      "jane@mit.edu",
  bio:        "Exploring the frontiers of machine learning and AI.",
  photo:      "",  // 可选：头像路径，如 "assets/photo.jpg"

  stats: [
    { value: "10+", label: "Publications" },
    { value: "200+", label: "Citations" },
    { value: "5+",  label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/janesmith",
    twitter: "",   // 留空则不显示
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:    2025,
      title:   "Your Paper Title",
      authors: "Jane Smith, Co-Author 1",
      venue:   "NeurIPS 2025",
      links:   { pdf: "#", code: "#" },
      abstract: "A groundbreaking study presenting novel approaches to the problem domain.",
    },
  ],

  projects: [
    { name: "Project Name", desc: "Brief description.", tags: ["Python", "PyTorch"], url: "#" },
  ],

  news: [
    { date: "2025.01", badge: "New", text: "Paper accepted at NeurIPS 2025!" },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "MIT" },
  ],

  experience: [
    { period: "Summer 2023", role: "Research Intern", institution: "Google DeepMind" },
  ],
};

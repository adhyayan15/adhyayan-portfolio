export type Experience = {
  organization: string;
  role: string;
  period: string;
  category: 'Research' | 'Engineering & Technology' | 'Teaching & Communication' | 'Leadership';
  summary: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
};

// All statements here are tied to the portfolio owner's LinkedIn export and/or his published project work.
// No unverified internships, completed hardware tests, or research outcomes are implied.
export const experiences: Experience[] = [
  {
    organization: 'Embodied Robotics & Autonomy Lab · USF',
    role: 'Undergraduate Research Assistant', period: 'Oct 2026 — Present', category: 'Research',
    summary: 'Contributing to the early research effort around NanaBot, a companion robot for older adults. The work explores how AI, computer vision, and natural interactions could fit into useful, human-centered robotics.',
    highlights: ['Exploring possibilities for assistive human–robot interaction.', 'Working at the intersection of embodied AI, perception, and practical user needs.', 'Ongoing research; no finished clinical product or validated deployment is claimed.'],
    technologies: ['Robotics', 'Computer Vision', 'Human–Robot Interaction'],
  },
  {
    organization: 'USF College of Engineering', role: 'Peer Tutor · Engineering Student Success Center',
    period: 'Aug 2026 — Present', category: 'Teaching & Communication',
    summary: 'Helping engineering students understand challenging material through guided problem solving instead of simply giving away answers.',
    highlights: ['Tutor calculus I–III, physics, chemistry, digital circuits, C programming, electrical systems, engineering analysis, and differential equations.', 'Translate technical ideas into approachable explanations tailored to the individual student.', 'Use questions, reasoning, and worked examples to build lasting understanding.'],
    technologies: ['C', 'Digital Logic', 'Circuit Analysis', 'Mathematics'],
  },
  {
    organization: 'International Society of Automation · USF', role: 'Chapter President',
    period: 'Aug 2026 — Present', category: 'Leadership',
    summary: 'Leading the student chapter and connecting classroom engineering to industrial automation, professional networks, and hands-on learning.',
    highlights: ['Lead a seven-member executive board covering operations, programming, outreach, and community-building.', 'Develop relationships with the ISA Tampa Bay professional chapter and industry representatives.', 'Organize technical workshops, networking events, and opportunities to explore automation careers.'],
    technologies: ['Automation', 'Community Building', 'Industry Outreach'],
  },
  {
    organization: 'Society of Asian Scientists and Engineers · USF', role: 'Vice President, External Affairs',
    period: 'Apr 2026 — Present', category: 'Leadership',
    summary: 'Coordinate student teams across technical projects, industry outreach, public relations, and service, with an emphasis on practical opportunities for members.',
    highlights: ['Helped recruit and coordinate a 20+ member leadership team.', 'Oversee work across projects, external engagement, public relations, and service.', 'Hosted a PCB design workshop attended by 59 students, emphasizing individual questions and a complete full-adder PCB workflow.'],
    technologies: ['Projects Leadership', 'PCB Workshops', 'Industry Partnerships'],
  },
  {
    organization: 'USF College of Engineering', role: 'Student Ambassador',
    period: 'Aug 2026 — Present', category: 'Teaching & Communication',
    summary: 'Representing the College of Engineering to prospective students and visitors through outreach and campus events.',
    highlights: ['Support engineering open-house experiences and visitor engagement.', 'Share first-hand insights into learning engineering at USF.'],
  },
  {
    organization: 'Spaceborn', role: 'Hardware & Integration Intern',
    period: 'Jun 2026', category: 'Engineering & Technology',
    summary: 'Studied STM32 development workflows and the interfaces that connect embedded software to autonomous hardware.',
    highlights: ['Worked with STM32CubeIDE and the architecture of STM32 microcontrollers.', 'Studied UART, SPI, I²C, PWM, and MAVLink fundamentals.', 'Short internship; described as foundational exploration rather than deployed product work.'],
    technologies: ['STM32', 'STM32CubeIDE', 'UART', 'SPI', 'I²C', 'PWM'],
  },
  {
    organization: 'The Oracle · University of South Florida', role: 'News Correspondent',
    period: 'Jan 2026 — May 2026', category: 'Teaching & Communication',
    summary: 'Reported on campus research, student life, institutional decisions, and topics affecting the USF community.',
    highlights: ['Researched and interviewed sources to make technical or complex topics accessible.', 'Covered stories on research activity, funding, campus infrastructure, and student experiences.', 'Learned to ask sharper questions and communicate findings clearly.'],
    link: 'https://www.usforacle.com/author/Adhyayan%20Tiwari,%20CORRESPONDENT/',
  },
  {
    organization: 'SASE · USF', role: 'Conference Chair',
    period: 'Aug 2025 — Apr 2026', category: 'Leadership',
    summary: 'Helped students access conferences, career conversations, company visits, and other opportunities.',
    highlights: ['Coordinated participation logistics for SERC 2026, including registration and carpool arrangements.', 'Organized a visit to the WSP Tampa office and helped lead an internship panel.', 'Supported chapter fundraising and cross-team event execution.'],
  },
  {
    organization: 'National University of Singapore · AIYA', role: 'AI & ML Program Participant',
    period: 'Jun 2024', category: 'Engineering & Technology',
    summary: 'Participated in a 15-day intensive AI/ML program that introduced applied machine learning, natural language processing, and computer vision.',
    highlights: ['Completed two team-based AI projects during the program.', 'Earned a Grade A and faculty recommendation.', 'Received a Best Project recognition awarded to two participants out of fifty.'],
    technologies: ['Machine Learning', 'Python', 'Computer Vision', 'NLP'],
  },
  {
    organization: 'LuneBlaze', role: 'Data Analyst Intern',
    period: 'Dec 2023 — Jan 2024', category: 'Engineering & Technology',
    summary: 'An early introduction to using Python and data analysis to investigate problems and communicate practical insights.',
    highlights: ['Analyzed datasets to identify trends and opportunities.', 'Recognized as Best Performer during the internship.'],
    technologies: ['Python', 'Data Analysis'],
  },
];

export const skillGroups = [
  {title:'Hardware & embedded',items:['STM32 / STM32CubeIDE','ESP32','PCB schematic & layout','Digital circuits','Microcontroller interfaces','UART / I²C / SPI / PWM','Motor drivers','Hardware bring-up planning']},
  {title:'Digital design & software',items:['Verilog HDL','Icarus Verilog','GTKWave','C','Python','Linux / WSL2','Git / GitHub','Algorithmic reasoning']},
  {title:'Robotics, AI & acceleration',items:['ROS 2 (learning)','Gazebo (learning)','Computer vision','OpenCV','PyTorch','NVIDIA TensorRT','CUDA-enabled inference','Benchmarking & parity analysis']},
  {title:'Engineering workflow',items:['KiCad','LTspice','MATLAB','Fusion 360','VS Code','Technical writing','Testbenches','Data visualization']},
];

export const honors = [
  {name:'4.0 cumulative GPA',issuer:'University of South Florida · Including transfer coursework',year:'2025–2026'},
  {name:'Dean’s List · Two semesters',issuer:'University of South Florida',year:'Fall 2025 / Spring 2026'},
  {name:'First place · Object-following F1 robot',issuer:'USF Foundations of Engineering · 15 teams',year:'Spring 2026'},
  {name:'Best Project recognition · AIYA',issuer:'National University of Singapore · 2 of 50 participants',year:'2024'},
  {name:'Second place · Central India regionals',issuer:'World Robot Olympiad',year:'Earlier achievement'},
  {name:'Best Aim & Utility / Best Knowledge & Content',issuer:'Baal Vigyan science recognitions',year:'Earlier achievements'},
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tools: string[];
  summary: string;
  question: string;
  approach: string;
  result: string;
  limitation: string;
  next: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  github?: string;
  imageCredit?: string;
  lessons: string[];
  gallery?: {src:string;caption:string}[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "reflex-vision", index: "01", title: "Reflex Vision", subtitle: "How much faster is faster?", category: "GPU COMPUTING / COMPUTER VISION", year: "2026", tools: ["Python", "PyTorch", "TensorRT", "CUDA", "YOLO26n"],
    summary: "I benchmarked the same object detector on PyTorch and NVIDIA TensorRT, then checked whether the speedup changed the detections.",
    question: "Running a pretrained model is one thing. What changes when you optimize its inference backend, and does it still see the same objects?",
    approach: "I built the benchmarking and analysis workflow, tested both backends against the same recorded video, and compared predictions across 634 frames. The model was pretrained, not trained by me.",
    result: "In my FP32-configured, single-device setup, median prediction latency dropped from 9.90 ms in PyTorch to about 5.56 ms in TensorRT. Among 959 matched detections, median bounding-box IoU was 0.9998; TensorRT returned two additional detections near the confidence threshold.",
    limitation: "These are device-specific prediction timings, not whole-application FPS or camera-to-screen latency. Agreement with PyTorch is not ground-truth accuracy.",
    next: "Repeat across more scenes and temperatures, validate against labeled ground truth, and expand the performance study.",
    accent: "#bba27d", image: "https://raw.githubusercontent.com/adhyayan15/reflex-vision/main/results/charts/prediction_latency.png", imageAlt: "Actual Reflex Vision prediction latency chart", github: "https://github.com/adhyayan15/reflex-vision",
    lessons: ["GPU speed and output agreement need to be measured separately.","A single FPS claim can obscure preprocessing, inference, and postprocessing costs.","Boundary detections near a confidence threshold deserve manual inspection."],
    gallery: [{src:"https://raw.githubusercontent.com/adhyayan15/reflex-vision/main/results/charts/processing_stages.png",caption:"Actual logged processing-stage latency breakdown"}],
    metrics: [{label:"MEDIAN LATENCY",value:"−44%"},{label:"MATCHED BOX MEDIAN IOU",value:"0.9998"},{label:"FRAMES COMPARED",value:"634"}]
  },
  {
    slug: "orion-1", index: "02", title: "Orion-1", subtitle: "A controller for the robots I want to build.", category: "EMBEDDED SYSTEMS / PCB DESIGN", year: "2026", tools: ["KiCad", "STM32F407", "Motor Control", "PCB Layout", "SWD"],
    summary: "A custom STM32F407-based two-layer robotics controller I designed to bring motor control, power, and peripherals onto one PCB.",
    question: "Could I design one controller board instead of rebuilding every robot around development boards and jumper wires?",
    approach: "I designed a 4 × 4-inch two-layer KiCad PCB around the STM32F407, TB6612FNG motor driver, 3.3 V regulation, four servo connectors, SWD, and UART / I²C / SPI access.",
    result: "Revision one includes editable schematic and layout files, exported board views, hardware architecture notes, and a bring-up plan.",
    limitation: "This is a design-stage prototype. It has not been documented as assembled and electrically validated; there are open hardware issues to resolve before manufacturing.",
    next: "Resolve electrical design issues, regenerate fabrication outputs, then verify supply rails, SWD access, and motor control on real hardware.",
    accent: "#8ba59d", image: "https://raw.githubusercontent.com/adhyayan15/orion1-pcb/main/Images/PCB_3D_Front.png", imageAlt: "Actual KiCad 3D render of Orion-1 PCB", github: "https://github.com/adhyayan15/orion1-pcb",
    lessons: ["A routed board is not the same as a verified hardware controller.","Power paths, grounding, debug access, and manufacturability matter from the first schematic.","Write a bring-up checklist before treating a design as finished."],
    gallery: [{src:"https://raw.githubusercontent.com/adhyayan15/orion1-pcb/main/Images/PCB_Top.png",caption:"Actual Orion-1 layout"},{src:"https://raw.githubusercontent.com/adhyayan15/orion1-pcb/main/Images/Schematic.png",caption:"Orion-1 schematic overview"}],
    metrics: [{label:"PCB",value:"2 layers"},{label:"DIMENSIONS",value:"4 × 4 in"},{label:"MCU",value:"STM32F407"}]
  },
  {
    slug: "f1-autonomous-robot", index: "03", title: "F1 Autonomous Robot", subtitle: "Our first robot. Our first-place finish.", category: "ROBOTICS / AUTONOMOUS CONTROL", year: "2026", tools: ["Arduino", "Ultrasonic Sensing", "H-Bridge Motor Driver", "Robot Testing", "3D-Printed Parts"],
    summary: "An F1-inspired autonomous object-following robot built with my engineering team. We finished first among 15 teams at USF's Foundations of Engineering competition.",
    question: "Could we make a small F1-inspired robot respond to its surroundings and follow an object without someone steering it manually?",
    approach: "Our team built an Arduino-based robot using an ultrasonic sensor to detect an object and an H-bridge driver to control its motors. I served as Test Lead, working on testing and improving the robot's behavior before the competition.",
    result: "Our team earned 1st place out of 15 teams in the Spring 2026 Foundations of Engineering F1 robot challenge at USF. The photo shows our robot prototypes and first-place trophy.",
    limitation: "This was a team-built classroom robot, not an autonomous racing vehicle. Its autonomy was object-following; the competition result is not a measurement of navigation reliability or real-world autonomy.",
    next: "Revisit the design with logged sensor data, more systematic performance tests, and improved motor control to make its responses more repeatable.",
    accent: "#c3a47e", image: "/images/f1-first-place.webp", imageAlt: "First-place trophy behind two white F1-inspired 3D-printed robot prototypes at USF", imageCredit: "Photo from the USF Foundations of Engineering F1 robot competition",
    lessons: ["A successful robot needs more than working code: mechanical design, sensing, motor control, and testing have to work together.","Testing different situations is how you find out where a robot actually struggles.","The first-place result was a team achievement, and my contribution focused on testing and refinement."],
    metrics: [{label:"COMPETITION FINISH",value:"1st place"},{label:"TEAMS",value:"15"},{label:"MY ROLE",value:"Test Lead"}]
  },
  {
    slug: "bcd-decade-counter", index: "04", title: "BCD Decade Counter", subtitle: "From jumper wires to copper traces.", category: "DIGITAL ELECTRONICS / PCB", year: "2026", tools: ["KiCad", "NE555", "74LS90", "CD4511", "7-Segment Display"],
    summary: "A microcontroller-free 0–9 counter: prototyped on a breadboard, then designed as a KiCad PCB.",
    question: "Can a timer, a decade counter, and a decoder count from zero to nine without any software?",
    approach: "I tested the counting circuit on a breadboard and translated the clock, counter, BCD-to-seven-segment decoder, and display into a routed PCB design.",
    result: "The breadboard circuit was tested. The completed KiCad schematic and PCB layout passed checks during design work.",
    limitation: "The repository does not claim a manufactured and tested PCB. Breadboard validation and PCB-layout completion are separate milestones.",
    next: "Fabricate, assemble, and validate the PCB against the prototype, documenting actual measurements.",
    accent: "#d0a48e", image: "https://raw.githubusercontent.com/adhyayan15/BCD_Decade_Counter/main/Images/3D%20view.png", imageAlt: "Actual 3D render of BCD decade counter PCB", github: "https://github.com/adhyayan15/BCD_Decade_Counter",
    lessons: ["A counter can be implemented with clocked logic without a microcontroller.","Breadboard wiring and manufacturable copper routing have different constraints.","ERC/DRC passing does not establish physical board operation."],
    gallery: [{src:"https://raw.githubusercontent.com/adhyayan15/BCD_Decade_Counter/main/Images/PCB.png",caption:"Actual KiCad PCB layout"},{src:"https://raw.githubusercontent.com/adhyayan15/BCD_Decade_Counter/main/Images/PCB%20Schematic.png",caption:"Digital counter schematic"}],
    metrics: [{label:"OUTPUT",value:"0 → 9"},{label:"CONTROL",value:"No MCU"},{label:"STATE",value:"PCB designed"}]
  }
];
export const findProject = (slug:string) => projects.find(p=>p.slug === slug);

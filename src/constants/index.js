import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  figma,
  file02,
  framer,
  homeSmile,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "about",
  },
  {
    id: "1",
    title: "Our Values",
    url: "values",
  },
  {
    id: "2",
    title: "Volunteer",
    url: "volunteer",
  },
  {
    id: "3",
    title: "Donate",
    url: "donate",
    onlyMobile: true,
  },
  {
    /*
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },*/
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const volunteer = [
  {
    id: 0,
    title: "Trustees",
    description:
      "Meets quarterly to make key governance decisions and helps steer and direct the charity.",
  },
  {
    id: 1,
    title: "Treasurer/Accountant",
    description:
      "Helps ensure our financial sustainability and effective management of finances.",
  },
  {
    id: 2,
    title: "Operations Manager",
    description: "Helps run the day-to-day aspects of Unlock Your Potential.",
  },
  {
    id: 3,
    title: "Volunteer Coordinator",
    description:
      "Recruits, selects and trains volunteers, creating a volunteer programme at our org.",
  },
  {
    id: 4,
    title: "Graphic Designer",
    description:
      "Create digital and print based designs such as posters and social media posts.",
  },
  {
    id: 5,
    title: "Website Designer",
    description:
      "Create a better multi-purpose website that suits our charity better.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const mission = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const values = [
  {
    id: "0",
    title: "Empowerment",
    text: "We believe in empowering individuals to take control of their lives and reach their full potential.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Inclusivity",
    text: "We are committed to creating an inclusive environment that welcomes and supports people from all backgrounds.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Collaboration",
    text: "We believe in working together with our community and partners to achieve our goals.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Continuous Improvement",
    text: "We are dedicated to continuously improving our programmes and services to better serve our beneficiaries.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Social Responsibility",
    text: "We recognise our responsibility to contribute to the betterment of society and to promote social mobility for all.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

import { FaTelegramPlane, FaSnapchatGhost } from "react-icons/fa";

import {
  FaMeta,
  FaInstagram,
  FaX,
  FaRedditAlien,
  FaLinkedinIn,
} from "react-icons/fa6";

export const socials = [
  {
    id: "0",
    title: "instagram",
    icon: FaInstagram,
    url: "https://instagram.com/",
  },
  {
    id: "1",
    title: "linkedin",
    icon: FaLinkedinIn,
    url: "https://linkedin.com/",
  },
  {
    id: "2",
    title: "meta",
    icon: FaMeta,
    url: "https://meta.com/gb",
  },
  {
    id: "3",
    title: "reddit",
    icon: FaRedditAlien,
    url: "https://reddit.com/",
  },
  {
    id: "4",
    title: "snap",
    icon: FaSnapchatGhost,
    url: "https://snapchat.com/",
  },
  {
    id: "5",
    title: "telegram",
    icon: FaTelegramPlane,
    url: "https://telegram.org/",
  },
  {
    id: "6",
    title: "x",
    icon: FaX,
    url: "https://x.com/",
  },
];

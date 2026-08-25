import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaX } from "react-icons/fa6";

export const navigation = [
  { id: "0", title: "About Us", url: "about" },
  { id: "1", title: "Our Values", url: "values" },
  { id: "2", title: "Volunteer", url: "volunteer" },
  { id: "3", title: "Donate", url: "donate", onlyMobile: true },
];

export const volunteer = [
  {
    id: 0,
    title: "Trustees",
    description:
      "Meet quarterly to make key governance decisions and help steer the charity",
  },
  {
    id: 1,
    title: "Treasurer / Accountant",
    description:
      "Help ensure our financial sustainability and effective management of finances",
  },
  {
    id: 2,
    title: "Operations Manager",
    description: "Help run the day-to-day work of Unlock Your Potential",
  },
  {
    id: 3,
    title: "Volunteer Coordinator",
    description:
      "Recruit, select and train volunteers while shaping our volunteer programme",
  },
  {
    id: 4,
    title: "Graphic Designer",
    description:
      "Create thoughtful digital and print designs for campaigns and social media",
  },
  {
    id: 5,
    title: "Website Designer",
    description:
      "Help evolve our digital presence into a useful home for our community",
  },
];

export const values = [
  {
    id: "0",
    title: "Empowerment",
    text: "We help individuals take control of their lives and reach their full potential",
  },
  {
    id: "1",
    title: "Inclusivity",
    text: "We create an environment that welcomes and supports people from every background",
  },
  {
    id: "2",
    title: "Collaboration",
    text: "We work alongside our communities and partners to achieve meaningful change",
  },
  {
    id: "3",
    title: "Continuous Improvement",
    text: "We keep improving our programmes and services around the people they serve",
  },
  {
    id: "4",
    title: "Social Responsibility",
    text: "We contribute to a fairer society and champion social mobility for all",
  },
];

export const socials = [
  {
    id: "0",
    title: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com/",
  },
  {
    id: "1",
    title: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/",
  },
  {
    id: "2",
    title: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://linkedin.com/",
  },
  {
    id: "3",
    title: "Telegram",
    icon: FaTelegramPlane,
    url: "https://telegram.org/",
  },
  { id: "4", title: "X", icon: FaX, url: "https://x.com/" },
];

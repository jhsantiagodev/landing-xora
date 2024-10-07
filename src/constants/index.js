import f1 from "../assets/images/feature-1.png";
import f2 from "../assets/images/feature-2.png";
import magic from "../assets/images/magictouch.svg";
import docs from "../assets/images/docs.svg";
import d1 from "../assets/images/detail-1.png";
import d2 from "../assets/images/detail-2.png";
import d3 from "../assets/images/detail-3.png";
import d4 from "../assets/images/detail-4.png";
import circle from "../assets/images/circle.svg";
import triangle from "../assets/images/triangle.svg";
import exagon from "../assets/images/hexagon.svg";
import plan1 from "../assets/images/plan-1.png";
import plan2 from "../assets/images/plan-2.png";
import plan3 from "../assets/images/plan-3.png";
import test1 from "../assets/images/testimonials/jessica-saunders.png";
import test2 from "../assets/images/testimonials/mark-erixon.png";
import test3 from "../assets/images/testimonials/melanie-hurst.png";
import test4 from "../assets/images/testimonials/alicia-barker.png";
import test5 from "../assets/images/testimonials/becky-snider.png";
import test6 from "../assets/images/testimonials/jim-bradley.png";
//import { Ios, Android, Windows, Web } from "../ImagesSvg/ImgSvg";
import ios from "../assets/svg/ios.svg";
import android from "../assets/svg/android.svg";
import web from "../assets/svg/web.svg";
import windows from "../assets/svg/windows.svg";

import logo1 from "../assets/images/logos/afterpay.svg";
import logo2 from "../assets/images/logos/amplitude.svg";
import logo3 from "../assets/images/logos/sonos.svg";
import logo4 from "../assets/images/logos/maze.svg";
import logo5 from "../assets/images/logos/drips.svg";

export const features = [
  {
    id: "0",
    icon: f1,
    caption: "Easy integration",
    title: "Work smarter not harder",
    text: "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
    button: {
      icon: magic,
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    icon: f2,
    caption: "Secure & trustworthy",
    title: "Sleep easy, we got your back",
    text: "Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.",
    button: {
      icon: docs,
      title: "Read the docs",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: d1,
    title: "AI automated video editing",
  },
  {
    id: "1",
    icon: d2,
    title: "Collaborate with your team",
  },
  {
    id: "2",
    icon: d3,
    title: "Ultra fast cloud-engine",
  },
  {
    id: "3",
    icon: d4,
    title: "24 / 7 Customer support",
  },
];

export const faq = [
  {
    id: "0",
    question: "How easy is it to setup Xora?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "1",
    question: "Can I integrate Xora with other platforms?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "2",
    question: "How often do you add new content?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "3",
    question: "What your refund policy?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "4",
    question: "Do you have corporate plans?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "5",
    question: "What happens when I’m out of storage?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "6",
    question: "Can I upgrade my plan?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "7",
    question: "How do I invite my team?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "8",
    question: "Do you offer training for individuals and teams?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "9",
    question: "I’m locked out of my account what do I do?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: circle,
    logo: plan1,
  },
  {
    id: "1",
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: triangle,
    logo: plan2,
  },
  {
    id: "2",
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: exagon,
    logo: plan3,
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: test1,
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: test2,
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: test3,
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: test4,
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Floclips",
    avatarUrl: test5,
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "Vid capital intl",
    avatarUrl: test6,
    comment:
      "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
  },
];

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: logo1,
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: logo2,
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: logo3,
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: logo4,
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: logo5,
    width: 77,
    height: 48,
  },
];

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: ios,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: android,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: windows,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: web,
    url: "#",
  },
];

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];

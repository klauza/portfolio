import React from 'react';
import { Bg1 } from '../../Icons';
import { NobleLeadersIcon } from '../../media';

export const projectList = [
  {
    id: 0,
    name: "Noble-leaders",
    icon: NobleLeadersIcon,
    desc_short: "simple but awesome",
    desc_long: "Noble-leaders is a fullstack game centre app. It is a minimalistic, mobile friendly project with subtle design and features. There is few things to expore. Made for entertaining purposes. With ranking system the app allows a player to compete with other people.",
    link: "https://www.google.com",
    font_primary_color: "#fff",
    primary_color: "#3AC0D5",
    wave_color_1: "#29AABF",
    wave_color_2: "#1C8394",
    wave_color_3: "#177180",
    btn_bg_color: "#000",
    btn_text_color: "#fff",
    particles_sidebar: 'X',
    background: < Bg1 />,
    technologies: ["React, Redux", "node.js/express.js", "mongoDB", "CSS/Sass"],
    features: ["custom authentication", "player rank system", "user dashboard", "games", "simple built-in forum"],
  }
]
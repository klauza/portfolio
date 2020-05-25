import React from 'react';
import { Bg1 } from '../../Icons';
import { NobleLeadersIcon } from '../../media';

export const projectList = [
  {
    id: 0,
    name: "Noble-leaders",
    icon: NobleLeadersIcon,
    desc_short: "simple but awesome",
    desc_long: "lorem ipsum dolor sit, here will go some longer paragraph, a short description about the project and glowne zalozenia projektu.",
    link: "https://www.google.com",
    font_primary_color: "#fff",
    primary_color: "#3AC0D5",
    wave_color_1: "#29AABF",
    wave_color_2: "#1C8394",
    wave_color_3: "#177180",
    particles_sidebar: 'X',
    background: < Bg1 />,
    technologies: ["React, Redux", "node.js/express.js", "mongoDB", "CSS/Sass"],
    features: ["custom authentication", "player rank system", "user dashboard", "built-in games", "simple built-in forum"],
  }
]
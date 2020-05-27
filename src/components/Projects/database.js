import React from 'react';
import { Bg1, Bg2, Bg3, Bg4 } from '../../Icons';
import { BhutanotelBG, NobleLeadersBG, CarServicesBG, SkeletonBG, HeroprojectBG } from '../../Icons';
import { NobleLeadersIcon, CarServicesIcon, ProtoFolioIcon, BhutanotelIcon, HeroprojectIcon, PhotographyIcon, pwdMakerIcon } from '../../media';

export const projectList = [
  {
    id: 1,
    name: "Noble-leaders",
    icon: NobleLeadersIcon,
    desc_short: "competitive game platform",
    desc_long: "Noble-leaders is a fullstack game centre app. It is a minimalistic, mobile friendly project with subtle design and features. Made for entertaining purposes. With ranking system the app allows a player to compete with other people. There is few fun things to expore.",
    link_text_live: "noble-leaders.klauza-dev.com",
    link_live: "https://noble-leaders.klauza-dev.com",
    link_github: "https://github.com/klauza/noble-leaders",
    link_youtube: "https://www.google.com",
    font_primary_color: "#fff",
    font_sidebar_secondary_color: "lightgrey",
    primary_color: "#3AC0D5",
    wave_color_1: "#29AABF",
    wave_color_2: "#1C8394",
    wave_color_3: "#177180",
    btn_bg_color: "#000",
    btn_text_color: "#fff",
    particles_sidebar: 'X',
    background: < Bg1 />,
    bg_image: <NobleLeadersBG />,
    bg_css_screen: "opacity: 0.15; top: 55%; left: 25%; transform: translate(0, -50%);",
    bg_css_mobile: "left: 5%; width: 170%;",
    technologies: ["React, Redux", "node.js/express.js", "mongoDB", "CSS/Sass"],
    features: ["custom authentication", "player rank system", "user dashboard", "games", "simple built-in forum"]
  },
  {
    id: 2,
    name: "Car Services",
    icon: CarServicesIcon,
    desc_short: "Services for daily drivers",
    desc_long: "Website made for small business model to improve customer quantity and business quality. The Car Services company is using tools such as HHO engine cleaner designed to maintain daily driving cars.",
    link_text_live: "car-services.klauza-dev.com",
    link_live: "https://car-services.klauza-dev.com",
    link_github: "https://github.com/klauza/sim_vices",
    link_youtube: "https://www.google.com",
    font_primary_color: "#fff",
    font_sidebar_secondary_color: "lightgrey",
    primary_color: "#6e6154",
    wave_color_1: "#594f44",
    wave_color_2: "#474038",
    wave_color_3: "#363333",
    btn_bg_color: "#000",
    btn_text_color: "#fff",
    particles_sidebar: 'X',
    background: < Bg2 />,
    bg_image: <CarServicesBG />,
    bg_css_screen: "top: 60%; left: 5%; transform: translate(0, -50%);",
    bg_css_mobile: "left: 5%; width: 200%;",
    technologies: ["React, Redux", "CSS/styled-components", "Progressive Web App", "Service Worker"],
    features: ["Google Maps", "animations", "mobile friendly"]
  },
  {
    id: 3,
    name: "PROTO-FOLIO",
    icon: ProtoFolioIcon,
    desc_short: "Animated web-app skeleton",
    desc_long: "Drag and pull the routes with any pointer. Flexible route caching makes the project very fluid. Feel the animations across the project and let yourself to get a new inspiration.",
    link_text_live: "proto-folio.klauza-dev.com",
    link_live: "https://proto-folio.klauza-dev.com",
    link_github: "https://github.com/klauza/proto-folio",
    link_youtube: "https://www.google.com",
    font_primary_color: "#000",
    font_sidebar_secondary_color: "black",
    primary_color: "#f0f0f0",
    wave_color_1: "#e3e0dc",
    wave_color_2: "#d9d7d4",
    wave_color_3: "#c9c6c3",
    btn_bg_color: "#000",
    btn_text_color: "#fff",
    particles_sidebar: 'X',
    background: < Bg3 />,
    bg_image: <SkeletonBG />,
    bg_css_screen: "width: 65%; opacity: 0.45; top: 50%; left: 35%; transform: translate(0, -50%);",
    bg_css_mobile: "left: 5%; top: 45%; width: 110%;",
    technologies: ["React, Redux", "CSS/styled-components"],
    features: ["complex animations", "mobile friendly"]
  },
  {
    id: 4,
    name: "Bhutanotel",
    icon: BhutanotelIcon,
    desc_short: "SPA hotel enterprise",
    desc_long: "Bhutanotel is a fictitious hotel facility located in Thimphu, the capitol of Bhutan. The enterprise was founded for travellers and world-explorers to provide them a cosy, luxury and pleasant place to stay between their demanding adventures.",
    link_text_live: "bhutanotel.klauza-dev.com",
    link_live: "https://bhutanotel.klauza-dev.com",
    link_github: "https://github.com/klauza/bhutanotel",
    link_youtube: "https://www.google.com",
    font_primary_color: "#fff",
    font_sidebar_secondary_color: "lightgrey",
    primary_color: "#7da856",
    wave_color_1: "#628544",
    wave_color_2: "#4f6b37",
    wave_color_3: "#3a4f28",
    btn_bg_color: "#000",
    btn_text_color: "#fff",
    particles_sidebar: 'X',
    background: < Bg2 />,
    bg_image: <BhutanotelBG />,
    bg_css_screen: "opacity: 0.15; top: 50%; left: 25%; transform: translate(0, -50%);",
    bg_css_mobile: "left: 5%; width: 170%;",
    technologies: ["React, Redux", "CSS/styled-components"],
    features: ["leaflet maps", "booking scheme", "animations", "mobile friendly"]
  },
  {
    id: 5,
    name: "heroproject",
    icon: HeroprojectIcon,
    desc_short: "character creation app",
    desc_long: "Create a character from available data sources. Make project publicly viewable by other users.",
    link_text_live: "hero-project-klauza.fbapp.com",
    link_live: "https://hero-project-klauza.firebaseapp.com/",
    link_github: "https://github.com/klauza/heroproject",
    link_youtube: "https://www.google.com",
    font_primary_color: "#fff",
    font_sidebar_secondary_color: "lightgrey",
    primary_color: "#7a4c4c",
    wave_color_1: "#783d3d",
    wave_color_2: "#5e2e2e",
    wave_color_3: "#4a2121",
    btn_bg_color: "#000",
    btn_text_color: "#fff",
    particles_sidebar: 'X',
    background: < Bg1 />,
    bg_image: <HeroprojectBG />,
    bg_css_screen: "opacity: 0.2; width: 30%; top: 50%; left: 65%; transform: translate(-50%, -50%);",
    bg_css_mobile: "left: 25%; width: 90%; transform: translate(0, -50%)",
    technologies: ["React", "CSS", "Firebase"],
    features: ["auth system", "creation panel", "downloadable content", "mobile friendly"]
  }
]

export const projectQty = projectList.length;
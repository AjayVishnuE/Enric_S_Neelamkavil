import c1 from "../assets/orglogoslider/aproit.svg"
import c2 from '../assets/orglogoslider/cce.svg';
import c3 from '../assets/orglogoslider/cholaart.svg';
import c4 from '../assets/orglogoslider/houndelect.svg';
import c5 from '../assets/orglogoslider/opengrad.svg';
import c6 from '../assets/orglogoslider/sarahstechno.svg';
import c7 from '../assets/orglogoslider/unnathi.svg';
import c8 from '../assets/orglogoslider/µLearn.svg';
import Poster from '../assets/FigmaUi/Posters.png';
import UI from '../assets/FigmaUi/UserInterface.png';
import Branding from '../assets/FigmaUi/Branding.png';
import Logos from '../assets/FigmaUi/Logos.png';
import Printables from '../assets/FigmaUi/Printables.png';
import { award_image, Arrow1, Arrow2, Arrow3, Arrow4, Arrow5, resume, li, insta, me, fb, yt, x } from "./imports";

export const navdataset = ["Home","About","Works","Resume","Contact"];

export const Resume1 = resume;

export const spotlightdata = {
    name: "Enric S Neelamkavil",
    desription : "Creative Designer",
    roles : ['UI Design','Graphic Design','UX Design','Logo Design','Brand Identity Design']
}

export const images = [c1, c2, c3, c4, c5, c6, c7, c8];

export const whoamidata = {
    role_Abbreviation:"a",
    role: "Lead UI Designer",
    organisation : "fun design studio",
    description_b4_highlight:"My work has been recognized with ",
    description_highlight:"Huddle Designers Award 2023",
    description_after_highlight:", and I take pride in the positive feedback I've received from both clients and colleagues. Looking forward, I believe that a good designer not only creates appealing interfaces but also contributes to making the digital world more user-friendly and inclusive.",
    numbers_exp_work_clients: ["03","32","12"],
    award_image: award_image,
    award_img_caption_line1: "Huddle Designers",
    award_img_caption_line2: "Award 2023",
    award_description : "Huddle Designers Award 2023 for securing the position in Top 13 Designers for designing KELP KOOKIES in Branding Challenge during India's largest Beachside Startup Festival - Huddle Global hosted by Kerala Startup Mission.",
}

export const FigmaUI_Center={
    abbreviations : ["P","U","B","L","P"],
    images : [Poster, Branding, Printables, UI, Logos],
    image_desc: ["Posters", "Branding", "Printables", "User Interface", "Logos"],
    colorset : ["#FC72FF", "#0ACF83", "#3A7DFF", "#A259FF", "#F11E37"],
    arrows : [ Arrow1, Arrow2, Arrow3, Arrow4, Arrow5 ]
}

export const ConnectSectionData = {
    email:"enricsneelamkavil@gmail.com",
    phone_conutry_code:"+91",
    phone:"94007 43624",
    linkedin:{logo: li, link:"https://linkedin.com/in/enricsneelamkavil"},
    instagram:{logo: insta, link:"https://www.instagram.com/enricsneelamkavil/"},
    medium:{logo: me, link:"https://medium.com/@enricsneelamkavil"},
    faceboook:{logo: fb, link:"https://www.facebook.com/enricsneelamkavil"},
    youtube:{logo: yt, link:"https://www.youtube.com/@enricsneelamkavil"},
    x:{logo: x, link:"https://twitter.com/enricneels"}
}
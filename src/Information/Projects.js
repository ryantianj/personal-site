import pingImage from "./images/Ping.jpg"
import personalSiteImage from "./images/Personal Website.png"
import PHSImage from "./images/PHS.jpg"
import SAGEImage from "./images/sage.png"
import SudokuImage from "./images/Sudoku.png"
import NEOImage from "./images/Neo.png"
import WTGImage from "./images/TP.png"
import {LOCAL} from "../Globals";
export const projectsInfo = [
    {
        title: "P!ng",
        info: "P!ng was the result of a summer project undertaken by my friend Marcus and I.\n" +
            "\n" +
            "We aimed to create a mobile application to connect like minded individuals based on their passion and interests, while offering the flexibility of scalability.\n" +
            "\n" +
            "It was created using the React Native and Google Firebase framework, incorporating many software development practices in the mix too." +
            " Unfortunately, Ping is not deployed to the public due to costs and maintenance issues",
        role: "Full Stack developer, UI/UX Designer",
        technologies: ["React Native", "CSS", "Firebase"],
        url: "https://github.com/ryantianj/ping",
        photo: pingImage
    },
    {
        title: "Personal Website",
        info: "This very website! Coded from scratch, no external libraries used. This was done prior to finishing an online React course." +
            "\n\nI was keen to explore the new functionalities I picked up, having self-learnt React previously. This project incorporates Context, " +
            "Portals API",
        role: "Full Stack developer, UI/UX Designer",
        technologies: ["React", "CSS"],
        url: "https://github.com/ryantianj",
        photo: personalSiteImage
    },
    {
        title: "Public Health Service",
        info: "Initiated in 2004 by medical students from NUS Medicine, the more-than-a-decade old Public Health Service (PHS) aims to be a first-class student-led health service in Singapore. Its motto is “Promoting Health, Spreading Awareness”.\n" +
            "\n" +
            "This in essence summarises what PHS does as a health service – firstly, promoting positive health behaviour through a population-based approach using primary and secondary prevention strategies; and secondly, spreading awareness of the need and the means to look after one’s own health through its health education programmes.\n" +
            "\n" +
            "My role was to develop the frontend and backend of the PHS application that will be used in future PHS screenings." +
            "\n\n The resultant screening was a huge success, the app successfully served thousands of patients and streamlined the screening " +
            "process which previously used pen and paper.",
        role: "Full Stack developer, UI/UX Designer",
        technologies: ["React", "CSS", "MongoDB"],
        url: "https://medicine.nus.edu.sg/giving/what-to-support/service/public-health-service/",
        photo: PHSImage
    },
    {
        title: "SAGE",
        info: "Web Application for social networking. This project was done at a start-up, who's goal was to connect like minded" +
            " individuals, and provide mentoring, workshops and other social networking events." +
            "\n\n I acted as the technical lead during my time there, directing the movement of the project while implementing features." +
            "\n\n Some of the more prominent features include an OTP authentication system and searching system",
        role: "Tech Lead, Software Developer",
        technologies: ["React", "Python", "CSS", "MongoDB", "Firebase"],
        url: "https://app.sagexperiences.com/login",
        photo: SAGEImage
    },
    {
        title: "Sudoku Solver",
        info: "Solves Sudoku by treating the problem as a CSP (constraint satisfaction problem) and backtracking to get the final result. " +
            "\n\nOriginally a leetcode problem, I decided to convert my solution to JavaScript. Also for my grandparents who does Sudoku in their free time.",
        role: "Developer",
        technologies: ["JavaScript"],
        url: "https://ryantianj.github.io/sudoku/",
        photo: SudokuImage
    },
    {
        title: "Neo",
        info: "Command Line Task Manager",
        role: "Software Developer",
        technologies: ["Java", "JavaFX"],
        url: "https://github.com/ryantianj/ip",
        photo: NEOImage
    },
    {
        title: "WhereTourGo",
        info: "Command Line Contact Book",
        role: "Team Leader, Software Developer",
        technologies: ["Java", "JavaFX"],
        url: "https://github.com/ryantianj/tp",
        photo: WTGImage
    }
]
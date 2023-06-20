import {DiPython, DiJava, DiJavascript1, DiGo, DiReact, DiCss3, DiMongodb,
    DiPostgresql, DiNodejsSmall, DiGoogleCloudPlatform} from 'react-icons/di'
import {IoLogoFirebase} from "react-icons/io5";
import {TbBrandNextjs, TbBrandDocker} from "react-icons/tb";
import {SiFlask, SiCplusplus} from "react-icons/si"
import {types} from "../Globals";

export const skillsInfo = []

export const bioInfo = "\n" +
    "Hello, I'm Ryan. I am a Computer Science undergraduate at the National University of Singapore. " +
    "I have a strong passion for software development, artificial intelligence and computer security. " +
    "In my free time, I work on personal or outsourced software " +
    "development projects of all sorts."

export const softwareInfo = [
    {text: "Python", icon: <DiPython/>, type: types.LANGUAGE},
    {text: "Java", icon: <DiJava />, type: types.LANGUAGE},
    {text: "Javascript", icon: <DiJavascript1 />, type: types.LANGUAGE},
    {text: "Go", icon: <DiGo />, type: types.LANGUAGE},
    {text: "C++", icon: <SiCplusplus />, type: types.LANGUAGE},
    {text: "CSS", icon: <DiCss3 />, type: types.LANGUAGE},
    {text: "React", icon: <DiReact />, type: types.FRAMEWORK},
    {text: "React Native", icon: <DiReact />, type: types.FRAMEWORK},
    {text: "NodeJS", icon: <DiNodejsSmall />, type: types.FRAMEWORK},
    {text: "NextJS", icon: <TbBrandNextjs />, type: types.FRAMEWORK},
    {text: "Flask", icon: <SiFlask />, type: types.FRAMEWORK},
    {text: "Google Cloud", icon: <DiGoogleCloudPlatform />, type: types.CLOUD},
    {text: "Firebase", icon: <IoLogoFirebase />, type: types.CLOUD},
    {text: "MongoDB", icon: <DiMongodb />, type: types.CLOUD},
    {text: "PostgreSQL", icon: <DiPostgresql />, type: types.CLOUD},
    {text: "Docker", icon: <TbBrandDocker />, type: types.OTHERS},
]

export const educationInfo = [
    {school: "National University of Singapore", type: "Bachelor of Computing in Computer Science (Honours)", year: 2024}
]
export const interestInfo = ["Squash", "Badminton", "Netflix", "Gaming", "Food", "Chess"]

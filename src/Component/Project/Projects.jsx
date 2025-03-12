import portfolio from "../../assets/images/portfolio.jpeg";
import todo from "../../assets/images/todo.png";
import TicTacToe from "../../assets/images/TicTacToe.png";
import resturent from "../../assets/images/resturent.jpeg";
import Rock from "../../assets/images/Rock.jpeg";
import ecomrace from "../../assets/images/ecomrace.jpeg";
import spotify from "../../assets/images/spotify.jpeg";
import sunDown from "../../assets/images/sunDown.jpeg";
import facbook from '../../assets/images/facebook.avif'
import dataEntry from '../../assets/images/dataEntry.avif'
import travel from '../../assets/images/travel.avif'
import nadra from '../../assets/images/nadra.jpeg'
import './Projects.css'

function Projects() {
  let projects = [
    {
      name: "Portfolio",
      desc: "I developed a portfolio website using html,css, JavaScript and also developed in React.js. The site showcases my projects and skills, with a responsive design and interactive features that enhance the user experience.",
      img: portfolio,
    },
    {
      name: "Full stack Nadra Token web App",
      desc: "I developed a Full stack Nadra Token web App using MERN.This web app feature is personal.",
      img: nadra,
    },
    {
      name: "Listing & Traviling web App",
      desc: "I developed a Full stack Listing & Traviling web App using MERN. The site showcases listings and traviling, with a responsive design and interactive features that enhance the user experience.",
      img: travel,
    },
    {
      name: "Full stack Data Entry web App",
      desc: "I developed a Full stack Data Entry web App using MERN. The site showcases how to data enter, with a responsive design and interactive features that enhance the user experience.",
      img: dataEntry,
    },
    {
      name: "Todo-App",
      desc: "I developed a todo-app using html,css, JavaScript and also developed in React.js.",
      img: todo,
    },
    {
      name: "TicTacToe",
      desc: "I developed a tic-tac-toe game using html,css, JavaScript and also developed in React.js.",
      img: TicTacToe,
    },
    {
      name: "Resturant-Website",
      desc: "I developed a resturant-site using html,css, JavaScript and also developed in React.js.",
      img: resturent,
    },
    {
      name: "Rock_Paper_Scissor",
      desc: "I developed a Rock_Paper_Scissor Game using html,css, JavaScript.",
      img: Rock,
    },
    {
      name: "Ecommrace-site",
      desc: "I built a ecommrace using HTML, CSS, and JavaScript and also in Reactjs. This project core interface, featuring interactive elements, responsive design, and a smooth user experience for browsing and using third person api's.",
      img: ecomrace,
    },
    {
      name: "Spotify Clone",
      desc: "I built a Spotify clone using HTML, CSS, and JavaScript. This project replicates Spotify’s core interface, featuring interactive elements, responsive design, and a smooth user experience for browsing and playing music.",
      img: spotify,
    },
    {
      name: "Weather App",
      desc: "I developed a weather app using HTML, CSS, and JavaScript. It fetches real-time weather data and presents it in a user-friendly interface, with styling to enhance the user experience.",
      img: sunDown,
    },
    {
      name: "Facebook Clone",
      desc: "I created a Facebook clone using React.js and Tailwind CSS. The project replicates core Facebook features and showcases responsive design and interactive elements, providing a smooth, engaging user experience.",
      img: facbook,
    },
    // {
    //   name: "Facebook Clone",
    //   desc: "I have done this Facebook clone project in Tailwind & Reactjs.",
    //   img: facebook,
    // },
   
  ];
  return (
    <>
    <h1 className="text-center">Our Projects</h1>
    <div className="container d-flex justify-content-center flex-wrap">
      {projects.map((project) =>(
        <div class="card m-3">
       <img src={project.img} alt="" />
  <div class="card__content">
    <p class="card__title">{project.name}</p>
    <p class="card__description">{project.desc}</p>
    {/* <button class="card__button secondary">Source Code</button> */}
  </div>
</div>
      ))}
    </div>
    </>
  );
}

export default Projects;

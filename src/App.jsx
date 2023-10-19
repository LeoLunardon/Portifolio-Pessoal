import React from "react";
import "./index.css";
import Badges from "./Components/HeroContent/Bagdes";
import Hero from "./Components/HeroContent/Hero";
import About from "./Components/AboutMe/About";
import Gallery from "./Components/Projects/Gallery";
import Footer from "./Components/Footer/Footer";

const projects = [
  {
    url: "https://i.imgur.com/JOPKvdY.png",
    title: "Sistema PDV",
    description:
      "Sistema de vendas e gestão de estoque, API criada em NodeJs + ExpressJs e MongoDB. Front-end em React e TailwindCss.",
    urlDeploy: "https://pdv-distribuidora-rlj.vercel.app/",
    urlGit: "https://github.com/LeoLunardon?tab=repositories",
  },
  {
    url: "https://i.imgur.com/EcZidbC.png",
    title: "Projeto em desenvolvimento",
  },
];

function App() {
  return (
    <div className="flex bg-black flex-col " id="inicio">
      <Hero />
      <div>
        <div className="flex flex-col items-center text-center justify-center w-72 mx-auto mt-60  text-white">
          <h1 className="text-4xl">Sobre mim</h1>
          <p>Conheça um pouco mais sobre seu novo desenvolvedor</p>
        </div>
        <About />
        <div className="flex flex-col itens-center justify-center text-center">
          <h2 className="text-white text-3xl mb-10 ">
            Linguagens e frameworks que desenvolvo
          </h2>
          <Badges />
        </div>
      </div>
      <div
        id="projetos"
        className="flex flex-col items-center text-center justify-center w-72 mx-auto  text-white mt-20 mb-10"
      >
        <h1 className="text-4xl">Projetos</h1>
        <p>Conheça meus projetos pessoais e profissionais</p>
      </div>
      <div className="sm:mx-auto flex ">
        <Gallery projects={projects} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

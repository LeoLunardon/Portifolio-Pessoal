import React from "react";
import Badges from "./Components/HeroContent/Bagdes";
import "./Index.css";
import Hero from "./Components/HeroContent/Hero";
import About from "./Components/AboutMe/About";
import Cards from "./Components/Projects/Cards";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="flex bg-black flex-col " id="inicio" >
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
      <div id="projetos" className="flex flex-col items-center text-center justify-center w-72 mx-auto  text-white mt-28 mb-14">
        <h1 className="text-4xl">Projetos</h1>
        <p>Conheça meus projetos pessoais e profissionais</p>
      </div>
      <div className="mx-auto flex gap-10">
        <Cards
          url="https://i.imgur.com/JOPKvdY.png"
          title="Sistema PDV"
          description="Sistema de vendas e gestão de estoque, API criada em NodeJs + ExpressJs e MongoDB. Front-end em React e TailwindCss."
          urlDeploy="https://pdv-distribuidora-rlj.vercel.app/"
          urlGit="https://github.com/Leo-Lunardon/pdv-distribuidora"
        />
        <Cards
          url="https://i.imgur.com/JOPKvdY.png"
          title="Sistema PDV"
          description="Sistema de vendas e controle de estoque, API criada em NodeJs + ExpressJs e MongoDB. Front-end em React e TailwindCss."
          urlDeploy="https://pdv-distribuidora-rlj.vercel.app/"
          urlGit="https://github.com/Leo-Lunardon/pdv-distribuidora"
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

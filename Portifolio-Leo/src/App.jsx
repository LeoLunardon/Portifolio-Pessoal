import React from "react";
import Badges from "./Components/HeroContent/Bagdes";
import { TypeAnimation } from "react-type-animation";
import "./Index.css";
import Navbar from "./Components/NavBar/Navbar";
import Cards from "./Components/Projects/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full relative overflow-y-hidden h-screen  bg-bg-dark flex ">
        <div>
          <img
            className=" fixed opacity-20 w-1/2 h-full"
            src="https://i.imgur.com/bAFxAnW.png"
            alt=""
          />
        </div>
        <div className="fixed  top-56 left-10 2xl:top-80 2xl:left-48">
          <img src="https://i.imgur.com/PXWQKQ8.png" alt="" />
        </div>
        <div className="fixed 2xl:top-56 outline outline-4 outline-white rounded-full  2xl:right-1/4 rigth-96 mr-40  top-36 text-5xl ">
          <img src="https://i.imgur.com/Xr9Bxsw.png" width={"200px"} alt="" />
        </div>

        <div className="text-white text-3xl fixed top-60 right-14 2xl:top-72 2xl:right-40">
          <TypeAnimation
            sequence={["Leonardo Lunardon", 2500, "Desenvolvedor", 2400]}
            wrapper="span"
            speed={20}
            style={{
              fontSize: "2em",
              display: "inline-block",
              opacity: 1, // Inicializa com opacidade 1 para a transição funcionar
              transition: "opacity 0.3s ease-in-out", // Adiciona transição de 0.3s para a opacidade
            }}
            repeat={Infinity}
          />
          <p className="opacity-20">Análise e desenvolvimento de sistemas</p>
        </div>
        <div className="fixed bottom-20 right-40 2xl:bottom-40 2xl:right-80">
          <Badges />
        </div>
      </div>
      <div className="w-full text-white relative flex-col items-center     bg-bg-gray flex">
        <h1 className="text-6xl mt-10 ml-10">Projetos</h1>
        <div className="mt-10 flex justify-center pb-10    flex-wrap gap-x-20 gap-y-10">
          <Cards
            url="https://i.imgur.com/JOPKvdY.png"
            urlDeploy="https://pdv-distribuidora-rlj.vercel.app/"
            title="PDV - Distribuidora de bebidas"
            description="Sistema de vendas e controle de estoque utilizando Node.js, JWT, Express, MongoDB, e React"
          />
          <Cards
            url="https://i.imgur.com/JOPKvdY.png"
            urlDeploy="https://pdv-distribuidora-rlj.vercel.app/"
            title="PDV - Distribuidora de bebidas"
            description="Sistema de vendas e controle de estoque utilizando Node.js, JWT, Express, MongoDB, e React"
          />
          <Cards
            url="https://i.imgur.com/JOPKvdY.png"
            urlDeploy="https://pdv-distribuidora-rlj.vercel.app/"
            title="PDV - Distribuidora de bebidas"
            description="Sistema de vendas e controle de estoque utilizando Node.js, JWT, Express, MongoDB, e React"
          />
          <Cards
            url="https://i.imgur.com/JOPKvdY.png"
            urlDeploy="https://pdv-distribuidora-rlj.vercel.app/"
            title="PDV - Distribuidora de bebidas"
            description="Sistema de vendas e controle de estoque utilizando Node.js, JWT, Express, MongoDB, e React"
          />
        </div>
      </div>
      <div className="w-full h-screen text-white relative flex-col items-center pt-10   bg-bg-dark flex">
        <h1>Contatos</h1>
      </div>
    </div>
  );
}

export default App;

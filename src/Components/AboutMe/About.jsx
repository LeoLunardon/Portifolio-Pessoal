import React from "react";

const About = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row sm:items-center mt-28 mb-40 text-white gap-40 justify-center ">
      <div >
        <img
          className="w-60 h-60  border-white rounded-full border-4"
          src="https://i.imgur.com/vrBhAy7.jpg"
          alt=""
        />
      </div>
      <div className=" w-96 text-xl">
        <p>
          Me chamo Leonardo Lunardon, tenho 23 anos e sou desenvolvedor de
          sistemas. Estou em busca de uma oportunidade na área de
          desenvolvimento. <br />
          <br />
          Escolhi Javascript para iniciar meus estudos devido à sua grande
          comunidade, grande potencial de crescimento e possibilidade de
          reutilização de conhecimentos na web, e backend, através de React e
          Node.
        </p>
      </div>
    </div>
  );
};

export default About;

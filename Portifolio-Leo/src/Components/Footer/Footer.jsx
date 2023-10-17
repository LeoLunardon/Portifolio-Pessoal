import React from "react";

const Contacts = () => {
  return (
    <div className="flex text-xl text-center h-80 text-white justify-around pt-10 bg-gray-950">
      <nav>
        <h3 className="text-4xl mb-5 ">Navegue</h3>
        <ul className="text-center ">
          <a href="#inicio">
            <li className="mb-5">Início</li>
          </a>
          <a href="#projetos">
            <li>Projetos</li>
          </a>
        </ul>
      </nav>
      <nav>
        <h3 className="text-4xl mb-5">Contatos</h3>
        <ul className="text-center flex flex-col gap-3">
          <a href="/">
            <li>
              <button
                type="button"
                class=" w-56 h-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  "
              >
                WhatsApp
              </button>
            </li>
          </a>
          <a href="/">
            <li>
              <button
                type="button"
                class=" w-56 h-10 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg"
              >
                GitHub
              </button>
            </li>
          </a>
          <a href="/">
            <li>
              <button
                type="button"
                class=" w-56 h-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  "
              >
                Linkedin
              </button>
            </li>
          </a>
          <a href="/">
            <li>
              <button
                type="button"
                class=" w-56 h-10 text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg  "
              >
                Email
              </button>
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Contacts;

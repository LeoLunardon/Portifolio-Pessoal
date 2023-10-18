import React from "react";
import "./Index.css";

const Cards = (props) => {
  const { url, title, description, urlDeploy, urlGit } = props;

  return (
    <div className="max-w-sm bg-gray-900 border text-gray-200 mb-40 border-gray-200 rounded-lg shadow">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-t-lg w-full h-60 object-cover"
          src={url}
          alt=""
        />
      </a>
      <div className="py-10 px-5">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 font-style text-2xl font-bold tracking-tight dark:text-white">
            {title}
          </h5>
        </a>
        <p className=" pb-8 font-style font-normal text-gray-200 dark:text-gray-400">
          {description}
        </p>
        <a
          href={urlDeploy}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Deploy
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href={urlGit}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900 ml-2"
        >
          GitHub
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19s-1.5.5-3 1v-1c0-1 .5-1 1-1s1 .5 2 1 2 1 4 1 2-1 4-1 1 .5 1 1v1c-1.5-.5-3-1-3-1s-1.5-.5-3-1v-1c0-1 .5-1 1-1s1 .5 2 1 2 1 4 1 2-1 4-1 1 .5 1 1v1c-1.5-.5-3-1-3-1s-1.5-.5-3-1v-1c0-1 .5-1 1-1s1 .5 2 1 2 1 4 1 2-1 4-1 1 .5 1 1v1c-1.5-.5-3-1-3-1s-1.5-.5-3-1v-1c0-1 .5-1 1-1s1 .5 2 1 2 1 4 1 2-1 4-1 1 .5 1 1v1"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Cards;

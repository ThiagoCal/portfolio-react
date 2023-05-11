import React from "react";
import Hereismypet from "../Images/hereismypetimg.png";
import Imdbapp from "../Images/imdbappimg.png";
import WeatherApp from "../Images/weatherappimg.png";
import WeddingWebsite from "../Images/weddingsiteprint.png";
import RacingGame from "../Images/racinggameprint.png";
import MessibaPal from "../Images/mymessibaappimg.png";

export default function Project() {
  const projects = [
    {
      name: "My Messiba Pal App",
      description: `A Party-finding app based on location, interests, and category.
       Users can filter by music type and date. Producers can create parties with info, pics, and location.`,
      tech: "Node.js, React.js, PostgreSQL, Geolocation API, APIs, Tailwind",
      image: MessibaPal,
      url: "https://my-messiba-pal.vercel.app/",
      github: "https://github.com/ThiagoCal/final-p-client",
    },

    // {
    //   name: "Disastro App",
    //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    //   quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    //   nihil.`,
    //   image:
    //     "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1",
    //   url: "https://google.com",
    //   github: "https://google.com",
    // },
    {
      name: "TK Weather App",
      description: `TK Weather app is a an app that you can check the weather forecast of the searched 
      city and you can save all the cities of your interest in the favorites.`,
      tech: "React.js, Redux, HTML, Tailwind, APIs",
      image: WeatherApp,
      url: "https://tk-weather-app.vercel.app/",
      github: "https://github.com/ThiagoCal/weather-app",
    },
    {
      name: "Here is my pet",
      description: `Here's my pet is an app that helps pet owners find their beloved companions for free with QR code.`,
      tech: "Rails, Ruby on Rails, PostgreSQL, ServiceWorkers, PWA, WebSocket, Stimulus, Heroku, and APIs",
      image: Hereismypet,
      url: "",
      github: "https://github.com/magedeungaro/heres-my-pet",
    },
    {
      name: "My Wedding Website",
      description: `I made for my wedding so people could see information about the party, respond the RSVP and send gifts.`,
      tech: "Next.js, Google APIs",
      image: WeddingWebsite,
      url: "https://het-wedding.vercel.app/",
      github: "https://github.com/ThiagoCal/het",
    },
    {
      name: "OiMDB app",
      description: `OiMDB is an app where you can search movies, series information using iMDB database`,
      tech: "React.js, Redux, APIs, Tailwind",
      image: Imdbapp,
      url: "https://omdb-api-umber.vercel.app/",
      github: "https://github.com/ThiagoCal/omdb-api",
    },
    {
      name: "Boat race app",
      description: `Experience the thrill of the high seas with our exciting boat racing game! 
      Bet on your favorite boat and watch as it speeds through the water, with the chance to win big and earn coins.`,
      tech: "Javascript, HTML, CSS",
      image: RacingGame,
      url: "https://racing-game-eta.vercel.app/",
      github: "https://github.com/ThiagoCal/Racing-game",
    },
  ];
  return (
    <div className="projects container mx-auto flex gap-2 flex-wrap">
      {projects.map((project) => (
        <div className="flex flex-col max-w-sm max-h-sm rounded overflow-hidden transform transition duration-500 shadow-lg my-4 mx-auto hover:shadow-xl">
          <img
            className="img-projects"
            src={project.image}
            alt={project.name}
          />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold project-title text-xl mb-2">
              {project.name}
            </div>
            <p className="text-gray-700 text-base">{project.description}</p>
            <div className="mt-2">
              <span>Technologies Used:</span>
              <p className="text-gray-700 text-base">{project.tech}</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <div className="flex flex-col justify-end justify-items-end">
              {project.url ? (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-bl">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </a>
                </span>
              ) : (
                <></>
              )}

              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-bl">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.github}
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

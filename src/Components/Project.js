import React from "react";

export default function Project() {
  const projects = [
    {
      name: "Party Search App",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      image:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1",
      link: "https://google.com",
      github: "https://google.com",
    },
    {
      name: "Here is my pet",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      image:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1",
      link: "https://google.com",
      github: "https://google.com",
    },
    {
      name: "Disastro App",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      image:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1",
      link: "https://google.com",
      github: "https://google.com",
    },
    {
      name: "Weather app",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      image:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1",
      link: "https://google.com",
      github: "https://google.com",
    },
    {
      name: "OiMDB app",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      image:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1",
      link: "https://google.com",
      github: "https://google.com",
    },
    {
      name: "Boat race app",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      image:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1",
      link: "https://google.com",
      github: "https://google.com",
    },
  ];
  return (
    <div className="container mx-auto flex gap-2 flex-wrap">
      {projects.map((project) => (
        <div className="flex flex-col max-w-sm max-h-sm rounded overflow-hidden transform transition duration-500 shadow-lg my-4 mx-auto hover:shadow-xl">
          {/* <img
            className="img-projects"
            src={
              "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&dpr=1"
            }
            alt="Sunset in the mountains"
          /> */}
          <div className="bg-banner-color w-auto h-20"></div>
          <div className="px-6 py-4">
            <div className="font-bold project-title text-xl mb-2">
              {project.name}
            </div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {project.url}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {project.github}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

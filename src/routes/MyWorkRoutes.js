import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const projectArray = [
  {
    name: "UPTIMESPY",
    link: "https://github.com/vin-ll/uptimespy",
    language: "JavaScript",
    description: "A website monitoring tool made with ReactJS",
    dotColor: "#f0e035",
  },
  {
    name: "vin.rocks",
    link: "https://github.com/vin-ll/vin.rocks",
    language: "JavaScript",
    description: "My personal portfolio website made with ReactJS",
    dotColor: "#f0e035",
  },
  {
    name: "Port Sniffer",
    link: "https://github.com/vin-ll/port_sniffer_cli",
    language: "Rust",
    description: "A port sniffer made with Rust",
    dotColor: "#dea584",
  },
];

function MyWorkRoute() {
  React.useEffect(() => {
    document.title = "Vin H - My work";
  }, []);
  return (
    <div className="flex gap-10">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="py-20 w-full pr-10 ml-0 md:ml-[240px]"
      >
        <div className="flex flex-col w-full flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col flex-1">
            <Header>My work</Header>

            <h2 className="text-xl font-normal mb-5 text-gray-100">
              Open Source Projects
            </h2>
            <div className="flex flex-col">
              {projectArray.map((item, index) => (
                <a href={item.link} className="mb-5" key={index}>
                  <div className="flex max-h-42 flex-col md:flex-row border rounded-xl">
                    <div className="flex flex-col border-bottom-proj border-right py-10 px-5">
                      <h5 className="text-md font-thin text-gray-200">
                        <code>name</code>
                      </h5>
                      <div className="flex flex-row w-28">
                        <h1 className="text-lg font-normal text-gray-100 mr-2">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col border-bottom-proj border-right py-10 px-5">
                      <h5 className="text-md font-thin text-gray-200">
                        <code>language</code>
                      </h5>
                      <div className="flex flex-row w-28 items-center">
                        <h1 className="text-lg font-normal text-gray-100 mr-2">
                          {item.language}
                        </h1>
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.dotColor }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-col py-10 px-5">
                      <h5 className="text-md font-thin text-gray-200">
                        <code>description</code>
                      </h5>
                      <h1 className="text-lg font-normal text-gray-100">
                        {item.description}
                      </h1>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MyWorkRoute;

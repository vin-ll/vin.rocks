import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
const skillsArray = [
    {
        name: "React",
        type: "Frontend",
        use: "I use React for my frontend projects most of the time. I have a lot of experience with React and I am very comfortable with it.",
        dotColor: "#61dafb",
    },
    {
        name: "NextJS",
        type: "Frontend",
        use: "If I feel like making quick websites I use NextJS.",
        dotColor: "#fff",
    },
    {
        name: "Rust",
        type: "Backend",
        use: "I am currently learning Rust and I plan to use it for my backend projects.",
        dotColor: "#dea584",
    },
    {
        name: "NodeJS",
        type: "Backend",
        use: "NodeJS is my favourite backend language. I use it for most of my backend projects since its easy to use.",
        dotColor: "#72b954",
    },
    {
        name: "MongoDB",
        type: "Database",
        use: "MongoDB is my favourite database it also was the first and only database i've been using since 4 years.",
        dotColor: "#10aa50",
    },
    {
        name: "Tailwind",
        type: "CSS",
        use: "Its a replacement for vanilla CSS and makes me design alot faster.",
        dotColor: "#38bdf8",
    },
    {
        name: "JavaScript",
        type: "Fullstack",
        use: "The primary use case is backend technologies. However, I also use it for frontend development.",
        dotColor: "#f7df1e",
    },
    {
        name: "TypeScript",
        type: "Fullstack",
        use: "Same use case as JavaScript.",
        dotColor: "#3178c6",
    }
]


function SkillsRoute() {
    React.useEffect(() => {
        document.title = "Vin H - My skills";
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
                        <h1 className="text-3xl font-bold text-gray-100">My skills</h1>
                        <h2 className="text-xl font-normal mb-5 text-gray-100 mt-5">My most used skills and languages</h2>
                        <div className="flex flex-col">
                            {skillsArray.map((item, index) => (
                                <a href={item.link} className="mb-5" key={index}>
                                    <div className="flex max-h-42 flex-col md:flex-row border rounded-xl">
                                        
                                        <div className="flex flex-col border-bottom-proj border-right py-10 px-5">
                                            <h5 className="text-md font-thin text-gray-200"><code>name</code></h5>
                                            <div className="flex flex-row w-28 items-center">
                                                <h1 className="text-lg font-normal text-gray-100 mr-2">{item.name}</h1>
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.dotColor }}></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col border-bottom-proj border-right py-10 px-5">
                                            <h5 className="text-md font-thin text-gray-200"><code>type</code></h5>
                                            <div className="flex flex-row w-28 items-center">
                                                <h1 className="text-lg font-normal text-gray-100 mr-2">{item.type}</h1>
                                                
                                            </div>
                                        </div>
                                        <div className="flex flex-col py-10 px-5">
                                            <h5 className="text-md font-thin text-gray-200"><code>use</code></h5>
                                            <h1 className="text-lg font-normal text-gray-100">{item.use}</h1>
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

export default SkillsRoute;

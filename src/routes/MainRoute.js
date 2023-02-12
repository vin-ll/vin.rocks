import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";

function MainRoute() {
  React.useEffect(() => {
    document.title = "Vin H - Who am I";
  }, []);
  return (
    <div className="flex gap-10">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="py-20 pr-10 ml-0 md:ml-[240px]"
      >
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden max-w-3xl">
          <div className="flex flex-col flex-1">
            <Header>Who am I</Header>
            <Paragraph>
              My name is Vin and I am a 15 year old fullstack developer from
              Germany.
            </Paragraph>
            <Paragraph>
              I started programming when I was 12 and I have been learning ever
              since. Designing, building and publishing products of quality and
              reliability is something I do as a hobby.
            </Paragraph>
            <Paragraph>
              I specialise in web development and I am currently learning Java to expand my skillset.
            </Paragraph>
            <Paragraph>
              If you want to contact me, you can do so by visiting my{" "}
              <Link to="/contact" className="custom-purple-color">
                contact page
              </Link>
              .
            </Paragraph>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MainRoute;

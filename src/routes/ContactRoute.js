import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

function ContactRoute() {
  React.useEffect(() => {
    document.title = "Vin H - Contact and more";
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
            <Header>
              Contact me
            </Header>
            <Paragraph>
              The best way of getting in contact with me is via E-Mail:{" "}
              <a
                className="custom-purple-color"
                href="mailto:vinh260607@gmail.com"
              >
                vinh260607@gmail.com
              </a>
              .
            </Paragraph>
            <Header className="mt-10">
              More
            </Header>
            <Paragraph>
              You can see all my open source projects on{" "}
              <a
                className="custom-purple-color"
                href="https://github.com/vin-ll"
              >
                Github
              </a>{" "}
              including the source code of this website.
            </Paragraph>
            <Paragraph>
              I will make a personal blog soon where I will post about my
              projects and other stuff.
            </Paragraph>
            <Paragraph>
              Thank you so much for visiting my website. I hope you enjoyed it.
            </Paragraph>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactRoute;

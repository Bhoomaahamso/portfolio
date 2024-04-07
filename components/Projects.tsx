import { motion } from "framer-motion";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      picture: "/pic.jfif",
      title: "Software Developer Intern",
      description:
        "Designed and implemented a customized datepicker component with broad applicability across the Adani ecosystem contributing to enhanced user experience. Achieved optimization of image sizes, resulting in reduction of Largest Contentful Paint duration from 6s to 2.5s Executed the implementation of Google Tag Manager (GTM) events throughout the entire website, contributing to enhanced analytics capabilities and bolstering data-driven insights. Addressed code smells, bug fixes and UI/SASS upgrades to elevate overall system performance.",
      tags: ["Next.js", "TypeScript"],
    },
    {
      picture: "/pic.jfif",
      title: "React Developer Intern",
      description:
        "Worked on building and maintenance of the Employee Onboarding/Offboarding program. Created an influencer management website to manage Instagram marketing campaigns with Instagram influencers. Created the financing program for subscription and invoicing. Created Robotic Process Automation(RPA) programs to automate workflow.",
      tags: ["React.js", "RPA"],
    },
  ];
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                className="max-lg:mx-auto mb-6 rounded"
                src={project.picture}
                alt=""
                width={150}
                height={150}
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;

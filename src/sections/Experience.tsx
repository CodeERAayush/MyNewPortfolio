import MotionDiv from "@/components/motion-div";
import { experienceContent } from "@/components/projects/Experience-content";
import ExperienceCard from "@/components/projects/experience-card";
import ProjectCard from "@/components/projects/project-card";
import { projectsContent } from "@/components/projects/project-content";
import { Separator } from "@/components/ui/separator";

const Experience = () => {
  return (
    <MotionDiv delayOffset={0.2}>
      <div
        className="my-8 md:my-12 w-full md:max-w-screen-2xl md:mx-auto md:px-16 scroll-mt-24"
        id="projects"
      >
        <div className="flex justify-center items-center text-3xl font-semibold">
          Experience
        </div>
        <ul className="flex flex-col items-center justify-center w-full">
          {experienceContent.map((card, idx) => {
            return (
              <div key={idx}>
                <ExperienceCard
                  title={card.title}
                  header={card.header}
                  description={card.description}
                  tags={card.tags}
                  link={card.link}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </MotionDiv>
  );
};

export default Experience;

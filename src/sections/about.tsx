import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 scroll-mt-24 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-2 w-full text-center text-3xl font-semibold md:mb-4">
            About Me
          </h2>
        </MotionDiv>

        <article className="flex flex-col text-lg text-neutral-300 font-medium">
          <MotionDiv delayOffset={0.4}>
            <div className="my-2">
            Hello, My name is Aayush Pandey Currently in final year, pursuing B.tech in Information technology from Dr. Ram Manohar Lohia Avadh University, My skills includes a decent foundation in Java and Javascript, Currently I am working as React Native Developer at Resshu Connect Pvt. Ltd., I have a hands on experience with technologies like HTML, CSS, Javascript and frameworks like React, React Native, Next.js, Apart from this I have a good hands on backend technologies like Node.js, Express.js, Databases like SqLite, MongoDB and also worked a lot with BAAS (Firebase and Supabase), For computer science fundamentals, I have a decent knowledge about Data Structures & Algorithms, Operating system, Database management system and Object Oriented Technique. I have also practiced coding by solving over 600+ problems on various coding platforms like Leetcode, GFG and Hackerrank.
            </div>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <div className="flex flex-col gap-2">
              <p>
                I'm currently an undergraduate, pursuing Computer Science majors
                with Specialization in Artificial Intelligence and Machine
                Learning from New Delhi, India.
              </p>
              <p>
                I am passionate about creating not just functional, but also
                aesthetically pleasing and intuitive user interfaces, ensuring a
                seamless user experience.
              </p>
            </div>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <Image
            src="/my_photo.png"
            alt="photo"
            width={420}
            height={420}
            className="mt-6 rounded-full  shadow-xl shadow-black transition-all hover:rotate-3 hover:scale-105"
          />
        </MotionDiv>
      </div>
    </section>
  );
}

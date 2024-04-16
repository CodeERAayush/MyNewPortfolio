export type experienceData = {
    title: string;
    description: string[];
    header: string;
    tags: string[];
    link: {
      github: string;
      youtube?: string;
      live?: string;
    };
  };
  
  export const experienceContent: experienceData[] = [
    {
      title: "React Native Developer Intern",
      header: "Resshu Connect Pvt. Ltd. | Apr,2023 - Present",
      description:[
        "Developed and deployed mobile applications using React Native framework,resulting in enhanced user experience and increased app performance.",
        "Collaborated with a team of developers to design and implement new features, contributing to the overall success of the project.",
        "Conducted thorough testing and debugging of mobile applications, identifying and resolving issues to ensure high-quality deliverables.",
        "Implemented ccAvenue and BillDesk payment gateway to the application"
      ],
      tags: [
        "Javascript",
        "React Native",
        "Redux",
        "Firebase",
        "Github",
        "Github Workflow",
        "Socket IO",
        "Render",
        "BillDesk",
        "ccAvenue",
      ],
      link: {
        github: "",
        youtube: "",
        live: "https://play.google.com/store/apps/details?id=com.apnakonnect",
      },
    },
  ];
  
export type projectData = {
  image: {
    src: string;
  };
  title: string;
  description: string;
  header: string;
  tags: string[];
  link: {
    github: string;
    youtube?: string;
    live?: string;
  };
};

export const projectsContent: projectData[] = [
  {
    image: {
      src: "/grabit.png",
    },
    title: "GrabIt",
    header: "A Platform To Buy And Sell Old Goods",
    description:
     "Grabit makes it so easy to connect people living in same hostel to buy, sell or exchange used goods and services. It is my personal idea I am working on, the backend is ready and minor changes will be required in future, the frontend will be made using React Native and I am developing it for both Android and IOS.",
    tags: [
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "Socket IO",
      "React Native",
      "Render"
    ],
    link: {
      github: "https://github.com/CodeERAayush/BookExchange-Backend",
      youtube: "",
      live: "https://documenter.getpostman.com/view/25019273/2sA358d5PN",
    },
  },
  {
    image: {
      src: "/unnamed.jpg",
    },
    title: "DrishyaDarshan",
    header: "Google Meet Clone",
    description:
     "A Completly working Google Meet clone that supports group video chat, made using WebRTC.",
    tags: [
      "Javascript",
      "React.js",
      "Socket IO",
      "WebRTC",
      "NodeJS",
      "MaterialUI"
    ],
    link: {
      github: "https://github.com/CodeERAayush/DrishyaDarshan---Video-Calling-WebApp",
      youtube: "",
      live: "",
    },
  },
  {
    image: {
      src: "/social.png",
    },
    title: "Social butterfly",
    header: "Social Media WebApp",
    description:
     "A social media application that provides the functionalities like, creating post, likes, comments, add friends etc.",
    tags: [
      "Javascript",
      "React.js",
      "Node.js",
      "Tailwind Css",
      "MongoDB",
      "Express.js",
      "Render"
    ],
    link: {
      github: "https://github.com/CodeERAayush/MERN_SOCIALMEDIA_BACKEND",
      youtube: "",
      live: "https://codeeraayush-socialbutterfly.vercel.app/",
    },
  },
  {
    image: {
      src: "/ecom.png",
    },
    title: "Aao Khareedo",
    header: "Ecommerce App",
    description:
      "It is a full fledge Ecommerce WebApp which allows the users to buy an item, add to card, do payment through stripe api, Admin can also post products to sell, the data is stored in firebase firestore.",
    tags: [
      "Javascript",
      "React.js",
      "Firebase",
      "Stripe Api"
    ],
    link: {
      github: "https://github.com/CodeERAayush/E-commerce",
      youtube: "",
      live: "https://codeeraayush-ecom.netlify.app/",
    },
  },
  {
    image: {
      src: "/chatroom.png",
    },
    title: "GupShup - Chatroom",
    header: "Chat App",
    description:
     "It is a React Native Mobile Application in which one can create room and chat seamlessly in the chat room.",
    tags: [
      "React Native",
      "Socket IO"
    ],
    link: {
      github: "https://github.com/CodeERAayush/Gapshap-CommonChatroom",
      youtube: "",
      live: "https://play.google.com/store/apps/details?id=com.mychatroom",
    },
  },
];

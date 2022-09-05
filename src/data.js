const techStack = {
  all: "all",
  html: "html",
  css: "css",
  js: "js",
};
const skills = [
  {
    name: "javascript",
    logo: "public/images/skills/javascript.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Sql icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: techStack.html,
    logo: "public/images/skills/html.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Flat Icons - Flaticon</a>',
  },

  {
    name: "sql",
    logo: "public/images/skills/sql.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/sql" title="sql icons">Sql icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: techStack.css,
    logo: "public/images/skills/css.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: "api",
    logo: "public/images/skills/laptop.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/technology-integration" title="technology integration icons">Technology integration icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: "git",
    logo: "public/images/skills/git.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/git" title="git icons">Git icons created by Freepik - Flaticon</a>',
  },
  {
    name: "jasmine",
    logo: "public/images/skills/jasmine.png",
    attributeLink: "",
  },
  {
    name: "nodejs",
    logo: "public/images/skills/nodejs.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">Nodejs icons created by Freepik - Flaticon</a>',
  },
];

const projects = [
  {
    name: "My Tribute Page",
    year: "2020",
    stack: [techStack.html, techStack.css],
    url: "https://codepen.io/czwe_01/pen/xBQqrj",
    description:
      "This project is a freeCodeCamp project for Responsive Web design certification. It is a tribute of James Ingrams",
    image: "public/images/projects/tributePage.png",
  },
  {
    name: "Build A Survey Form",
    year: "2020",
    stack: [techStack.html, techStack.css],
    url: "https://codepen.io/czwe_01/pen/GewrKO",
    description:
      "This project is a freeCodeCamp project for Responsive Web design certification. It is a survey form",
    image: "public/images/projects/surveyForm.png",
  },
  {
    name: "Technical Documentation",
    year: "2020",
    stack: [techStack.html, techStack.css],
    url: "https://codepen.io/czwe_01/pen/WmKYqR",
    description:
      "This project is a freeCodeCamp project for Responsive Web design certification. It is a technical documentation website",
    image: "public/images/projects/technicalDoc.png",
  },
  {
    name: "Ladies In Hygiene",
    year: "2020",
    stack: [techStack.html, techStack.css, techStack.js],
    url: "https://ladiesinhygiene.netlify.app/",
    description:
      "I was involved in building a website for a fumigation and hygiene startup business. I was responsible for the front-end development and design.",
    image: "public/images/projects/ladiesInHygiene.png",
  },
  {
    name: "Personal portfolio",
    year: "2021",
    stack: [techStack.html, techStack.css, techStack.js],
    url: "https://czwe-01.github.io/",
    description:
      "This is the website you are currently on, my personal portfolio",
    image: "public/images/projects/portfolio.png",
  },
];

module.exports = { skills, projects, techStack };

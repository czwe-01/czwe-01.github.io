const skills = [
  {
    name: "javascript",
    logo: "public/images/javascript.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Sql icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: "html",
    logo: "public/images/html.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Flat Icons - Flaticon</a>',
  },

  {
    name: "sql",
    logo: "public/images/sql.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/sql" title="sql icons">Sql icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: "css",
    logo: "public/images/css.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: "api",
    logo: "public/images/laptop.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/technology-integration" title="technology integration icons">Technology integration icons created by Flat Icons - Flaticon</a>',
  },
  {
    name: "git",
    logo: "public/images/git.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/git" title="git icons">Git icons created by Freepik - Flaticon</a>',
  },
  {
    name: "jasmine",
    logo: "public/images/jasmine.png",
    attributeLink: "",
  },
  {
    name: "nodejs",
    logo: "public/images/nodejs.png",
    attributeLink:
      '<a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">Nodejs icons created by Freepik - Flaticon</a>',
  },
];

const projects = [
  {
    name: "My Tribute Page",
    year: "2020",
    techStack: ["html", "css"],
    url: "https://codepen.io/czwe_01/pen/xBQqrj",
    description:
      "This project is a freeCodeCamp project for Responsive Web design certification. It is a tribute of James Ingrams",
  },
  {
    name: "Build A Survey Form",
    year: "2020",
    techStack: ["html", "css"],
    url: "https://codepen.io/czwe_01/pen/GewrKO",
    description:
      "This project is a freeCodeCamp project for Responsive Web design certification. It is a survey form",
  },
  {
    name: "Technical Documentation Page",
    year: "2020",
    techStack: ["html", "css"],
    url: "https://codepen.io/czwe_01/pen/WmKYqR",
    description:
      "This project is a freeCodeCamp project for Responsive Web design certification. It is a technical documentation website",
  },
  {
    name: "Ladies In Hygiene",
    year: "2020",
    techStack: ["html", "css", "js"],
    url: "https://ladiesinhygiene.netlify.app/",
    description:
      "I was involved in building a website for a fumigation and hygiene startup business. I was responsible for the front-end development and design.",
  },
  {
    name: "Personal portfolio",
    year: "2021",
    techStack: ["html", "css", "js"],
    url: "https://czwe-01.github.io/",
    description:
      "This is the website you are currently on, my personal portfolio",
  },
];
// menu toggle
window.addEventListener("click", function (event) {
  if (
    document.getElementById("checkbox").checked == true &&
    event.target === document.getElementById("checkbox")
  ) {
    document.getElementById("checkbox").checked = true;
  } else if (
    event.target != document.getElementById("checkbox") ||
    event.target != document.getElementById("menu")
  ) {
    document.getElementById("checkbox").checked = false;
  }
});

const skillSection = document.querySelector(".skills");
skills.forEach((skill) => {
  const div = document.createElement("div");
  div.classList.add("skill");
  div.innerHTML = `<img
            src= ${skill.logo}
            alt=${skill.name}
          /> <p>${skill.name}</p>`;
  skillSection.appendChild(div);
});

const projectsSection = document.querySelector(".project-container");
let projectsAsTheyCome = projects.reverse();
projectsAsTheyCome.forEach((project) => {
  let str = "";
  for (let i = 0; i < project.techStack.length; i++) {
    str = str + `<div class="project-tag">${project.techStack[i]}</div>`;
  }
  const div = document.createElement("div");
  div.classList.add("project-card");
  div.innerHTML = ` <p class="project-year">${project.year}</p>
          <div class="project">
            ${project.name}
            <div class="project-tags">
            ${str}
            </div>
          </div>
          <p class="project-description">
            ${project.description}
          </p>
          <div class="link-holder"">
            <a href=${project.url} class="project-link"
              >explore
            </a>
          </div>`;

  projectsSection.append(div);
});

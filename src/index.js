const { skills, projects } = require("./data");

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
projects.forEach((project) => {
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

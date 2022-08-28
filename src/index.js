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
  const innerHTML = ` <p class="project-year">${project.year}</p>
          <div class="project">
            ${project.name}
            <div class="project-tags">
            ${str}
            </div>
          </div>
          <p class="project-description">
            ${project.description}
          </p>
          <div class="link-holder" id="${project.name}">
            <a href=${project.url} class="project-link"
            target="_blank"
              >explore
            </a>
          </div>`;
  div.innerHTML = innerHTML;
  projectsSection.append(div);
  const explore = document.getElementById(project.name);

  explore.onmouseover = function () {
    mouseOver();
  };
  explore.onmouseout = function () {
    mouseOut();
  };
  const children = div.children;

  function mouseOver() {
    div.style.backgroundImage = `url(${project.image})`;
    div.style.backgroundSize = "contain";
    div.style.backgroundRepeat = "no-repeat";
    for (let i = 0; i < children.length - 1; i++) {
      children[i].style.visibility = "hidden";
    }
  }

  function mouseOut() {
    div.style.backgroundImage = `url("")`;
    for (let i = 0; i < children.length - 1; i++) {
      children[i].style.visibility = "visible";
    }
  }
});

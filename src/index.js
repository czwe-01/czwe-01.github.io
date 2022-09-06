const { skills, projects, techStack } = require("./data");

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

let projectsToShow = projects;

const filters = document.querySelector(".filters");

const stacks = Object.keys(techStack);
stacks.forEach((stack) => {
  const item = document.createElement("li");
  item.classList.add(`${techStack[stack]}`);
  item.classList.add("filter");
  item.innerHTML = techStack[stack];
  filters.appendChild(item);
});

function checkFilter(arr, filter) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].stack.includes(filter)) {
      res.push(arr[i]);
    }
  }
  return res;
}
const projectsSection = document.querySelector(".project-container");
function createProjects(listOfProjects, filter) {
  projectsSection.innerHTML = "";
  if (filter !== "all") {
    listOfProjects = checkFilter(listOfProjects, filter);
  }

  listOfProjects.forEach((project) => {
    let str = "";
    for (let i = 0; i < project.stack.length; i++) {
      str = str + `<div class="project-tag">${project.stack[i]}</div>`;
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
            <span class="hoverHere">hover here to preview</span>
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
}

createProjects(projects, "all");
const filterElements = document.querySelectorAll(".filter");

function activeFiltered(filter) {
  filterElements.forEach((item) => {
    item.classList.remove("active");
  });
  filter.classList.add("active");
  createProjects(projects, filter.innerHTML);
}
filterElements.forEach((filter) => {
  filter.addEventListener("click", () => {
    activeFiltered(filter);
  });
});

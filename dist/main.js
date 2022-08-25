(() => {
  var e = {
      471: (e) => {
        e.exports = {
          skills: [
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
          ],
          projects: [
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
              name: "Technical Documentation",
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
          ],
        };
      },
    },
    t = {};
  function n(i) {
    var c = t[i];
    if (void 0 !== c) return c.exports;
    var o = (t[i] = { exports: {} });
    return e[i](o, o.exports, n), o.exports;
  }
  (() => {
    const { skills: e, projects: t } = n(471);
    window.addEventListener("click", function (e) {
      1 == document.getElementById("checkbox").checked &&
      e.target === document.getElementById("checkbox")
        ? (document.getElementById("checkbox").checked = !0)
        : (e.target == document.getElementById("checkbox") &&
            e.target == document.getElementById("menu")) ||
          (document.getElementById("checkbox").checked = !1);
    });
    const i = document.querySelector(".skills");
    e.forEach((e) => {
      const t = document.createElement("div");
      t.classList.add("skill"),
        (t.innerHTML = `<img\n            src= ${e.logo}\n            alt=${e.name}\n          /> <p>${e.name}</p>`),
        i.appendChild(t);
    });
    const c = document.querySelector(".project-container");
    t.reverse().forEach((e) => {
      let t = "";
      for (let n = 0; n < e.techStack.length; n++)
        t += `<div class="project-tag">${e.techStack[n]}</div>`;
      const n = document.createElement("div");
      n.classList.add("project-card"),
        (n.innerHTML = ` <p class="project-year">${e.year}</p>\n          <div class="project">\n            ${e.name}\n            <div class="project-tags">\n            ${t}\n            </div>\n          </div>\n          <p class="project-description">\n            ${e.description}\n          </p>\n          <div class="link-holder"">\n            <a href=${e.url} class="project-link"\n              >explore\n            </a>\n          </div>`),
        c.append(n);
    });
  })();
})();

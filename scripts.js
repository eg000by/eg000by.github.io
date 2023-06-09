"use strict";

const TASKS_PAGE = "./tasks/tasks.html";

const ROUTES = [
  {
    matcher: /#example-\d+/,
    getPath: (hash) => {
      const [numberOfTask] = hash.match(/\d+/);

      return generateTaskPath(numberOfTask);
    },
  },
  {
    matcher: /#(faq|tasks)/,
    getPath: (hash) => {
      const pathWithoutHash = hash.slice(1);

      return `${pathWithoutHash}/${pathWithoutHash}.html`;
    },
  },
];

function generateTaskPath(numberOfTask) {
  return `./examples/task${numberOfTask}/task${numberOfTask}.html`;
}

function selectTask(numberOfTask) {
  document
    .getElementById("iframe")
    .setAttribute("src", generateTaskPath(numberOfTask));
}

function initPage() {
  document.getElementById("iframe").setAttribute("src", generateTaskPath(1));
}

function goToPage() {
  const hash = window.location.hash;
  const iframe = document.getElementById("iframe");

  for (const { matcher, getPath } of ROUTES) {
    if (matcher.exec(hash)) {
      iframe.setAttribute("src", getPath(hash));
      return;
    }
  }
}

function openTaskDescription() {
  document.getElementById("iframe").setAttribute("src", TASKS_PAGE);
}

initPage();
goToPage();

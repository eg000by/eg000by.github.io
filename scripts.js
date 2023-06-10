"use strict";
const FAQ_PAGE = "./faq/faq.html";
const TASKS_PAGE = "./tasks/tasks.html";
const DOCS_PAGE = "./docs/docs.html";
const SAMPLE_PAGE = "./sample/sample.html";

const ROUTES = [
  {
    matcher: /#example-\d+/,
    getPath: (hash) => {
      const [numberOfTask] = hash.match(/\d+/);

      return generateTaskPath(numberOfTask);
    },
  },
  {
    matcher: /#(faq|tasks|docs|sample)/,
    getPath: (hash) => {
      const pathWithoutHash = hash.slice(1);

      return `${pathWithoutHash}/${pathWithoutHash}.html`;
    },
  },
];

// function generateTaskPath(numberOfTask) {
//   return `./examples/task${numberOfTask}/task${numberOfTask}.html`;
// }

// function selectTask(numberOfTask) {
//   document
//     .getElementById("iframe")
//     .setAttribute("src", generateTaskPath(numberOfTask));
// }

function initPage() {
  document.getElementById("iframe").setAttribute("src", TASKS_PAGE);
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

function openFAQ() {
  document.getElementById("iframe").setAttribute("src", FAQ_PAGE);
}

function openDocuments() {
  document.getElementById("iframe").setAttribute("src", DOCS_PAGE);
}

function openSample() {
  document.getElementById("iframe").setAttribute("src", SAMPLE_PAGE);
}

initPage();
goToPage();

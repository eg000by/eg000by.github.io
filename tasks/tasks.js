const container = document.getElementById("main-content");

const videoLinks = [
  "",
  "https://www.youtube.com/watch?v=OJ16BaPC6VI&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD"
];

function buildTasksList() {
  let html = `
    <h3 id="task-0">
        <a href="#task-0"></a>
        Вводный материал
    </h3>
    <p class="mb-4">
        <a target="_blank" href="../pdf/presentations/0.pdf">📄 Материалы</a>
    </p>
  `;

  for (let i = 1; i <= 1; i++) {
    html += `
        <h3 id="task-${i}">
            <a href="#task-${i}"></a>
            Новость ${i}
        </h3>
        <p class="mb-4">
            <a target="_blank" href="../pdf/tasks/${i}.pdf">⚒️ Задание </a>
            <a target="_blank" href="../pdf/presentations/${i}.pdf">📄 Презентация </a>
            <a target="_blank" href="${videoLinks[i]}">🎞 Запись лекции </a>
        </p>
        `;
  }

  container.innerHTML = html;
}

buildTasksList();

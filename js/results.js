(function () {
  const qsArray = JSON.parse(sessionStorage.getItem("qsArray"));

  const degreeP = document.querySelector(".degreeSpan");

  const ReviewAns = document.querySelector(".review");

  let styling = document.head.appendChild(document.createElement("style"));

  let degree = 0;

  let answersArr = [
    "met",
    "that &amp; who",
    "was cooking",
    "leaves",
    "am flying",
    "Have",
    "am going to",
    "gave",
    "up",
    "serve",
    "out",
    "would",
    "shorter than",
    "most expensive",
    "will",
    "get together",
    "organ",
    "encouraged",
    "personal",
    "are",
  ];

  (function () {
    for (let i = 0; i < 20; i++) {
      if (qsArray[i]["selectedAns"] === answersArr[i]) {
        degree++;
      }
    }
  })();

  const precentage = (degree / 20) * 100;

  (function animatePrecent() {
    let degree0 = +degreeP.innerHTML;
    if (degree0 < precentage) {
      degreeP.innerHTML = degree0 + 1;
      setTimeout(animatePrecent, 25);
    } else {
      ReviewAns.removeAttribute("disabled");
    }
  })();

  styling.innerHTML = `.progress::before { width: ${precentage}%; transition: ${
    precentage * 25
  }ms cubic-bezier(.83,.35,.7,.89);}`;

  ReviewAns.addEventListener("click", () => {
    window.open("Answers.html", "_top");
    sessionStorage.setItem("Answers", JSON.stringify(answersArr));
  });
})();

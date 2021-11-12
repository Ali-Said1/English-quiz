(function () {
  const usedArr = JSON.parse(sessionStorage.getItem("qsArray"));
  console.log(usedArr);
  const degreeP = document.querySelector(".degreeSpan");

  const ReviewAns = document.querySelector(".review");

  let styling = document.head.appendChild(document.createElement("style"));

  let degree = 0;

  let answersArr = [];

  for (let i = 0; i < 20; i++) {
    if (usedArr[i]["qs"] === "I ... Sarah Yesterday.") {
      answersArr.push("met");
    } else if (
      usedArr[i]["qs"] ===
      "I saw the man. He is my teacher at school. I saw the man ... is my teacher at school."
    ) {
      answersArr.push("that & who");
    } else if (usedArr[i]["qs"] === "I ... lunch, when the light went out.") {
      answersArr.push("was cooking");
    } else if (usedArr[i]["qs"] === "My plane ... at 6 o'clock") {
      answersArr.push("leaves");
    } else if (
      usedArr[i]["qs"] === "I ... to London next month. It is already arranged."
    ) {
      answersArr.push("am flying");
    } else if (usedArr[i]["qs"] === "... you ever been to france?") {
      answersArr.push("Have");
    } else if (
      usedArr[i]["qs"] ===
      "I intend to go to France next  month. I ... go to France next month"
    ) {
      answersArr.push("am going to");
    } else if (usedArr[i]["qs"] === "I ... my opinion") {
      answersArr.push("gave");
    } else if (usedArr[i]["qs"] === "Staying ... late affects your health") {
      answersArr.push("up");
    } else if (usedArr[i]["qs"] === "They .. great food here") {
      answersArr.push("serve");
    } else if (
      usedArr[i]["qs"] === "My father is a firefighter he puts ... fires"
    ) {
      answersArr.push("out");
    } else if (
      usedArr[i]["qs"] === "-I feel sick =If I were you  ... see a doctor"
    ) {
      answersArr.push("would");
    } else if (
      usedArr[i]["qs"] === "Ahmed is 170cm. Ali is 180cm. Ahmed is ... Ali"
    ) {
      answersArr.push("shorter than");
    } else if (usedArr[i]["qs"] === "This is the ... car I have ever seen") {
      answersArr.push("most expensive");
    } else if (usedArr[i]["qs"] === "He is fast. He ... win the race") {
      answersArr.push("will");
    } else if (usedArr[i]["qs"] === "we ... every weekend") {
      answersArr.push("get together");
    } else if (usedArr[i]["qs"] === "Heart is a (an) ...") {
      answersArr.push("organ");
    } else if (usedArr[i]["qs"] === "Your advice ... me to take the decision") {
      answersArr.push("encouraged");
    } else if (usedArr[i]["qs"] === "I can't tell you it. It is ...") {
      answersArr.push("personal");
    } else if (usedArr[i]["qs"] === "The police ... chasing the criminal") {
      answersArr.push("are");
    }
  }

  (function () {
    for (let i = 0; i < 20; i++) {
      if (usedArr[i]["selectedAns"] === answersArr[i]) {
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
    window.open("answers.html", "_top");
    sessionStorage.setItem("answers", JSON.stringify(answersArr));
  });
})();

(function () {
  //Global Varivales
  const answerDiv = document.querySelector(".answerDiv");

  const answerParagraphs = document.getElementsByClassName("answer");

  const question = document.querySelector(".qs");

  const next = document.querySelector(".submit-btn");

  const back = document.querySelector(".back-btn");

  const endBtn = document.querySelector(".end-exam");

  const qnDiv = document.querySelector(".qnumber");

  const loaderbck = document.querySelector(".loaderbck");

  let qsArray = [];

  let usedArr = [];

  let indexer = 0;

  let qnVis;
  //set question function
  function setQs(qs, answerOne, answerTwo, answerThree, answerFour) {
    let qsObj = new Object();

    qsObj["qs"] = qs;
    let ranArr = [0, 1, 2, 3];
    let x = ranArr[Math.floor(Math.random() * ranArr.length)];

    qsObj[x] = answerOne;

    ranArr.splice(ranArr.indexOf(x), 1);

    let y = ranArr[Math.floor(Math.random() * ranArr.length)];

    qsObj[y] = answerTwo;

    ranArr.splice(ranArr.indexOf(y), 1);

    let z = ranArr[Math.floor(Math.random() * ranArr.length)];

    qsObj[z] = answerThree;

    ranArr.splice(ranArr.indexOf(z), 1);

    qsObj[ranArr[0]] = answerFour;

    qsObj["selectedAns"] = "";

    qsArray.push(qsObj);
  }

  //looping to set all the questions

  for (i = 0; i < 20; i++) {
    if (i == 0) {
      setQs("I ... Sarah Yesterday.", "meet", "meeting", "met", "meeted");
    } else if (i == 1) {
      setQs(
        "I saw the man. He is my teacher at school. I saw the man ... is my teacher at school.",
        "who",
        "where",
        "that",
        "that & who"
      );
    } else if (i == 2) {
      setQs(
        "I ... lunch, when the light went out.",
        "was cooking",
        "cooked",
        "cook",
        "cooker"
      );
    } else if (i == 3) {
      setQs(
        "My plane ... at 6 o'clock",
        "leaves",
        "left",
        "was leaving",
        "will leave"
      );
    } else if (i == 4) {
      setQs(
        "I ... to London next month. It is already arranged.",
        "will fly",
        "am flying",
        "fly",
        "was flying"
      );
    } else if (i == 5) {
      setQs("... you ever been to france?", "Have", "Were", "When", "Can");
    } else if (i == 6) {
      setQs(
        "I intend to go to France next  month. I ... go to France next month",
        "will",
        "am going to",
        "have",
        "let's"
      );
    } else if (i == 7) {
      setQs("I ... my opinion", "was", "gave", "did", "called");
    } else if (i == 8) {
      setQs("Staying ... late affects your health", "in", "on", "up", "to");
    } else if (i == 9) {
      setQs("They .. great food here", "serve", "celebrate", "play", "do");
    } else if (i == 10) {
      setQs(
        "My father is a firefighter he puts ... fires",
        "down",
        "out",
        "on",
        "in"
      );
    } else if (i == 11) {
      setQs(
        "-I feel sick =If I were you  ... see a doctor",
        "would",
        "will",
        "have",
        "saw"
      );
    } else if (i == 12) {
      setQs(
        "Ahmed is 170cm. Ali is 180cm. Ahmed is ... Ali",
        "tall",
        "shorter",
        "short",
        "shorter than"
      );
    } else if (i == 13) {
      setQs(
        "This is the ... car I have ever seen",
        "most expensive",
        "expensevier",
        "expensive",
        "expensived"
      );
    } else if (i == 14) {
      setQs(
        "He is fast. He ... win the race",
        "will",
        "is going to",
        "is",
        "isn't"
      );
    } else if (i == 15) {
      setQs("we ... every weekend", "get together", "go", "respect", "extract");
    } else if (i == 16) {
      setQs("Heart is a (an) ...", "player", "organ", "infection", "athlete");
    } else if (i == 17) {
      setQs(
        "Your advice ... me to take the decision",
        "encouraged",
        "discouraged",
        "made",
        "stopped"
      );
    } else if (i == 18) {
      setQs(
        "I can't tell you it. It is ...",
        "personal",
        "public",
        "homemade",
        "occasion"
      );
    } else if (i == 19) {
      setQs("The police ... chasing the criminal", "is", "are", "was", "so");
    }
  }
  //Randomizing Questions
  (function () {
    let qsRan = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    for (i = 0; i < 20; i++) {
      function returnRan() {
        let x = qsRan[Math.floor(Math.random() * qsRan.length)];
        qsRan.splice(qsRan.indexOf(x), 1);
        return x;
      }
      let functionReturn = returnRan();
      usedArr[i] = qsArray[functionReturn];
    }
  })();

  //Adding a question and removing the loader on page load

  window.addEventListener("load", () => {
    question.innerHTML = usedArr[indexer]["qs"];
    qnVis = indexer + 1;
    qnDiv.innerHTML = "Q" + qnVis + ":";
    for (i = 0; i < 4; i++) {
      answerParagraphs[i].innerHTML = usedArr[indexer][i];
    }
    loaderbck.classList.add("fade");
    setTimeout(function () {
      loaderbck.style.display = "none";
    }, 600);
  });

  //setting the selected answer on click on the answer

  answerDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      for (let i = 0; i < answerParagraphs.length; i++) {
        answerParagraphs[i].classList.remove("answer-selected");
      }
      e.target.classList.add("answer-selected");
      usedArr[indexer]["selectedAns"] = e.target.innerText;
    }
  });

  //setting "next" button functions

  next.addEventListener("click", () => {
    back.removeAttribute("disabled");
    indexer++;
    if (indexer === 19) {
      next.setAttribute("disabled", "true");
    }
    for (let i = 0; i < answerParagraphs.length; i++) {
      answerParagraphs[i].classList.remove("answer-selected");
    }
    question.innerHTML = usedArr[indexer]["qs"];
    qnVis = indexer + 1;
    qnDiv.innerHTML = "Q" + qnVis + ":";
    for (i = 0; i < 4; i++) {
      answerParagraphs[i].innerHTML = usedArr[indexer][i];
    }
    //Checking if question already answered to add "answer-selected" class
    if (usedArr[indexer]["selectedAns"] != "") {
      for (i = 0; i < 4; i++) {
        answerParagraphs[i].innerHTML = usedArr[indexer][i];
        if (answerParagraphs[i].innerText == usedArr[indexer]["selectedAns"]) {
          answerParagraphs[i].classList.add("answer-selected");
        }
      }
    }
  });

  //setting back button functions

  back.addEventListener("click", () => {
    next.removeAttribute("disabled");
    indexer--;
    qnVis = indexer + 1;
    qnDiv.innerHTML = "Q" + qnVis + ":";
    for (let i = 0; i < answerParagraphs.length; i++) {
      answerParagraphs[i].classList.remove("answer-selected");
    }
    question.innerHTML = usedArr[indexer]["qs"];
    for (i = 0; i < 4; i++) {
      answerParagraphs[i].innerHTML = usedArr[indexer][i];
      if (answerParagraphs[i].innerText == usedArr[indexer]["selectedAns"]) {
        answerParagraphs[i].classList.add("answer-selected");
      }
    }
    if (indexer === 0) {
      back.setAttribute("disabled", "true");
    }
  });

  endBtn.addEventListener("click", () => {
    sessionStorage.setItem("qsArray", JSON.stringify(usedArr));
    window.open("results.html");
    window.close();
  });
})();


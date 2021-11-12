(function () {
  const answers = document.getElementsByClassName("answer");

  const answerContainer = document.querySelector(".answerDiv");

  const question = document.querySelector(".qs");

  const submit = document.querySelector(".submit-btn");

  const back = document.querySelector(".back-btn");

  const endBtn = document.querySelector(".end-exam");

  const qnDiv = document.querySelector(".qnumber");

  let indexer = 0;

  let qn = 1;

  let qnVis = 1;

  let qsArray = [];

  window.onload = setQs(
    "I ... Sarah Yesterday.",
    "meet",
    "meeting",
    "met",
    "meeted"
  );
  answerContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("answer")) {
      for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("answer-selected");
      }
      e.target.classList.add("answer-selected");
      submit.removeAttribute("disabled");
    }
  });

  function submitAns() {
    back.removeAttribute("disabled");

    let functionReturn = "";
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].classList.contains("answer-selected")) {
        functionReturn = i;
      }
    }
    if (qnVis < qn - 1) {
      qsArray[indexer]["selectedAns"] = answers[functionReturn].innerHTML;
      qnVis++;

      indexer = qnVis - 1;
      question.innerHTML = qsArray[indexer]["Question"];

      for (let i = 0; i < 4; i++) {
        answers[i].innerHTML = qsArray[indexer][i];
        answers[i].classList.remove("answer-selected");
        if (answers[i].innerHTML == qsArray[indexer]["selectedAns"]) {
          answers[i].classList.add("answer-selected");
        }
      }

      qnDiv.innerHTML = "Q: " + qnVis;
    } else {
      if (qnVis == qn - 1) {
        qn = qn;
        qsArray[indexer]["selectedAns"] = answers[functionReturn].innerHTML;
      } else {
        qn++;
        for (let i = 0; i < answers.length; i++) {
          answers[i].classList.remove("answer-selected");
        }
        let qs = new Object();
        qs["Question"] = question.innerHTML;
        qs[0] = answers[0].innerHTML;
        qs[1] = answers[1].innerHTML;
        qs[2] = answers[2].innerHTML;
        qs[3] = answers[3].innerHTML;
        qs["selectedAns"] = answers[functionReturn].innerHTML;

        qsArray.push(qs);
      }
      qnVis++;
      indexer++;
      resetPage();

      if (qn == 2) {
        setQs(
          "I saw the man. He is my teacher at school. I saw the man ... is my teacher at school.",
          "who",
          "where",
          "that",
          "that & who"
        );
      } else if (qn == 3) {
        setQs(
          "I ... lunch, when the light went out.",
          "was cooking",
          "cooked",
          "cook",
          "cooker"
        );
      } else if (qn == 4) {
        setQs(
          "My plane ... at 6 o'clock",
          "leaves",
          "left",
          "was leaving",
          "will leave"
        );
      } else if (qn == 5) {
        setQs(
          "I ... to London next month. It is already arranged.",
          "will fly",
          "am flying",
          "fly",
          "was flying"
        );
      } else if (qn == 6) {
        setQs("... you ever been to france?", "Have", "Were", "When", "Can");
      } else if (qn == 7) {
        setQs(
          "I intend to go to France next  month. I ... go to France next month",
          "will",
          "am going to",
          "have",
          "let's"
        );
      } else if (qn == 8) {
        setQs("I ... my opinion", "was", "gave", "did", "called");
      } else if (qn == 9) {
        setQs("Staying ... late affects your health", "in", "on", "up", "to");
      } else if (qn == 10) {
        setQs("They .. great food here", "serve", "celebrate", "play", "do");
      } else if (qn == 11) {
        setQs(
          "My father is a firefighter he puts ... fires",
          "down",
          "out",
          "on",
          "in"
        );
      } else if (qn == 12) {
        setQs(
          "-I feel sick =If I were you  ... see a doctor",
          "would",
          "will",
          "have",
          "saw"
        );
      } else if (qn == 13) {
        setQs(
          "Ahmed is 170cm. Ali is 180cm. Ahmed is ... Ali",
          "tall",
          "shorter",
          "short",
          "shorter than"
        );
      } else if (qn == 14) {
        setQs(
          "This is the ... car I have ever seen",
          "most expensive",
          "expensevier",
          "expensive",
          "expensived"
        );
      } else if (qn == 15) {
        setQs(
          "He is fast. He ... win the race",
          "will",
          "is going to",
          "is",
          "isn't"
        );
      } else if (qn == 16) {
        setQs(
          "we ... every weekend",
          "get together",
          "go",
          "respect",
          "extract"
        );
      } else if (qn == 17) {
        setQs("Heart is a (an) ...", "player", "organ", "infection", "athlete");
      } else if (qn == 18) {
        setQs(
          "Your advice ... me to take the decision",
          "encouraged",
          "discouraged",
          "made",
          "stopped"
        );
      } else if (qn == 19) {
        setQs(
          "I can't tell you it. It is ...",
          "personal",
          "public",
          "homemade",
          "occasion"
        );
      } else if (qn == 20) {
        setQs("The police ... chasing the criminal", "is", "are", "was", "so");
      } else {
        qnDiv.innerHTML = "Q: " + qnVis;

        qsArray[19]["selectedAns"] = answers[functionReturn].innerHTML;

        question.innerHTML = qsArray[indexer]["Question"];

        for (let i = 0; i < 4; i++) {
          answers[i].innerHTML = qsArray[indexer][i];
          answers[i].classList.remove("answer-selected");
          if (answers[i].innerHTML == qsArray[indexer]["selectedAns"]) {
            answers[i].classList.add("answer-selected");
          }
        }
      }
    }
  }

  submit.addEventListener("click", () => {
    switch (qnVis) {
      case 1:
        submitAns();
        break;
      case 2:
        submitAns();
        break;
      case 3:
        submitAns();
        break;
      case 4:
        submitAns();
        break;
      case 5:
        submitAns();
        break;
      case 6:
        submitAns();
        break;
      case 7:
        submitAns();
        break;
      case 8:
        submitAns();
        break;
      case 9:
        submitAns();
        break;
      case 10:
        submitAns();
        break;
      case 11:
        submitAns();
        break;
      case 12:
        submitAns();
        break;
      case 13:
        submitAns();
        break;
      case 14:
        submitAns();
        break;
      case 15:
        submitAns();
        break;
      case 16:
        submitAns();
        break;
      case 17:
        submitAns();
        break;
      case 18:
        submitAns();
        break;
      case 19:
        submitAns();
        break;
      case 20:
        submit.setAttribute("disabled", "true");
        let functionReturn = "";
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].classList.contains("answer-selected")) {
            functionReturn = i;
          }
        }
        qn++;
        if (typeof qsArray[19] === "undefined") {
          let qs = new Object();
          qs["Question"] = question.innerHTML;
          qs[0] = answers[0].innerHTML;
          qs[1] = answers[1].innerHTML;
          qs[2] = answers[2].innerHTML;
          qs[3] = answers[3].innerHTML;
          qs["selectedAns"] = answers[functionReturn].innerHTML;

          qsArray.push(qs);
          endBtn.removeAttribute("disabled");
        } else {
          qsArray[19]["selectedAns"] = answers[functionReturn].innerHTML;

          question.innerHTML = qsArray[indexer]["Question"];

          for (let i = 0; i < 4; i++) {
            answers[i].innerHTML = qsArray[indexer][i];
            answers[i].classList.remove("answer-selected");
            if (answers[i].innerHTML == qsArray[indexer]["selectedAns"]) {
              answers[i].classList.add("answer-selected");
            }
          }
        }
    }
  });

  back.addEventListener("click", () => {
    if (qnVis > 1) {
      submit.removeAttribute("disabled");

      qnVis--;
      indexer = qnVis - 1;

      qnDiv.innerHTML = "Q: " + qnVis;

      //indexer = qnDecrementor;

      question.innerHTML = qsArray[indexer]["Question"];

      for (let i = 0; i < 4; i++) {
        answers[i].innerHTML = qsArray[indexer][i];
        answers[i].classList.remove("answer-selected");
        if (answers[i].innerHTML == qsArray[indexer]["selectedAns"]) {
          answers[i].classList.add("answer-selected");
        }
      }
    } else {
      back.setAttribute("disabled", true);
    }
    let functionReturn = "";
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].classList.contains("answer-selected")) {
        functionReturn = i;
      }
    }

    qsArray[indexer]["selectedAns"] = answers[functionReturn].innerHTML;
  });

  function resetPage() {
    submit.setAttribute("disabled", "true");
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove("answer-selected");
    }
  }

  function setQs(Question, answerOne, answerTwo, answerThree, answerFour) {
    qnDiv.innerHTML = "Q: " + qnVis;
    question.innerHTML = Question;
    //answers = document.getElementsByClassName("answer");

    let arr = [...answers];

    let ranArr = [0, 1, 2, 3];

    let x = ranArr[Math.floor(Math.random() * ranArr.length)];

    arr[x].innerHTML = answerOne;

    ranArr.splice(ranArr.indexOf(x), 1);

    let y = ranArr[Math.floor(Math.random() * ranArr.length)];

    arr[y].innerHTML = answerTwo;

    ranArr.splice(ranArr.indexOf(y), 1);

    let z = ranArr[Math.floor(Math.random() * ranArr.length)];

    arr[z].innerHTML = answerThree;

    ranArr.splice(ranArr.indexOf(z), 1);

    answers[ranArr[0]].innerHTML = answerFour;
  }

  endBtn.addEventListener("click", () => {
    sessionStorage.setItem("qsArray", JSON.stringify(qsArray));
    window.open("results.html", "_new");
    window.close();
  });
})();


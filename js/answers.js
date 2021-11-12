(function () {
  try {
    const qsArray = JSON.parse(sessionStorage.getItem("qsArray"));

    const answers = JSON.parse(sessionStorage.getItem("answers"));

    const popup = document.querySelector(".popup");

    const close_popup = document.querySelector(".closepopup");

    const open_popup = document.querySelector(".openpopup");
    console.log(qsArray);
    for (i = 0; i < 20; i++) {
      let qn = i + 1;
      let containerClass = "container" + i;
      let qsClass = "qs" + i;
      let answersDivClass = "answersDiv" + i;
      let p1Class = "firstAnswer" + i;
      let p2Class = "SecondAnswer" + i;
      let p3Class = "ThirdAnswer" + i;
      let p4Class = "FourthAnswer" + i;
      let containerDiv = document.createElement("div");
      containerDiv.classList.add(containerClass);
      let questionDiv = document.createElement("div");
      questionDiv.classList.add(qsClass);
      questionDiv.innerText = "Q " + qn + ": " + qsArray[i]["qs"];
      containerDiv.appendChild(questionDiv);
      let answersContainer = document.createElement("div");
      answersContainer.classList.add(answersDivClass);
      let firstP = document.createElement("p");
      firstP.classList.add(p1Class);
      firstP.innerText = qsArray[i][0];
      answersContainer.appendChild(firstP);
      let secondP = document.createElement("p");
      secondP.innerText = qsArray[i][1];
      secondP.classList.add(p2Class);
      answersContainer.appendChild(secondP);
      let thirdP = document.createElement("p");
      thirdP.classList.add(p3Class);
      thirdP.innerText = qsArray[i][2];
      answersContainer.appendChild(thirdP);
      let fourthP = document.createElement("p");
      fourthP.classList.add(p4Class);
      fourthP.innerText = qsArray[i][3];
      answersContainer.appendChild(fourthP);
      containerDiv.appendChild(answersContainer);
      document.body.insertBefore(
        containerDiv,
        document.getElementsByTagName("script")[0]
      );
    }
    for (let i = 0; i < 20; i++) {
      let qsname = document.querySelector(`.qs${i}`);
      let answersDiv = document.querySelector(`.answersDiv${i}`);
      let answersCollec = answersDiv.getElementsByTagName("p");
      if (qsArray[i]["selectedAns"] === answers[i]) {
        for (z = 0; z < 4; z++) {
          if (answersCollec[z].innerText === answers[i]) {
            answersCollec[z].style.backgroundColor = "#22ed22";
            answersCollec[z].style.color = "#444";
            qsname.style.color = "#444";
            qsname.style.backgroundColor = "#22ed22";
          }
        }
      } else if (qsArray[i]["selectedAns"] == "") {
        qsname.style.backgroundColor = "grey";
        for (z = 0; z < 4; z++) {
          if (answersCollec[z].innerText === answers[i]) {
            answersCollec[z].style.backgroundColor = "#22ed22";
            answersCollec[z].style.color = "#f4fbfb";
          }
        }
      } else {
        for (z = 0; z < 4; z++) {
          if (answersCollec[z].innerText === answers[i]) {
            answersCollec[z].style.backgroundColor = "#22ed22";
            answersCollec[z].style.color = "#f4fbfb";
            qsname.style.backgroundColor = "red";
          } else if (answersCollec[z].innerText === qsArray[i]["selectedAns"]) {
            answersCollec[z].style.backgroundColor = "#ff2828";
            answersCollec[z].style.color = "#f4fbfb";
          }
        }
      }
    }
    window.addEventListener("scroll", () => {
      if (popup.classList.contains("active")) {
        scrollTo(0, 0);
      }
    });
    close_popup.addEventListener("click", () => {
      popup.classList.remove("active");
      open_popup.classList.add("active");
    });
    open_popup.addEventListener("click", () => {
      popup.classList.add("active");
      open_popup.classList.remove("active");
    });
  } catch (e) {
    window.open("404.html");
    window.close();
  }
})();

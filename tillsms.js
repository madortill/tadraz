// verubels
let ntillsmsCorrectAnswers = 0;
let strTillsmsCorrectAnswer = [];
let ntillsmsCurrentQuestion;
let arrtillsmsQuestions = DATA;
let pageNum = 1;
let tillsmsCurrentExer;
let tillsmsCurrentAns
let objTillsmsCurrentQuestion;
let nTillsmsAmountOfExers = arrtillsmsQuestions.length;
let bTillsmsRestart = false;
let amountOfTillsmsQuestions = 0;
let nTillsmsQuestionAnswered = 0;
let bTillsmsVisited = false;
let currSubSubject = "";

var elem = document.querySelector("html");

/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => { 
    document.querySelector(`.loader`).classList.add(`fade`);
    elem.addEventListener(`click`,openFullscreen);
    createtillsmsContent();
});

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullscreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    } 
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler(){
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement){
        let addFullscreen = El("img", {attributes: {src: "./assets/images/fullScreenButton.svg", class: "fullScreenButton"}, listeners: {"click": openFullscreen}});
        document.querySelector(".logoAndFullScreen").prepend(addFullscreen);
        document.exitFullscreen();
    } else {
        let addFullscreen = document.querySelector(".fullScreenButton")
        if (addFullscreen) {
            document.querySelector(".logoAndFullScreen").removeChild(addFullscreen);
        }
    }
}

/* createtillsmsContent
--------------------------------------------------------------
Description: start tillsms app*/
const createtillsmsContent = () => {
    let navBar = El("div", {classes: ["tillsmsTopNav", "centerX"]},
        El("div", {classes: ["tillsmsExercise", "tillsmsCategory1", "tillsmsCategory", "centerX"],},
            El("div", {classes: ["centerX", "tillsmsExerTitleMain"]},  "תרגולים"),
            El("div", {classes: ["tillsmsExerciseCounter", "centerX"]}, `${nTillsmsAmountOfExers} צאטים שלא נקראו`),
        ),
    );
    document.querySelector(".tillsmsMainPageHeader").append(navBar);
    document.querySelector(".tillsmsExercise").classList.add("tillsmsChoosenCategory");
    // create exer page
    for(exer of Object.keys(arrtillsmsQuestions)) {
        let exerContainer = El("div", {classes: ["tillsmsExerciseContainer", `tillsmsExer${exer}`], listeners: {click: startExer}},
            El("img",{attributes: {class: "tillsmsExerPic",src: arrtillsmsQuestions[exer].pic}}),
            El("div", {cls: "tillsmsExerText"},
                El("div", {cls: "tillsmsExerTitle"}, arrtillsmsQuestions[exer].title),
                El("div", {cls: "tillsmsExerStatus"}, `סטטוס: ${arrtillsmsQuestions[exer].status}`),
            ),
            El("div", {cls: "tillsmsExerCounterContainer"},
                El("div", {cls: "tillsmsExerCounter"}, `0/${findAmountOfQuestions(arrtillsmsQuestions[exer].content)}`),
                El("div", {cls: "tillsmsExerAmount"}, findAmountOfQuestions(arrtillsmsQuestions[exer].content)),
            ),
            
        );
        document.querySelector(".tillsmsPageContent").append(exerContainer);
        arrtillsmsQuestions[exer].status = "בביצוע";
    }
}

/* startExer
--------------------------------------------------------------
Description: */
const startExer = (event) => {
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="none";
    document.querySelector(`.tillsmsAnswerKeybord`).classList.remove("hidden")
    // show exer page and save exer index of exer and question
    document.querySelector(`.tillsmsMainPage`).classList.add("hidden");
    document.querySelector(`.tillsmsExerPage`).classList.remove("hidden");
    tillsmsCurrentExer = Number(event.currentTarget.classList[1].slice(11));
    ntillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0];
    currSubSubject = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[1] || arrtillsmsQuestions[tillsmsCurrentExer].startSubSubject;
    // create header and stsrt question
    let exerHeader = El("div",{cls: "tillsmsExerheaderContainer"},
        El("div",{cls: "tillsmsExerHeader"},
        El("img",{attributes: {class: "tillsmsExerArrow",src: "./assets/images/tillsms/arrowRight.svg"}, listeners: {"click": () => {
            document.querySelector(`.tillsmsMainPage`).classList.remove("hidden");
            document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerStatus`).innerHTML = `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`;
            let header = document.querySelector(`.tillsmsExerheaderContainer`)
            document.querySelector(`.tillsmsExerPage`).removeChild(header);
            document.querySelector(`.tillsmsExerPage`).classList.add("hidden");
            document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).classList.add("hidden");
            document.querySelectorAll(".animate__pulse").forEach(el => {
                el.classList.remove("animate__pulse");
            })
        }}}),
            El("img",{attributes: {class: "tillsmsExerPic",src: arrtillsmsQuestions[tillsmsCurrentExer].pic}}),
            El("div", {cls: "tillsmsExerText"},
                El("div", {cls: "tillsmsExerTitle"}, arrtillsmsQuestions[tillsmsCurrentExer].title),
                El("div", {cls: "tillsmsExerStatus"}, `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`),
            ),
            El("div", {cls: "tillsmsExerCounter"}, `${ntillsmsCurrentQuestion}/${findAmountOfQuestions(arrtillsmsQuestions[exer].content)}`),
        )
    );
    document.querySelector(".tillsmsExerPage").append(exerHeader);
    startQuestion();
}

/* startQuestion
--------------------------------------------------------------
Description: */
const startQuestion = () => {
    // restore event listeners and save current question object
    objTillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].content[currSubSubject][ntillsmsCurrentQuestion]; 
    console.log(objTillsmsCurrentQuestion);
    // create question container on first visit and shoe it on next visits
    if (!document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`)) {
        let questionContainer = El("div", {classes: ["tillsmsQuestionContainer", `tillsmsQuestionContainer${tillsmsCurrentExer}`]});
        document.querySelector(`.tillsmsExerPage`).append(questionContainer);
    } else {
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).classList.remove("hidden");
    }
    if (ntillsmsCurrentQuestion === findAmountOfQuestions(arrtillsmsQuestions[exer].content)) {
        document.querySelector(`.tillsmsAnswerKeybord`).classList.add("hidden")
        return;
    }
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="all";
    // create question if it hasn't been created already
    if (!document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}Question${ntillsmsCurrentQuestion}`)) { 
        let question = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble", `Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}Question${ntillsmsCurrentQuestion}`]},
            El("img",{ attributes: {src: "./assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
            El("div",{cls: "tillsmsQuestion"}, objTillsmsCurrentQuestion.question ?? objTillsmsCurrentQuestion.content),
        );
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(question);
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
    }
    // ampty answer container and fill it acording to type
    document.querySelector(`.tillsmsAnswersContainer`).innerHTML = "";
    switch (objTillsmsCurrentQuestion.type) {
        case "manyChoices":
            tillsmsCurrentAns = [];
            objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
                let answer = El("div", {classes: [`manyChoices`, `ans${index + 1}`, `tillsmsAns`] , listeners: {click: onClickManyChoices}}, ans);
                document.querySelector(`.tillsmsAnswersContainer`).append(answer);
            })
            break;
        case "manyPics":
            tillsmsCurrentAns = [];
            objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
                let answer = El("div", {classes: [`manyChoices`, `ans${index + 1}`, `tillsmsAns`] , listeners: {click: onClickManyChoices}},
                    El("img", {attributes: {src: ans}, classes: [`manyPicsAns`] },)
                );
                document.querySelector(`.tillsmsAnswersContainer`).append(answer);
            })
            break;
        case "info":
            document.querySelector(".tillsmsExerArrow").style.pointerEvents = "none";
            let answer = El("div", {classes: []}, "קיבלתם הודעה חדשה, קראו אותה");
            document.querySelector(`.tillsmsAnswersContainer`).append(answer);
            document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
            setTimeout(() => {
                console.log("timeout");
                arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0]++;
                ntillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0];
                document.querySelector(".tillsmsExerPage .tillsmsExerCounter").innerHTML = `${ntillsmsCurrentQuestion}/${findAmountOfQuestions(arrtillsmsQuestions[exer].content)}`;
                if(ntillsmsCurrentQuestion <  findAmountOfQuestions(arrtillsmsQuestions[exer].content)) {
                    startQuestion();
                } else {
                    endTillsmsExer();
                }
                document.querySelector(".tillsmsExerArrow").style.pointerEvents = "all";
            }, 3000);
            break;
        case "crossroadQuestion": 
            tillsmsCurrentAns = [];
            Object.keys(objTillsmsCurrentQuestion.answers).forEach((ans, index) => {
                let answer = El("div", {classes: [`manyChoices`, `ans${index + 1}`, `tillsmsAns`] , listeners: {click: onClickManyChoices}, "data-goTo": objTillsmsCurrentQuestion.answers[ans]}, ans);
                document.querySelector(`.tillsmsAnswersContainer`).append(answer);
            })
            break;
        default:
            break;
    }
    document.querySelector(`.tillsmsSendArrow`).classList.add("disabled");

    if (objTillsmsCurrentQuestion.type !== "info") {
        // control grid columns
        document.querySelector(`.tillsmsAnswersContainer`).style.gridTemplateColumns = "";
        document.querySelector(`.tillsmsAnswersContainer`).style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(objTillsmsCurrentQuestion.answers.length))}, 1fr)`;
        if (objTillsmsCurrentQuestion.type !== "crossroadQuestion") {
            // collecting correct answers
            strTillsmsCorrectAnswer = [];
            objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
                objTillsmsCurrentQuestion.correctAns.forEach(e => {
                    if(index === (e.slice(3) - 1)) {
                        strTillsmsCorrectAnswer.push(ans);
                    }
                })
            })
        }
    }

}


/* onClickManyChoices-
--------------------------------------------------------------
Description: */
const onClickManyChoices = (event) => {
    let allowedAnswerNum;
    if (objTillsmsCurrentQuestion.type !== "crossroadQuestion") {
        allowedAnswerNum = objTillsmsCurrentQuestion.correctAns.length
    } else {
        allowedAnswerNum = 1;
    }
    // check if ans was clicked before, add or remove to array acordingly
    let currAns = event.currentTarget.classList[1];
    if(document.querySelector(`.${currAns}`).style.backgroundColor === "rgb(201, 223, 231)") {
        document.querySelector(`.${currAns}`).style.backgroundColor = "white";
        tillsmsCurrentAns = tillsmsCurrentAns.filter(e => e !== currAns);
    } else if(tillsmsCurrentAns.length < allowedAnswerNum) {
        tillsmsCurrentAns.push(event.currentTarget.classList[1]);
        document.querySelector(`.${currAns}`).style.backgroundColor = "rgb(201, 223, 231)";
    }
    // add text or pics in send bar
    document.querySelector(`.tillsmsSendBar`).innerHTML = "";
    const iterator = objTillsmsCurrentQuestion.type === "crossroadQuestion" ?  Object.keys(objTillsmsCurrentQuestion.answers): objTillsmsCurrentQuestion.answers
    iterator.forEach((ans, index) => {
        tillsmsCurrentAns.forEach(e => {
            if(index === (e.slice(3) - 1)) {
                if(objTillsmsCurrentQuestion.type === "manyChoices" || objTillsmsCurrentQuestion.type === "crossroadQuestion") {
                    document.querySelector(`.tillsmsSendBar`).innerHTML += `${ans}, `;
                } else {
                    document.querySelector(".tillsmsSendBar").classList.add("tillsmsSendBarWithPic")
                    let pic = El("img",{attributes: {src: ans, class: "tillsmsSendBarPic"}});
                    document.querySelector(`.tillsmsSendBar`).append(pic)
                }
            }
        })
    })
    // remove last "," from text
    if(objTillsmsCurrentQuestion.type === "manyChoices" || objTillsmsCurrentQuestion.type === "crossroadQuestion") {
        let answerTyped = document.querySelector(`.tillsmsSendBar`).innerHTML;
        document.querySelector(`.tillsmsSendBar`).innerHTML = answerTyped.slice(0, answerTyped.length - 2);
    }
    // add or remove check button listener
    if(tillsmsCurrentAns.length === allowedAnswerNum){
        document.querySelector(`.tillsmsSendArrow`).classList.remove("disabled");
        document.querySelector(`.tillsmsSendArrow`).addEventListener("click", checkAnswer);
    } else {
        document.querySelector(`.tillsmsSendArrow`).classList.add("disabled");
        document.querySelector(`.tillsmsSendArrow`).removeEventListener("click", checkAnswer);
    }
}

/* compareOutOfOrder
--------------------------------------------------------------
Description: */
const compareOutOfOrder = (arr1, arr2) => {
    if(arr1.length !== arr2.length){ return false; } 
    const counts = new Map();
    arr1.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1)); 
    arr2.forEach((value) => counts.set(value, (counts.get(value) ?? 0) - 1));
    return Array.from(counts.values()).every((count) => count === 0);
};

/* checkAnswer
--------------------------------------------------------------
Description: */
const checkAnswer = () => {
    // save send bar content and empty it, send messege with answers
    document.querySelector(".tillsmsExerArrow").style.pointerEvents = "none";
    let answerContentToSend = document.querySelector(`.tillsmsSendBar`).innerHTML;
    document.querySelector(".tillsmsSendBar").classList.remove("tillsmsSendBarWithPic")
    document.querySelector(`.tillsmsSendBar`).innerHTML = "";
    let answerToSend = El("div",{classes: ["animate__pulse", "tillsmsAnswerBubble", `Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}`]},
        El("div",{classes: ["tillsmsAnswer", `Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Content`]},),
        El("img",{ attributes: {src: "./assets/images/tillsms/white.svg", class: "bubbleArrow"}}),
    );
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(answerToSend); 
    document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Content`).innerHTML = answerContentToSend;
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
    // disable event listeners
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="none";
    document.querySelector(`.tillsmsSendArrow`).removeEventListener("click", checkAnswer);
    if (objTillsmsCurrentQuestion.type !== "crossroadQuestion") {
        // check if answer was correct, if so update varuble and send messege
        setTimeout(() => {
            let feedback = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble"]},
            El("img",{ attributes: {src: "./assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
            El("div",{classes: ["tillsmsQuestion", `Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`]},),
            );
            document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(feedback);
            if(compareOutOfOrder(tillsmsCurrentAns, objTillsmsCurrentQuestion.correctAns)) {
                ntillsmsCorrectAnswers++;
                document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = "כל הכבוד! תשובה נכונה"
            } else if (objTillsmsCurrentQuestion.type === "manyChoices"){
                document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = `אופס! טעות. התשובה היא: <br> ${strTillsmsCorrectAnswer.join(', ')}${objTillsmsCurrentQuestion.explain ? "הסבר: " + objTillsmsCurrentQuestion.explain : "" }`
            } else if (objTillsmsCurrentQuestion.type === "manyPics") {
                document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = `אופס! טעות. התשובה היא:`
                strTillsmsCorrectAnswer.forEach(src => {
                    let pic = El("img",{attributes: {src: src, class: "tillsmsSendBarPic"}});
                    document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`).append(pic)
                })
                if (objTillsmsCurrentQuestion.explain) {
                    document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`).append(
                    `הסבר: ${objTillsmsCurrentQuestion.explain}`)
                }
            }
            document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
            // update current answer in array and resave it to varuble
            arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0]++;
            ntillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0];
            document.querySelector(".tillsmsExerPage .tillsmsExerCounter").innerHTML = `${ntillsmsCurrentQuestion}/${findAmountOfQuestions(arrtillsmsQuestions[exer].content)}`,
            document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerCounter`).innerHTML = `${ntillsmsCurrentQuestion}/${findAmountOfQuestions(arrtillsmsQuestions[exer].content)}`;
            document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerAmount`).innerHTML = `${findAmountOfQuestions(arrtillsmsQuestions[exer].content) - ntillsmsCurrentQuestion}`
            nTillsmsQuestionAnswered++
        }, 1500);

            // move to next question or end exer
        setTimeout(() => {
            //  make sure we didn't reach the end of questions in subSubject
            if ((ntillsmsCurrentQuestion) !== arrtillsmsQuestions[tillsmsCurrentExer].content[currSubSubject].length) { 
                document.querySelector(".tillsmsExerArrow").style.pointerEvents = "all";
                startQuestion();
            } else if (objTillsmsCurrentQuestion.nextSub) {
                nextSub();
                return
            } else {
                console.error(`Please add "nextSub" to the last question in each subSubject. problem in ${objTillsmsCurrentQuestion.quesiton}`);
                return;
            }

        }, 3000);
    } else {
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
        // update current answer in array and resave it to varuble
        arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0]++;
        ntillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0];
        document.querySelector(".tillsmsExerPage .tillsmsExerCounter").innerHTML = `${ntillsmsCurrentQuestion}/${findAmountOfQuestions(arrtillsmsQuestions[exer].content)}`,
        document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerCounter`).innerHTML = `${ntillsmsCurrentQuestion}/${findAmountOfQuestions(arrtillsmsQuestions[exer].content)}`;
        document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerAmount`).innerHTML = `${findAmountOfQuestions(arrtillsmsQuestions[exer].content) - ntillsmsCurrentQuestion}`

        setTimeout(() => {
            nextSub();
        }, 1500)
    }


    const nextSub = () => {
        let subToGoto = objTillsmsCurrentQuestion.type === "crossroadQuestion" ? objTillsmsCurrentQuestion.answers[answerContentToSend] : objTillsmsCurrentQuestion.nextSub;
        if (subToGoto === "end") {
            document.querySelector(".tillsmsExerArrow").style.pointerEvents = "all";
            endTillsmsExer();
            return;
        } else 
        currSubSubject = subToGoto;
        ntillsmsCurrentQuestion = 0;
        arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[0] = 0;
        arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion[1] = currSubSubject;
        startQuestion();
    }
    // move to next question or end exer
    // setTimeout(() => {
    //     document.querySelector(".tillsmsExerArrow").style.pointerEvents = "all";
    //     if(ntillsmsCurrentQuestion <  findAmountOfQuestions(arrtillsmsQuestions[exer].content)) {
    //         startQuestion();
    //     } else {
    //         endTillsmsExer();
    //     }
    // }, 3000);
}

/* endTillsmsExer
--------------------------------------------------------------
Description: */
const endTillsmsExer = () => {
    arrtillsmsQuestions[tillsmsCurrentExer].status = "הסתיים";
    document.querySelector(".tillsmsExerPage .tillsmsExerStatus").innerHTML = `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`;
    document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerStatus`).innerHTML = `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`;
    document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerAmount`).classList.add("hidden")
    document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerCounter`).style.color = "rgb(143 143 143)";
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).style.height = "84vh";
    document.querySelector(`.tillsmsAnswerKeybord`).classList.add("hidden")

    let feedback = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble"]},
    El("img",{ attributes: {src: "./assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
    El("div",{classes: ["tillsmsQuestion", `Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`]}, "מעולה! התרגול הסתיים יכולים לעבור לתרגול הבא"),
    );
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(feedback);
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;

    nTillsmsAmountOfExers--;
    if(nTillsmsAmountOfExers > 0) {
        document.querySelector(".tillsmsExerciseCounter").innerHTML = `${nTillsmsAmountOfExers} צאטים שלא נקראו`;
    } else {
        document.querySelector(".tillsmsExerciseCounter").classList.add("hidden");
        console.log("end");
        let date = new Date();
        document.querySelector(`.Exer${tillsmsCurrentExer}Sub${removeSpaceAndStuff(currSubSubject)}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = `סיימתם את הלומדה! בתאריך ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} בשעה ${date.getHours()}:${date.getMinutes()}`;
        document.querySelector(".tillsmsExerArrow").style.pointerEvents = "none";
        let finishMessage = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble",], listeners: {click: sendHome}},
            El("img",{ attributes: {src: "./assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
            El("div",{classes: ["tillsmsQuestion", "tillsmsSendHomeMessege"]}, "לחצו כדי להמשיך למסך הסיום",
                El("img", {attributes: {src: "./assets/images/tillsms/backToHome.svg", class: "tillsmsSendHomeButton"}})
            ),
        );
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(finishMessage);
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
    }
}

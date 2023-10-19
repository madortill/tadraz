const DATA = [
    {
        pic: "../assets/images/questionsPics/example1.jpg",
        title: "תרגול בנושא 1",
        curretntQuestion: 0,
        status: "לא הותחל",
        startSubSubject: "הקדמה",
        content: {
            "הקדמה": [
                {
                    type: `manyPics`,
                    question: `שאלה עם המון תמונות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans3`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: "info",
                    content: "I knew you were trouble when you walked in, so shame on me now"
                },
                {
                    type: `manyChoices`,
                    question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12", "תשובה 13", "תשובה 14", "תשובה 15", "תשובה 16",],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans5`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: "crossroadQuestion",
                    question: "אתם יוצאים עם נשק?",
                    answers:  {"כן": "יציאה עם נשק", "לא": "end"} //key = answer, value = subSubject to go to
                }
            ],
            "יציאה עם נשק": [
                {}
            ]
        }
    },
]

// {
//     pic: "../assets/images/questionsPics/example1.jpg",
//     title: "תרגול בנושא 2",
//     curretntQuestion: 0,
//     status: "לא הותחל",
//     content: [
//         {
//             type: `manyChoices`,
//             question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
//             // recomended: no more than 16 answers, 8 if the are longer than one word
//             answers: ["תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12",],// the legth will determine how many answers will apear
//             correctAns: [`ans1`, `ans6`] // the legth will determine how many answers are reqwiered
//         },
//     ],
// },
// {
//     pic: "../assets/images/questionsPics/example1.jpg",
//     title: "תרגול בנושא 3",
//     curretntQuestion: 0,
//     status: "לא הותחל",
//     content: [
//         {
//             type: `manyChoices`,
//             question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
//             // recomended: no more than 16 answers, 8 if the are longer than one word
//             answers: ["תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9",],// the legth will determine how many answers will apear
//             correctAns: [`ans2`, `ans5`] // the legth will determine how many answers are reqwiered
//         },
//     ],
// }
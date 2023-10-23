const DATA = [
    // {
    //     pic: "../assets/images/questionsPics/example1.jpg",
    //     title: "הקדמה",
    //     curretntQuestion: 0,
    //     status: "לא הותחל",
    //     startSubSubject: "הקדמה",
    //     content: {
    //         "הקדמה": [
    //             {
    //                 type: `manyPics`,
    //                 question: `שאלה עם המון תמונות שאפשר לבחור מהן כמה שרוצים`,
    //                 // recomended: no more than 16 answers, 8 if the are longer than one word
    //                 answers: ["../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg", "../assets/images/questionsPics/exemple8.jpg"],// the legth will determine how many answers will apear
    //                 correctAns: [`ans1`, `ans3`] // the legth will determine how many answers are reqwiered
    //             },
    //             {
    //                 type: "info",
    //                 content: "I knew you were trouble when you walked in, so shame on me now"
    //             },
    //             {
    //                 type: `manyChoices`,
    //                 question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
    //                 // recomended: no more than 16 answers, 8 if the are longer than one word
    //                 answers: ["תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12", "תשובה 13", "תשובה 14", "תשובה 15", "תשובה 16",],// the legth will determine how many answers will apear
    //                 correctAns: [`ans1`, `ans2`, `ans5`] // the legth will determine how many answers are reqwiered
    //             },
    //             {
    //                 type: "crossroadQuestion",
    //                 question: "אתם יוצאים עם נשק?",
    //                 answers:  {"כן": "יציאה עם נשק", "לא": "end"} //key = answer, value = subSubject to go to
    //             }
    //         ],
    //         "יציאה עם נשק": [
    //             { }
    //         ]
    //     }
    // },
    {
        pic: "../assets/images/questionsPics/example1.jpg",
        title: "בטיחות בדרכים",
        curretntQuestion: [0, "הקדמה"],
        status: "לא הותחל",
        startSubSubject: "הקדמה",
        content: {
            "הקדמה": [
                {
                    type: `crossroadQuestion`,
                    question: `איך מגיעים הביתה?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: {"תחבורה ציבורית (כולל שאטלים)": "תחבצ", "טרמפים" : "טרמפים", "רכב פרטי" : "רכב"},// the legth will determine how many answers will apear
                },
            ],
            'תחבצ': [
                {
                    type: "info",
                    content: `יש לעלות על תחבורה תקנית שמגיע ליעד הרצוי. \n
                    יש להישאר מדוגם במשך כל הנסיעה \n
                    יש לנוע רק עם אוזניה אחת. \n
                    יש לגלות ערנות ולחפש סימנים מחשידים שבהם ניזכר בהמשך.`
                }, 
                {
                    type: `crossroadQuestion`,
                    question: `זוכר/ת שאסור לעלות על טרמפים?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: {"כן": "איסור טרמפים", "לא" : "איסור טרמפים"},
                },
            ],
            "טרמפים": [
                {
                    type: `crossroadQuestion`,
                    question: `זוכר/ת שאסור לעלות על טרמפים?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: {"כן": "איסור טרמפים טרמפ", "לא" : "איסור טרמפים טרמפ"}
                }
            ], 
            "איסור טרמפים": [
                {
                    type: `manyChoices`,
                    question: `זוכרים את 3 הסיבות לאיסור על טרמפים? בחרו:`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["סכנה בחטיפת חיילים", "חוסר היכרות עם הנהג ושיקול הדעת בנהיגה.", `אי עמידה בחוקי צה״ל שתגרור מענה משמעתי חמור.`, "שיהיה מביך ברכב", "שיוריד אותי רחוק מהבית", "שהרכב יתקלקל בדרך"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans3`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: "info", 
                    content: `לא לשכוח את הדגשים לנסיעה ברכב פרטי: \n
                    1. 7 שעות שינה לפני נהיגה. \n
                    2. אין לנהוג תחת השפעת אלכוהול. \n
                    3. יש לנהוג בהתאם לתנאי מזג האויר.\n
                    4. יש להימנע מהסחים במהלך הנהיגה: טלפון, מזון ועוד. \n
                    5. יש לשים לב למשתמשי דרך.`
                },
                {
                    type: "crossroadQuestion",
                    question: "האם אתה יודע מהם הסימנים המחשידים?",
                    answers: {"כן" : "מכיר סימנים", "לא" : "לא מכיר סימנים"}
                }
            ],
            "איסור טרמפים טרמפ": [
                {
                    type: `manyChoices`,
                    question: `זוכרים את 3 הסיבות לאיסור על טרמפים? בחרו:`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["סכנה בחטיפת חיילים", "חוסר היכרות עם הנהג ושיקול הדעת בנהיגה.", `אי עמידה בחוקי צה״ל שתגרור מענה משמעתי חמור.`, "שיהיה מביך ברכב", "שיוריד אותי רחוק מהבית", "שהרכב יתקלקל בדרך"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans3`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: "info",
                    content: `לא לשכוח את הדגשים לנסיעה בתחבורה ציבורית: \n
                    יש לעלות על תחבורה תקנית שמגיע ליעד הרצוי. \n
                    יש להישאר מדוגם במשך כל הנסיעה \n
                    יש לנוע רק עם אוזניה אחת. \n
                    יש לגלות ערנות ולחפש סימנים מחשידים שבהם ניזכר בהמשך.`
                },
                {
                    type: "info", 
                    content: `לא לשכוח גם את הדגשים לנסיעה ברכב פרטי: \n
                    1. 7 שעות שינה לפני נהיגה. \n
                    2. אין לנהוג תחת השפעת אלכוהול. \n
                    3. יש לנהוג בהתאם לתנאי מזג האויר. \n 
                    4. יש להימנע מהסחים במהלך הנהיגה: טלפון, מזון ועוד. \n
                    5. יש לשים לב למשתמשי דרך.`
                },
                {
                    type: "crossroadQuestion",
                    question: "האם אתה יודע מהם הסימנים המחשידים?",
                    answers: {"כן" : "מכיר סימנים", "לא" : "לא מכיר סימנים"}
                }
            ], 
            "רכב": [
                {
                    type: "info", 
                    content: `1. 7 שעות שינה לפני נהיגה. \n
                    2. אין לנהוג תחת השפעת אלכוהול. \n
                    3. יש לנהוג בהתאם לתנאי מזג האויר. \n 
                    4. יש להימנע מהסחים במהלך הנהיגה: טלפון, מזון ועוד. \n
                    5. יש לשים לב למשתמשי דרך.`
                },
                {
                    type: "info",
                    content: `לא לשכוח את הדגשים לנסיעה בתחבורה ציבורית: \n
                    יש לעלות על תחבורה תקנית שמגיע ליעד הרצוי. \n
                    יש להישאר מדוגם במשך כל הנסיעה \n
                    יש לנוע רק עם אוזניה אחת. \n
                    יש לגלות ערנות ולחפש סימנים מחשידים שבהם ניזכר בהמשך.`
                },
                {
                    type: `manyChoices`,
                    question: `זוכרים את 3 הסיבות לאיסור על טרמפים? בחרו:`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["סכנה בחטיפת חיילים", "שיהיה מביך ברכב", "חוסר היכרות עם הנהג ושיקול הדעת בנהיגה", `אי עמידה בחוקי צה״ל שתגרור מענה משמעתי חמור`, "שיוריד אותי רחוק מהבית", "שהרכב יתקלקל בדרך"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans3`, `ans4`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: "crossroadQuestion",
                    question: "האם אתה יודע מהם הסימנים המחשידים?",
                    answers: {"כן" : "מכיר סימנים", "לא" : "לא מכיר סימנים"}
                }
            ], 
            "מכיר סימנים": [
                {
                    type: "info",
                    content: `אז בואו ניזכר בסימנים: \n
                    חמשת המ״מים: \n  מזג אוויר- ביגוד שאינו תואם למזג האוויר \n ממדים- ביגוד אינו תואם את מימדי התוקף \n
                    מסתור- ריבוי מקומות מסתור בביגוד \n מהודר/ מוזנח- לבוש מהודר שאינו תואם את הסביבה/ לבוש סמרטוטים \n משונה- הופעה אשר שונה מהסביבה \n`
                },
                {
                    type: `crossroadQuestion`,
                    question: `תבחר/י בתמונה בה מופיע אדם חשוד`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: {"../assets/images/questionsPics/exemple8.jpg": "חשוד", "../assets/images/questionsPics/exemple8.jpg": "לא חשוד"},// the legth will determine how many answers will apear
                },
            ], 
            "לא מכיר סימנים": [
                {
                    type: "info",
                    content: `חמשת המ״מים: \n  מזג אוויר- ביגוד שאינו תואם למזג האוויר \n ממדים- ביגוד אינו תואם את מימדי התוקף \n
                    מסתור- ריבוי מקומות מסתור בביגוד \n מהודר/ מוזנח- לבוש מהודר שאינו תואם את הסביבה/ לבוש סמרטוטים \n משונה- הופעה אשר שונה מהסביבה \n`
                },
                {
                    type: `crossroadQuestion`,
                    question: `תבחר/י בתמונה בה מופיע אדם חשוד`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: {"../assets/images/questionsPics/exemple8.jpg": "חשוד", "../assets/images/questionsPics/exemple8.jpg": "לא חשוד"},// the legth will determine how many answers will apear
                },
            ],
            "חשוד": [
                {
                    type: `manyChoices`,
                    question: `מה המם שהופכת את האדם לחשוד?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["מזג אוויר", "ממדים", "מסתור", `מהודר/ מוזנח`, "משונה"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`] // the legth will determine how many answers are reqwiered
                },
            ],
            "לא חשוד": [
                {
                    type: "info",
                    content: `הדמות שהופיעה חשודה מכיוון ש`
                }
            ]

        }
    },
    {
            pic: "../assets/images/questionsPics/example1.jpg",
            title: "אבטחת נשק",
            curretntQuestion: [0, "הקדמה"],
            status: "לא הותחל",
            startSubSubject: "הקדמה",
            content: {
                "הקדמה": [
                    {
                        type: "crossroadQuestion",
                        question: "יוצאים עם נשק הביתה?",
                        answers:  {"כן": "יציאה עם נשק", "לא": "נכסל"} //key = answer, value = subSubject to go to
                    }
                ],
                "יציאה עם נשק": [
                    {
                        type: `manyChoices`,
                        question: `האם עליי לקבל אישור ממפקד היחידה?`,
                        // recomended: no more than 16 answers, 8 if the are longer than one word
                        answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                        correctAns: [`ans1`], // the legth will determine how many answers are reqwiered
                        explain: `בשביל לצאת עם נשק הביתה נדרש אישור בדרגת אל״ם ומעלה.`
                    },
                    {
                        type: `manyChoices`,
                        question: `האם מותר להניח את הנשק מתחת לכיסא במהלך הנסיעה?`,
                        // recomended: no more than 16 answers, 8 if the are longer than one word
                        answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                        correctAns: [`ans2`], // the legth will determine how many answers are reqwiered
                        explain: `יש לשאת את הנשק עלי במהלך כל הנסיעה עם הקנה כלפי מטה.`
                    },
                    {
                        type: `manyChoices`,
                        question: `האם מותר להניח את הנשק מתחת לכיסא במהלך הנסיעה?`,
                        // recomended: no more than 16 answers, 8 if the are longer than one word
                        answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                        correctAns: [`ans2`], // the legth will determine how many answers are reqwiered
                        explain: `הנשק שאיתו יצאת הינו הנשק האישי שלך ואתה היחיד שאמון על בטחונו.`
                    },
                    {
                        type: `manyChoices`,
                        question: `אבטחת הנשק בבית מאחורי שני מנעולים והמחסנית בנפרד?`,
                        // recomended: no more than 16 answers, 8 if the are longer than one word
                        answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                        correctAns: [`ans1`], // the legth will determine how many answers are reqwiered
                        explain: `אבטחת הנשק בבית מאחורי שני מנעולים והמחסנית בנפרד הינה פקודה.`
                    },
                    {
                        type: `manyChoices`,
                        question: `האם חובה להפריד מכלול מהנשק ולהחביאו במקום אחר?`,
                        // recomended: no more than 16 answers, 8 if the are longer than one word
                        answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                        correctAns: [`ans1`], // the legth will determine how many answers are reqwiered
                        explain: `הפרדת מכלול מהנשק והחבאתו במקום אחר הינה פקודה.`
                    },
                    {
                        type: `manyChoices`,
                        question: `במידה ולא ניתן לאבטח את הנשק לפי הכללים אפקיד בתחנת משטרה צבאית?`,
                        // recomended: no more than 16 answers, 8 if the are longer than one word
                        answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                        correctAns: [`ans1`], // the legth will determine how many answers are reqwiered
                        explain: `אם נבצר ממך לאבטח את הנשק ע״פ הפקודות עליך להפקידו במקום צבאי המורשה לכך.`
                    },
                    {
                        type: `manyChoices`,
                        question: `האם מותר להשתמש בנשק לטובת עבודה אזרחית בסופש?`,
                        // recomended: no more than 16 answers, 8 if the are longer than one word
                        answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                        correctAns: [`ans2`], // the legth will determine how many answers are reqwiered
                        explain: `הנשק הינו רכוש צהל, ופעולה זו מהווה עבירה בציר הצבאי והן האזרחי.`
                    },
                ]
            }
        },
]

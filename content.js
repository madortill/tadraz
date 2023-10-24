const DATA = [
// nextSub is end when you want to end the chat
    {
        pic: "./assets/images/bus.svg",
        title: "בטיחות בדרכים",
        // curretntQuestion: [current question in sub-subject (number), current sub-subject, totalQuestionCounter]
        curretntQuestion: [0, "הקדמה"],
        status: "לא הותחל",
        startSubSubject: "הקדמה",
        content: {
            "הקדמה": [
                {
                    type: `crossroadQuestion`,
                    question: `איך מגיעים הביתה?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: { "תחבורה ציבורית (כולל שאטלים)": "תחבצ", "טרמפים": "טרמפים", "רכב פרטי": "רכב" },// the legth will determine how many answers will apear
                },
            ],
            'תחבצ': [
                {
                    type: "info",
                    info: `יש לעלות על תחבורה תקנית שמגיע ליעד הרצוי. <br>
                    יש להישאר מדוגם במשך כל הנסיעה. <br>
                    יש לנוע רק עם אוזניה אחת. <br>
                    יש לגלות ערנות ולחפש סימנים מחשידים שבהם ניזכר בהמשך.`
                },
                {
                    type: `crossroadQuestion`,
                    question: `זוכרים שאסור לעלות על טרמפים?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: { "כן": "איסור טרמפים", "לא": "איסור טרמפים" },
                },
            ],
            "טרמפים": [
                {
                    type: `crossroadQuestion`,
                    question: `זוכרים שאסור לעלות על טרמפים?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: { "כן": "איסור טרמפים טרמפ", "לא": "איסור טרמפים טרמפ" }
                }
            ],
            "איסור טרמפים": [
                {
                    type: `manyChoices`,
                    question: `זוכרים את 3 הסיבות לאיסור על טרמפים? בחרו:`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["סכנה בחטיפת חיילים", "חוסר היכרות עם הנהג ושיקול הדעת בנהיגה", `אי עמידה בחוקי צה״ל שתגרור מענה משמעתי חמור`, "שיהיה מביך ברכב", "שיוריד אותי רחוק מהבית", "שהרכב יתקלקל בדרך"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans3`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: "info",
                    info: `לא לשכוח את הדגשים לנסיעה ברכב פרטי: <br></br>
                    1. 7 שעות שינה לפני נהיגה. <br></br>
                    2. אין לנהוג תחת השפעת אלכוהול. <br></br>
                    3. יש לנהוג בהתאם לתנאי מזג האויר.<br></br>
                    4. יש להימנע מהסחים במהלך הנהיגה: טלפון, מזון ועוד. <br></br>
                    5. יש לשים לב למשתמשי דרך.`
                },
                {
                    type: "crossroadQuestion",
                    question: "האם אתה יודע מהם הסימנים המחשידים?",
                    answers: { "כן": "סימנים", "לא": "סימנים" }
                }
            ],
            "איסור טרמפים טרמפ": [
                {
                    type: `manyChoices`,
                    question: `זוכרים את 3 הסיבות לאיסור על טרמפים? בחרו:`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["סכנה בחטיפת חיילים", "חוסר היכרות עם הנהג ושיקול הדעת בנהיגה", `אי עמידה בחוקי צה״ל שתגרור מענה משמעתי חמור`, "שיהיה מביך ברכב", "שיוריד אותי רחוק מהבית", "שהרכב יתקלקל בדרך"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans3`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: "info",
                    info: `לא לשכוח את הדגשים לנסיעה בתחבורה ציבורית: <br></br>
                    יש לעלות על תחבורה תקנית שמגיע ליעד הרצוי. <br></br>
                    יש להישאר מדוגם במשך כל הנסיעה ולנוע רק עם אוזניה אחת.<br></br>
                    יש לגלות ערנות ולחפש סימנים מחשידים שבהם ניזכר בהמשך.`
                },
                {
                    type: "info",
                    info: `לא לשכוח גם את הדגשים לנסיעה ברכב פרטי: <br></br>
                    1. 7 שעות שינה לפני נהיגה. <br></br>
                    2. אין לנהוג תחת השפעת אלכוהול. <br></br>
                    3. יש לנהוג בהתאם לתנאי מזג האויר. <br></br> 
                    4. יש להימנע מהסחים במהלך הנהיגה: טלפון, מזון ועוד. <br></br>
                    5. יש לשים לב למשתמשי דרך.`
                },
                {
                    type: "crossroadQuestion",
                    question: "האם אתה יודע מהם הסימנים המחשידים?",
                    answers: { "כן": "סימנים", "לא": "סימנים" }
                }
            ],
            "רכב": [
                {
                    type: "info",
                    infp: `1. 7 שעות שינה לפני נהיגה. <br></br>
                    2. אין לנהוג תחת השפעת אלכוהול. <br></br>
                    3. יש לנהוג בהתאם לתנאי מזג האויר. <br></br> 
                    4. יש להימנע מהסחים במהלך הנהיגה: טלפון, מזון ועוד. <br></br>
                    5. יש לשים לב למשתמשי דרך.`
                },
                {
                    type: "info",
                    info: `לא לשכוח את הדגשים לנסיעה בתחבורה ציבורית: <br></br>
                    יש לעלות על תחבורה תקנית שמגיע ליעד הרצוי. <br></br>
                    יש להישאר מדוגם במשך כל הנסיעה <br></br>
                    יש לנוע רק עם אוזניה אחת. <br></br>
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
                    answers: { "כן": "סימנים", "לא": "סימנים" }
                }
            ],
            "סימנים": [
                {
                    type: "info",
                    info: `חמשת המ״מים: <br></br>  מזג אוויר- ביגוד שאינו תואם למזג האוויר <br></br> ממדים- ביגוד אינו תואם את מימדי התוקף <br></br>
                    מסתור- ריבוי מקומות מסתור בביגוד <br></br> מהודר/ מוזנח- לבוש מהודר שאינו תואם את הסביבה/ לבוש סמרטוטים <br></br> משונה- הופעה אשר שונה מהסביבה <br></br>`
                },
                {
                    type: `manyPics`,
                    question: "תוכלו לשלוח לי תמונה של אדם חשוד?",
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["./assets/images/questionsPics/suspect.png"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: `manyChoices`,
                    question: `מה הופך את האדם לחשוד?`,
                    nextSub: "end",
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["מזג אוויר", "ממדים", "מסתור", `מהודר/ מוזנח`, "משונה"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, 'ans3'] // the legth will determine how many answers are reqwiered
                },

            ],

        }
    },
    {
        pic: "./assets/images/guns.svg",
        title: "אבטחת נשק",
        curretntQuestion: [0, "הקדמה"],
        status: "לא הותחל",
        startSubSubject: "הקדמה",
        content: {
            "הקדמה": [
                {
                    type: "crossroadQuestion",
                    question: "יוצאים עם נשק הביתה?",
                    answers: { "כן": "יציאה עם נשק", "לא": "end" } //key = answer, value = subSubject to go to
                }
            ],
            "יציאה עם נשק": [
                {
                    type: "info",
                    info: "ענו על האמירות הבאות:"
                },
                {
                    type: `manyChoices`,
                    question: ` עליי לקבל אישור ממפקד היחידה.`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`], // the legth will determine how many answers are reqwiered
                    explain: `בשביל לצאת עם נשק הביתה נדרש אישור בדרגת אל״ם ומעלה.`
                },
                {
                    type: `manyChoices`,
                    question: "מותר לי להניח את הנשק מתחת לכיסא במהלך הנסיעה.",
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                    correctAns: [`ans2`], // the legth will determine how many answers are reqwiered
                    explain: `יש לשאת את הנשק עלי במהלך כל הנסיעה עם הקנה כלפי מטה.`
                },
                {
                    type: `manyChoices`,
                    question: "מותר לי למסור את הנשק שלי לחייל אחר.",
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                    correctAns: [`ans2`], // the legth will determine how many answers are reqwiered
                    explain: `הנשק שאיתו יצאת הינו הנשק האישי שלך ואתה היחיד שאמון על בטחונו.`
                },
                {
                    type: `manyChoices`,
                    question: `חייבים לאבטח את הנשק בבית מאחורי מנעול אחד ומחסנית בנפרד.`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                    correctAns: [`ans2`], // the legth will determine how many answers are reqwiered
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
                    question: `במידה ולא ניתן לאבטח את הנשק לפי הכללים אפקיד בתחנת משטרה צבאית.`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`], // the legth will determine how many answers are reqwiered
                    explain: `אם נבצר ממך לאבטח את הנשק ע״פ הפקודות עליך להפקידו במקום צבאי המורשה לכך.`
                },
                {
                    type: `manyChoices`,
                    question: `מותר לי להשתמש בנשק לטובת עבודה אזרחית בסופש.`,
                    nextSub: "end",
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["נכון", "לא נכון"],// the legth will determine how many answers will apear
                    correctAns: [`ans2`], // the legth will determine how many answers are reqwiered
                    explain: `הנשק הינו רכוש צהל, ופעולה זו מהווה עבירה בציר הצבאי והן האזרחי.`
                },
            ]
        }
    },
    {
        pic: "./assets/images/speaker.svg",
        title: 'נכס״ל',
        curretntQuestion: [0, "הקדמה"],
        status: "לא הותחל",
        startSubSubject: "הקדמה",
        content: {
            'הקדמה': [
                {
                    type: "crossroadQuestion",
                    question: "יודעים מהי הנחיית הזמינות בסופ״ש?",
                    answers: { "כן": "הסבר", "לא": "הסבר" } //key = answer, value = subSubject to go to
                },
            ],
            "הסבר": [
                {
                    type: "info",
                    info: "זמינות להפעלת נכס לאומי ע״י המפקדים"
                },
                {
                    type: "info",
                    info: "טלפון דלוק במהלך השבת למקרה של הקפצה"
                },
                {
                    type: "info",
                    info: "הכרת מספרי המפקדים והחמ״ל"
                },
                {
                    type: "crossroadQuestion",
                    question: "במידה ויש הקפצה במהלך הסופ״ש יש לך איך להגיע לבסיס?",
                    answers: { "כן": "נכסל", "לא": "נכסל" } //key = answer, value = subSubject to go to
                },
            ],
            "נכסל": [
                {
                    type: "info",
                    info: "יש לעדכן את המפקדים וזכור: לא עולים על טרמפים!"
                },
                {
                    type: "crossroadQuestion",
                    question: "פעילים ברשתות חברתיות?",
                    answers: { "פייסבוק": "בטחון מידע", "אינסטגרם": "בטחון מידע", "וואצאפ": "בטחון מידע", "גם וגם": "בטחון מידע", "אחר": "בטחון מידע" } //key = answer, value = subSubject to go to
                },
            ],
            "בטחון מידע": [
                {
                    type: "info",
                    info: " אין להעלות לרשתות החברתיות תוכן צבאי, לשוחח על נושאים צבאיים, לנקוב מיקומים ולמנות סד״כ ברשתות או במקומות אזרחיים.",
                    nextSub: "end"
                },
            ]

        }
    },
    {
        pic: "./assets/images/door.svg",
        title: 'פיקוד העורף',
        curretntQuestion: [0, "הקדמה"],
        status: "לא הותחל",
        startSubSubject: "הקדמה",
        content: {
            'הקדמה': [
                {
                    type: "info",
                    info: "צפו בסרטון הקצר שמסביר מהן הנחיות התגוננות מטילים:",
                },
                {
                    type: "info",
                    info: '<iframe width="260" height="145" src="https://www.youtube.com/embed/9BMH_58WOEI?si=oTt0Bx1gTISeyfhr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>',
                },
                {
                    type: "info",
                    info: "חשוב לדעת ולהכיר את מפת ההתגוננות הארצית: <a href='https://www.oref.org.il/12487-15896-he/Pakar.aspx'>לחצו כאן</a>",
                    nextSub: "end"
                },
            ],
        }
    },
]
 
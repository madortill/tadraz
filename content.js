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
                        question: "על מנת להיזהר בזמן החזרה הביתה, אתם יודעים לזהות את הסימנים המחשידים?",
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
                        question: "על מנת להזהר בזמן החזרה הביתה, אתם יודעים לזהות את הסימנים המחשידים?",
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
                        info: "הכרת מספרי המפקדים והחמ״ל",
                    },
                    {
                        type: "crossroadQuestion",
                        question: "שומרי שבת?",
                        answers: {"כן": "נהלים בשבת", "לא":"דוח1"}
                    }
                ],
                "דוח1": [
                    {
                        type: "info",
                        info: `עקב מלחמת חרבות ברזל נפתחה האפשרות להזין נכס״ל באפליקציית דוח 1.
                        ברגע שמופעל נכס״ל על כלל החיילים לדווח בדו״ח 1 בדיווחי חירום את מיקומם.`
                    },
                    {
                        type: "info",
                        info: `<b>פקודת הנכס״ל הינה פקודה צה״לית המאפשרת וידוא שלום חיילים במהלך השהות ביחידה ומחוצה לה במקרה חירום.</b>`,
                        nextSub: "end"
                    },
                ],
                "נהלים בשבת": [
                    {
                        type: "info",
                        info: "על הטלפון הלהיות על מצב צליל ועליך להיות במרחק בו אתה שומע אותו וזמין במשך כל השבת.",
                        nextSub: "דוח1"
                    }
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
        {
            pic: "./assets/images/bam.svg",
            title: 'הנחיות ב"ם',
            curretntQuestion: [0, "הקדמה"],
            status: "לא הותחל",
            startSubSubject: "הקדמה",
            content: {
                "הקדמה": [
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
                    },
                    {
                        type: "info",
                        info: "ענו על האמירות הבאות:"
                    },
                    {
                        type: `manyChoices`,
                        question: `אין לנקוב מיקומים ספציפיים וכמויות של חיילים`,
                        answers: ["נכון", "לא נכון"],
                        correctAns: [`ans1`],
                        explain: `אין לנקוב מיקומים ספציפיים וכמויות של חיילים`
                    },
                    {
                        type: `manyChoices`,
                        question: `כדאי לפרסם איזה גדודים נמצאים איתך בבסיס`,
                        answers: ["נכון", "לא נכון"],
                        correctAns: [`ans2`],
                        explain: `אין לנקוב בשמות של גדודים או יחידות`
                    },
                    {
                        type: `manyChoices`,
                        question: `על מנת לתקשר בין היחידות בשטח יש לפרסם טלפונים של חיילים מהשטח`,
                        answers: ["נכון", "לא נכון"],
                        correctAns: [`ans2`],
                        explain: `אין לפרסם טלפונים של חיילים מהשטח`
                    },
                    {
                        type: `manyChoices`,
                        question: `בשביל שידעו לאן לשלוח ציוד יש לפרסם את מיקומי הבסיסים בווצאפ`,
                        answers: ["נכון", "לא נכון"],
                        correctAns: [`ans2`],
                        explain: `אין להעביר מיקומים בווצאפ`
                    },
                    {
                        type: `manyChoices`,
                        question: `יש איסור להיכנס לקישורים שמגיעים מגורמים שאינם מאושרים`,
                        answers: ["נכון", "לא נכון"],
                        correctAns: [`ans1`],
                        explain: `אין להיכנס לקישורים שמגיעים מגורמים שאינם מאושרים`
                    },
                    {
                        type: `manyChoices`,
                        question: `כדי להעלות את המורל יש להזדהות ברשתות החברתיות בזיהוי צבאי`,
                        answers: ["נכון", "לא נכון"],
                        correctAns: [`ans2`],
                        explain: `אין להזדהות ברשתות החברתיות בזיהוי צבאי`
                    },
                    {
                        type: `manyChoices`,
                        question: `ישנו איסור מוחלט לפרסם מידע מסווג ותמונות ברשתות החברתיות`,
                        answers: ["נכון", "לא נכון"],
                        correctAns: [`ans1`],
                        explain: `אין לפרסם מידע מסווג ותמונות ברשתות החברתיות`,
                        nextSub: "end"
                    },
                ]
            }
        },
    ]
     
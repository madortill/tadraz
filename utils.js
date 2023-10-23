/* El
--------------------------------------------------------------
Description: create html elements */
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}

const scaleFontSize = (element, initialFont) => {
    element.style.fontSize = `${initialFont}em`
    let fontSize = Number(element.style.fontSize.replace("em", ""));
    while (element.scrollHeight > element.clientHeight) {
        element.style.fontSize = `${fontSize - 0.1}em`;
        fontSize = Number(element.style.fontSize.replace("em", ""));
    }
}

/* addSpace
--------------------------------------------------------------
Description: change hyphen to space */
const addSpace = (phrase) => {
    return phrase.replace(/_/g, ' ');
}

const removeSpaceAndStuff = (phrase) => {
   let result = phrase.match(/[\u0590-\u05fe]/g);
   return(result.join(''));
}

const restartTillphone = () => {
    location.reload()
}

const endTillphone = () => {
    window.close();
}

function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

const findAmountOfQuestions = (bigObj) => {
    let counter = 0;
    for (key of Object.keys(bigObj)) {
        for (item of bigObj[key]) {
            counter++;
        }
    }
    return counter;
}
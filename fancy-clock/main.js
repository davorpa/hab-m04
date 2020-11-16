'use strict';

+(function() {

    const i18n = {
        es: {
            date:   "Horario actual",
            year:   "Año",
            month:  "Mes",
            day:    "Día",
            hour:   "Hora",
            minute: "Minutos",
            second: "Segundos"
        },
        en: {
            date:   "Current time",
            year:   "Year",
            month:  "Month",
            day:    "Day",
            hour:   "Hour",
            minute: "Minutes",
            second: "Seconds"
        }
    }

/*
 * *************************
 *     UTIL FUNCTIONS
 * *************************
 */

/**
 * Genera un número entero entre `min` y `max`.
 * @param {number} min mínimo
 * @param {number} max máximo
 * @returns {number}
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Rellena una entrada dada a `n`-caracteres
 * usando la semilla proporcionada `c`.
 * @param {string|number} str
 * @param {number} n cantidad
 * @param {string} c
 * @returns {string}
 */
function leftPad(str, n = 2, c = "0") {
    str = String(str);
    c = String(c)
    return c.repeat(n / c.length - str.length) + str;
}

/**
 * Descompone la fecha actual en partes
 * @param {Date} [date=now]
 * @returns {Object}
 */
function getDateParts(date) {
    date = date || new Date();
    return {
        date:   date,
        year:   leftPad(date.getFullYear(), 4),
        month:  leftPad(date.getMonth() + 1),
        day:    leftPad(date.getDate()),
        hour:   leftPad(date.getHours()),
        minute: leftPad(date.getMinutes()),
        second: leftPad(date.getSeconds())
    };
}

function getCurrentLang() {
    let el = document.documentElement;
    let lang = (el && el.getAttribute("lang")) || "en";
    return lang;
}

function paintClock(dateParts) {
    const lang = getCurrentLang();
    const clock = document.querySelector('.clock');
    // seteamos el ISO time del elemento "time"
    clock.setAttribute("datetime", dateParts.date.toISOString());
    let clockCaption = clock.getAttribute("aria-labelledby");
    clockCaption && (clockCaption = document.getElementById(clockCaption));
    clockCaption && (clockCaption.innerText = i18n[lang].date);

    // recorremos todas las propiedades...
    for (const key of Object.keys(dateParts)) {
        if (['date'].indexOf(key) !== -1) continue;
        let value = dateParts[key];
        // cuando sea necesario formateamos a texto el mes
        (key === 'month') && (value = dateParts.date.toLocaleString(lang, { month: 'short' }));
        // ... y seteamos cada valor en su elemento HTML correspondiente
        const el = clock.querySelector(`.${key}`);
        el && (el.innerText = value);
        el && (el.setAttribute("aria-label", i18n[lang][key]));
    }
}

/**
 * Instala un background aleatorio en el elemento HTML `body`
 * @function paintBackground
 * @return {void}
 */
const paintBackground = (function(MAX) { // IIFE
    let n = randomInt(1, MAX);

    // precargamos imágenes
    for(let i = 1; i <= MAX; i++) {
        (new Image()).src = `background-${leftPad(i)}.jpg`;
    }

    // implementación del IIFE
    return function paintBackground() {
        const el = document.body;
        // si hemos llegado al último, reiniciamos...
        if (n > MAX) n = 1;

        // eliminamos todas las class "bg-NN"
        el.classList.forEach(function(cls, key, list){
            /^bg-\d+/g.test(cls) && list.remove(cls);
        });

        el.classList.add(`bg-${leftPad(n)}`);
        //el.style.backgroundImage = `url("background-${leftPad(n)}.jpg")`;

        // siguiente...
        n++;
    };
}(62)); // MAX = 62



/*
 * *************************
 *        MAIN RUN
 * *************************
 */

// paint inicial
paintClock(getDateParts());
// paint cada 1 segundo
const clockIntervalHandler = setInterval(function() {
    paintClock(getDateParts())
}, 1000);

// paint cada 3 segundos
const bgIntervalHandler = setInterval(paintBackground, 3000);



}());

'use strict';

+(function() {


/*
 * *************************
 *     UTIL FUNCTIONS
 * *************************
 */

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomFloat(min, max) {
    return (Math.random() * (max - min + 1)) + min;
};


function refresh() {

    document.body.style.backgroundColor =
            `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

    for(const box of boxes) {
        // lo ponemos al inicio porque afecta al bounding
        box.style.fontSize = `${randomFloat(2, 8)}rem`;
        box.style.width = `${randomFloat(4, 12)}rem`;
        box.style.height = `${randomFloat(4, 12)}rem`;

        // extraemos dimensiones
        const {width, height} = box.getBoundingClientRect();
        // viewport.dims - box.dims
        const top = randomInt(1, window.innerHeight - height);
        const left = randomInt(1, window.innerWidth - width);

        box.style.top = `${top}px`;
        box.style.left = `${left}px`;
        box.style.transitionDuration = `${randomFloat(1, 4)}s`;
        box.style.backgroundColor =
                `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)},${randomFloat(0,1)})`;
    }
}


/*
 * *************************
 *        MAIN RUN
 * *************************
 */


const boxes = document.querySelectorAll(".box");

// paint inicial
refresh();
// paint interval
const handler = setInterval(refresh, randomFloat(500, 2000));


}());

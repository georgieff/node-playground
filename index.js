// const asd = require('./check.js');
// asd();
// asd();
// require('./check.js');

const f = (time, a, b) => {
    if(time == 5000) {
        for(let i = 0; i< 9000000000; i++ ) {

        }
    }
    setTimeout(() => {
        console.log(a + b);
    }, time);
}

f(0, 2, 3);
f(5000, 5, 3);

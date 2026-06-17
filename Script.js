const phrases = [
    "Python Developer",
    "Automation Engineer",
    "API Builder",
    "Problem Solver"
];

let phrase = 0;
let letter = 0;

function type() {

    const target =
        document.getElementById("typed");

    target.textContent =
        phrases[phrase].slice(0, letter);

    letter++;

    if(letter >
       phrases[phrase].length){

        setTimeout(() => {

            letter = 0;
            phrase++;

            if(phrase >= phrases.length){
                phrase = 0;
            }

        },1500);
    }

    setTimeout(type,100);
}

type();

const btnno = document.getElementById("buttonno");

const moves = [
    "translate-y-10",
    "-translate-x-1",
    "-translate-y-10",
    "translate-x-10"
];

let step = 0;

btnno.addEventListener("mouseenter", () => {

    // remove previous move
    btnno.classList.remove(...moves);

    // add next move
    btnno.classList.add(moves[step]);

    // go to next step
    step++;

    // reset if at end (loop)
    if (step >= moves.length) {
        step = 0;
    }
});

btnyes = document.getElementById("buttonyes");

btnyes.addEventListener("click", () => {
    console.log("YAY");
    const yay = document.getElementById("yay")
    yay.classList.remove('hidden');

});


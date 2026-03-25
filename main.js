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


//spinner wheel 
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const segments = ["smooch it up", "dance together", "listen to music", "go for walk", "find a park", "go for drive"];
const colors = ["#fc9c86", "#9ffab0", "#8299ff", "#da58a2", "#f4d46b", "#d380f7"];

canvas.width = 250;
canvas.height = 250;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 180;

let angle = 0;
let spinning = false;

// draw wheel
function drawWheel() {
  const arc = (2 * Math.PI) / segments.length;

for (let i = 0; i < segments.length; i++) {
    const startAngle = angle + i * arc;
    const endAngle = startAngle + arc;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.stroke();

    // text
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle + arc / 2);
    ctx.fillStyle = "#fff";
    ctx.font = "12px Comic Relief";
    ctx.fillText(segments[i], radius / 5.5, 4);
    ctx.restore();
    }
}

// spin animation
function spinWheel() {
    if (spinning) return;
    spinning = true;

    let spinAngle = Math.random() * 10 + 20;
    let spinTime = 0;
    const spinDuration = 3000;

    function animate() {
    spinTime += 30;

    if (spinTime >= spinDuration) {
        spinning = false;
        return;
    }

    angle += spinAngle * Math.PI / 180;
    spinAngle *= 0.97; // slow down

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWheel();

    requestAnimationFrame(animate);
    }

    animate();
}

document.getElementById("spinBtn").addEventListener("click", spinWheel);

// initial draw
drawWheel();

let rn = Math.floor((Math.random() * 100) + 1);
let gn = prompt("Enter your guessed number ranging from 1 to 100:");
gn = Number.parseInt(gn);
let turn = 0;

do {
    if (gn < rn) {
        gn = prompt("The entered number is LOW. TRY AGAIN!!!!!");
        gn = Number.parseInt(gn);
        turn++;
    } else if (gn > rn) {
        gn = prompt("The entered number is HIGH. TRY AGAIN!!!!!");
        gn = Number.parseInt(gn);
        turn++;
    }
} while (gn != rn);

console.log(`Congratulations, the Number was ${rn} & you have guessed right in ${turn} turn(s)`);
console.log(`And your score is ${100 - turn}`);

var start = prompt("Enter start");
var end = prompt("Enter end");
var continueNumber = prompt("Enter continue number");
var breakNumber = prompt("Enter break number");

if (start !== null && end !== null && continueNumber !== null && breakNumber !== null) {

    for (var i = Number(start); i <= Number(end); i++) {

        if (i == Number(continueNumber)) {
            continue;
        }

        if (i == Number(breakNumber)) {
            break;
        }

        console.log(i);
    }
}
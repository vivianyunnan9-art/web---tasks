let degree = prompt("Enter your degree");

if (degree > 100 || degree<0) {
    console.log("invalid degree");
}
else if (degree > 90 && degree <= 100) {
    console.log("A")
}
else if (degree > 80 && degree <= 90) {
    console.log("B")
}
else if (degree > 70 && degree <= 80) {
    console.log("C")
}
else if (degree > 60 &&degree <=70) {
    console.log("F")
}
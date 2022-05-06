
function calculatoBMI(weight, height) {
    return weight / (height * height);
}


function bodyMassIndex() {
    const bmi = calculatebmi(70, 1.7)

    if (bmi < 18.5) {
        console.log("underweight")
    } else if (bmi < 24.9) {
        console.log("normal")
    } else if (bmi < 29.9) {
        console.log("overweight")
    } else if (bmi < 34.9) {
        console.log("obese")
    } else {
        console.log("extremely obese");
    }
}
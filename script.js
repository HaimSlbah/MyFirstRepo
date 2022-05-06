console.log("test");
let number = 10;
console.log(number / 3);


let book = "harry potter";

if (book == "rich dad poor dad ) {
    console.log(""
        book is rich dad poor dad ");
    }
    else if (book == "harry potter ii") {
        console.log("book harry potter ii");
    } else {
        console.log("not rich dad poor dad || harry potter ii")
    }


    switch (book) {
        case "rich dad poor dad":
            console.log("book is rich dad poor dad");
            break;

        case " harry potter ii":
            console.log("book harry potter ii");
            break;

        default:
            console.log("not rich dad poor dad || harry potter ii");
            break;
    }

    const MAX_HEIGHT = 200;
    const MIN_HEIGHT = 100;

    let height = 250;

    if (height >= 200) {
        console.log("you are not aiiow");
    } else if (height < 150) {
        console.log("sorry' not allow");
    } else {
        console.log("have f-u-n!!")
    }

    function greet() {
        console.log("my first function");

        let x = 10;
        console.log(x);
    }

    function sayHi(firstName, lastName) {
        console.log("hi" + firstName + " " + lastName);
    }

    sayHi("john", "weak");

    function sum(nameONE, numeTwo) {
        console.log(nameONE + numeTwo);
    }

    sum(10, 15);



    function doSomeThing() {
        return 10;
    }

    let result = doSomeThing();

    console.log(result);

    function graterThenTen(number) {
        if (number > 10) {
            return true;
        }

        return false;
    }

    console.log(graterThenTen(15))

    //בדרך קצרה עכשיו נכתוב את זה

    function graterThenTen(number) {
        return number > 10 ? true : false;
    }

    console.log(graterThenTen(8))

    function calculatoBMI(weight, height) {
        return weight / (height * height);
    }

    console.log(calculatoBMI(80, 1.6));

    function normal() {

    }

    const arrowNormal = () => {
        this
    }

    function bodyMassIndex() {
        const bmi = calculatebmi(70, 1.7)
        
        if (bmi < 18.5) {
            console. log("underweight")
        } else if (bmi < 24.9) {
            console. log("normal")
        } else if (bmi < 29.9) {
            console. log("overweight")
        } else if (bmi <34.9) {
            console. log("obese")
        } else {
            console. log("extremely obese");
        }
    }
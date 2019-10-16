/*
//declare the array 
var rainbowColors = [];

//inserting 
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green", "blue", "indigo", "violet");

//doing some print statments
console.log(rainbowColors.toString());
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors.indexOf("blue"));

//

twoColors = rainbowColors.slice(1, 3);
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2, 2);// we can use indexof(2) instaed of 2 
nums.splice(4, 1);
console.log(nums.toString());

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];


console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[arrOfArrs.length - 1][arrOfArrs[arrOfArrs.length - 1].length - 1]);


var myFav = ["ImaginDragouns", "", "", ""];

for (let i = 0; i < myFav.length; i++) {
    console.log(`My #${i} choice, ` + myFav[i]);
}

//Print every number from 0 to 10
for (let index = 0; index <= 10; index++) {
    console.log(index);
}
//Print every number from 4 to -16
for (let index = 4; index >= -16; index--) {
    console.log(index);
}

// Print every fifth number from 8 to 41
for (let index = 8; index <= 41; index += 5) {
    console.log(index);
}
// The classic Fizzbuzz Program
for (let index = 1; index <= 100; index++) {
    if (index % 3 == 0) {
        console.log("Fizz");
    }
    if (index % 5 == 0) {
        console.log("Buzz");
    }
    if (index % 5 == 0) {
        console.log("Fizzbuzz");
    }
}
//The even/odd reporter
for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        console.log(index + " is even");
    }
    else {
        console.log(index + " is odd");
    }
}
//Multiplication Tables
for (let index = 0; index <= 10; index++) {
    console.log(index * 9);
}
//The Grade Assigner
for (let index = 60; index <= 100; index++) {
    console.log(`For ${index} you got ${GradeAssigner(index)}`);

}
function GradeAssigner(grade) {
    if (grade >= 90) return "A";
    else if (grade >= 80) return "B";
    else if (grade >= 70) return "C";
    else if (grade >= 60) return "D";
    else return "F";
}
// golf

//warmup D5
console.log(countPositiveSumNegitive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositiveSumNegitive());

function countPositiveSumNegitive(list) {
    if (list == null || list.length==0) return [];

    var negitive = 0, counter = 0;

    for (let element of list) {
        if (element < 0)
            negitive += element;
        else
            counter++;
    }
    return [counter, negitive];
}

*/
//hopies 

let myInfo = {
    name: "Nora",
    age: 23,
    hobbies: ['programing', 'basketball', 'cooking'],
    lastname: "Alkhunifer",
    fullname: function () {
        console.log("Nora Alkhunifer")
    }
}
myInfo.fullname();
for (const key in myInfo) {
    if (key == 'hobbies') {
        var result = "";
        myInfo.hobbies.forEach(function (element) {
            result += element + ' - ';
        })
        console.log(key + ': ' + result);
    } else {
        console.log(key + ': ' + myInfo[key]); //refers to value
    }
}
//Exercises 

var Car = {
    Description: "Our app manages car sales.",
    make: "",
    model: "dd",
    year: 2019,
    drive: function () {
        return true;
    },
    brake: function () {
        return true;
    },
    park: function () {
        return true;
    }
}

let greatestSumMulti = function () {
    var greatest = 0;
    var matrix = [
        [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 00, 07, 78, 52, 12, 50, 77, 91, 08],
        [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 00, 98, 43, 69, 48, 04, 56, 62, 00],
        [81, 49, 31, 73, 55, 79, 14, 29, 03, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
        [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
        [22, 31, 16, 71, 51, 02, 06, 09, 41, 92, 36, 04, 22, 40, 40, 28, 66, 33, 13, 80],
        [24, 47, 32, 60, 09, 03, 05, 02, 44, 75, 33, 53, 08, 36, 04, 20, 35, 17, 12, 50],
        [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 00, 59, 54, 70, 66, 18, 38, 04, 17],
        [67, 26, 20, 68, 02, 62, 12, 20, 05, 63, 94, 39, 03, 08, 40, 19, 66, 49, 04, 21],
        [04, 55, 58, 05, 66, 73, 09, 26, 07, 07, 08, 08, 06, 83, 14, 88, 34, 89, 63, 72],
        [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 00, 00, 61, 33, 97, 34, 31, 33, 95],
        [08, 17, 53, 28, 02, 05, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
        [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
        [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
        [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 00, 86, 52, 17, 77, 04, 89, 55, 40],
        [04, 52, 08, 83, 97, 35, 09, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
        [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
        [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
        [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
        [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
        [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48],
    ];

    for (const key in matrix) {
        var sum = 0;
        for (var i = 0; i < matrix[key].length; i++) {
            sum += matrix[key][i]
        }
        if (greatest < sum) {
            greatest = sum;
        }
    }
    return greatest;

}
console.log(greatestSumMulti());


// creating array of bookes objects and printing there titles
var readingList = [
    {
        title: "ship",
        auther: "Agatha",
        alreadyRead: false
    },
    {
        title: "desert",
        auther: "d",
        alreadyRead: true
    }
]
for (const key in readingList) {
    console.log(`${readingList[key].title} by ${readingList[key].auther}`);
}


/*
// recipe cards
var recipes = {
    Brownies: {
        title: "Brownies",
        servings: 10,
        ingredients: ['flour', '2 eggs', 'coco powder', 'butter', 'suger']
    },
    cookies: {
        title: "cookies",
        servings: 20,
        ingredients: ['flour', '2 eggs', 'coco powder', 'butter', 'suger']
    }
}

for (const recipe in recipes) {
    console.log((recipe.title).concat("\r\n") + "Serves: " +
        recipe.servings.join("\r\n") +
        "Ingredients:".join("\r\n") +
        recipe.ingredients.forEach(element => {
            element.join("\r\n")
        }));
    // recipes[recipe].ingredients.join("\r\n")

}


"".concat("kk");*/

//('\r\n')



//title(a string), duration(a number), and stars(an array of strings).



var codeMorse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
};

var firstWord = "ebere is a nice guy but can be a pain sometimes so deal with it";
var secondWord = "we love javascript";
var thirdWord = "We hate this But lOve javascript";

function encoding(word) {

    var encreptedWord = "";
    for (var i = 0; i < word.length; i++) {
        var letter = word.charAt(i);
        if (letter == ' ' ||
            (letter == letter.toUpperCase()) ||
            !isNaN(letter)) continue;

        encreptedWord += codeMorse[letter];

    }

    return encreptedWord;
}
function decoding(sentence) {


    var listOfwords = sentence.split("  ");
    var decreptedWord = "";
    for (var i = 0; i < listOfwords.length; i++) {
        var words = listOfwords[i].split();
        for (var j = 0; j < words.length; j++) {
            decreptedWord += Object.keys(words[j]);
        }

    }

    return decreptedWord;
}
console.log(encoding(firstWord) + "\r\n");
console.log(encoding(secondWord) + "\r\n");
console.log(encoding(thirdWord) + "\r\n");

console.log(encoding(thirdWord) + "\r\n");
console.log(decoding("... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .  -.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-  - .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --.  ...."));

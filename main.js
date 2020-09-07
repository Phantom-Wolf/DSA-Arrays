const Array = require("./Array");

function main() {
	Array.SIZE_RATIO = 3;

	// Create an instance of the Array class
	let arr = new Array();

	// Add an item to the array
	console.log(arr);

	arr.push("tauhida");

	console.log(arr);
}

main();


function URLify(string) {
	const arr = string.split("");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === " ") {
			arr[i] = "%20";
		}
	}
	return arr.join("");
}

// URLify(testString);

function removeCharacters(string) {
	const regexFilter = /[aeiouAEIOU]/gi;

    console.log(string);
    
    newString = string.replace(regexFilter, "")
    console.log(newString)

	return newString;
}
testString = "Battle of the Vowels: Hawaii vs. Grozny";
removeCharacters(testString);


function productsArray(arr) {
    let result = []

    arr.array.forEach(numb => {
        let product = 1
        for ( let el of arr) {
            if (el !== numb) {
                product *= el
            }
        }
        result.push(product)

    });
    return result

    
}


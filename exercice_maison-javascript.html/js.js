//alert('hi');

/* const string = " Hello les gens";
console.log(string.split());

document.write(string.split()); */

/*  const array = ['Hello', 'les', 'gens'];
console.log(array);
console.log(array.reverse().join());  */

/*function reverseString(str){
    console.log(str.split("").reverse().join(''));
}

const string = 'Hello les gens';
reverseString(string); */


/* function repeatString(str, num) {
    let string = '';
    for(let i = 0; i < num; i++){
        string += str;
}
console.log(string);
} 
repeatString('Hello les gens', 5); */



function repeatString(str, num) {
    console.log(str.repeat(5));
}
repeatString('Hello les gens', 5);

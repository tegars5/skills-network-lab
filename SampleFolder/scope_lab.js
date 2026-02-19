// Global scope
var globalVar = "Saya adalah variabel global";
let globalLet = "Saya juga global, tetapi dibatasi dengan let";
const globalConst = "Saya adalah konstanta global";


{
// Block scope
var blockVar = "Saya adalah var yang dibatasi blok";
let blockLet = "Saya adalah let yang dibatasi blok";
const blockConst = "Saya adalah const yang dibatasi blok";
}

// Lingkup global
console.log(globalVar); // Output: "Saya adalah variabel global"
console.log(globalLet); // Output: "Saya juga global, tetapi terikat dengan let"
console.log(globalConst); // Output: "Saya adalah konstanta global"
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "Saya adalah variabel yang memiliki ruang lingkup blok";
    let functionLet = "Saya adalah let yang memiliki ruang lingkup blok";
    const functionConst = "Saya adalah const yang memiliki ruang lingkup blok";
    }
    show();
    
    console.log(functionVar); // Menghasilkan ReferenceError
    console.log(functionLet); // Menghasilkan ReferenceError
    console.log(functionConst); // Menghasilkan ReferenceError
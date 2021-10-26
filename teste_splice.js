let tabs = ["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"];

//console.log(tabs.splice(0, 2)); //[gmail, inbox]
// console.log(tabs.splice(3)); //[docs, freecodecamp]
let aux = tabs.filter((tab) => tab != tabs[2]);
console.log(aux);

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
    var result=null;
    for(i in contacts){
        if(contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)){
            result = contacts[i][prop]
        }else if (contacts[i].firstName == name && !contacts[i].hasOwnProperty(prop)){
            result = 'No such property'
        }
    }
    

    return result ? result : 'No such contact'
  // Only change code above this line
}

console.log(lookUpProfile("Kristian", "likes"));
console.log(lookUpProfile("Sherlock", "likes"))

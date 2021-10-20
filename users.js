const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }


function countOnline(usersObj) {
    // Only change code below this line
    var activeUsr = 0
    for (let user in usersObj){
        
      if(usersObj[user]['online']){
        activeUsr+=1
      }
    }
    return activeUsr
    // Only change code above this line
  }

console.log(countOnline(users))
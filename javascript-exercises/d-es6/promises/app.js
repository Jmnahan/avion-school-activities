const userData = [
  { firstName: "Juan",
  age: 24,
  email: "somejuan@gmail.com"
  },
  {
    firstName: "John",
    age: 34,
    email: "somejohn@gmail.com"
  }
]

function findUserData(firstName) {
  console.log("Accessing user data");
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const userName = userData.find(userName => userName.firstName === firstName)
      if(userName) {
        resolve(userName);
      } else {
        reject("No user data");
      }
    }, 3000) 
  })  
}

findUserData("Juan")
.then((userName) => {
  console.log(userName);
})
.catch((error) => console.log(error));

findUserData("Jun")
.then((userName) => {
  console.log(userName);
})
.catch((error) => console.log(error));
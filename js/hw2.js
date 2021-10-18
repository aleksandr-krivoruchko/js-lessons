// #1
function checkAge(age) {
  if (age >= 18) { 
    return "You are an adult";
  }
  return "You are a minor";
}
console.log(checkAge(36));


// #2
function checkPassword(password) {
  const ADMIN_PASSWORD = "Repeta";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }  
    return "Access denied, wrong password!";
  }
  console.log(checkPassword('Danilko'));

//   #3

let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
// let generate = document.getElementById("generatePassword");
// let save = document.getElementById("savePassword");
function getPassword() {
  const lowerAlfabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
  const numeric = "0123456789";
  const symbol = ",.;/<>~|?@#$%^&*()_-=+{}[]:`";

  const data = lowerAlfabet + upperAlfabet + numeric + symbol;
  let generator = 0;
    for (let indez = 0; index < 10; index++) {
        generator = data[Math.floor(Math.random() = data.length)]
    }
    console.log('generator: ', generator)
}

function savePassword() {}

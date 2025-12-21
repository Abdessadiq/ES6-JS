// Anonymos Fonction n'a pas du nom
/* function(){} */

// on met const pour ne pas changer le contenu de la fonction par erreur..
const nameOfFunction = function () {};
// JS ES 5-
const sayHello = function (firstName, lastName) {
  return "Hello, " + firstName + " " + lastName;
};

/* On change cette fonctionne en Arrow Fonction
    -> Supprimer function Keyword..
    ->  mettre fat Arrow (=>) après les parenthése
    -> Si on a une seule ligne en supprime {}
    --> La fonctionne devient --->
    const sayHello = (firstName, LastName) =>  "Hello, " + firstName + " " + lastName;
*/
//JS ES6+
const sayHelloArrow = (fN, lN) => "Hello, " + fN + " " + lN;

console.log(sayHello("abdessadiq", "Baba hamou"));
console.log(sayHelloArrow("Brahim", "Baba hamou"));
// JS ES5-
const getFullName = function (fullName) {
  return "Hey, " + fullName;
};
console.log(getFullName("Abdo BHM"));
// JS ES6+ Arrow Function
const getFullNameArrow = (fullName) => "Hello, " + fullName;
console.log(getFullNameArrow("Abdou Bhm"));

// JS ES5-
const sayHey = function () {
  return "Hey";
};

// JS ES6+
const sayHeyArrow = () => "Hey!";
console.log(sayHeyArrow());

// ES5-  - une méthode pour récupérer un objet
const getInfo = function () {
  return {
    age: 12,
    fullN: "Abdessadiq BHM",
  };
};
console.log(getInfo());

// ES6+
const getInfoArrow = () => ({
  age: 12,
  fullN: "Abdessadiq BHM",
});

console.log(getInfoArrow());

//- Variable Scope and Hoisting :
//   - var Keyword
//   - what is Scope ?
//   - Global vs Local Variable
//   - Function-Scoped vs Block-Scoped
//   - Hoisting

/* dans le fichier js (dans Global Scops on peut accéder à la valeur ..) 
    les variable créer dans global scope on peut y accéder dans n'importe autres scope
*/
var myName = "Abdessadiq bhm";
console.log(myName);
// var number = 13;

// on a créer un autre scope
function getNumber() {
  var number = 12;
  return number;
}
// console.log(number); // number is not defined.. c'est à dire on ne peut pas accéder
// à la valeur parce que elle est déclarer dans le scope..
// Dons Scope c'est un  bloc qu'on met des variable et qu'on peut pas y accéder dehors..

// console.log(number2); //Undefined.. - le varible exite mais n'a pas du valeur on ne l'a pas donné valeur
var number2 = 44;

if (true) {
  var num = 99;
}

// il affiche la valeur 99 alors que on est aussi dans un bloc Scope if..
// Pourquoi : Lorsque on a déclarer une variable dans une fontion puis l'afficher en dehors
// il nous affiche is not defined on parle de Function-Scoped et dans notre cas il affiche bien
// La valeur on parle de Bloc-Scoped le problème dans keyword var : la régler va être respecter si
// On a met let par exemple..
// Var keywork (ES5) --> Function-Scoped - Let/Const --> Bloc-Scoped
console.log(num);

//   - Hoisting
console.log(nameY); // affiche undefined : c'est à dire que javascript compilet a trouvé la
// la variable mais comme si il n'a pas du valeur le js compiler prend tout les variable déclarer et
// les met en haut du fichier js (C'est le Hoisting )
var nameY = "bhm";

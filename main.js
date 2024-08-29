console.log("MDN la référence de Javascript!".length); // la propriété length donne le nombre de caractère
console.log("MDN la référence de Javascript!".charAt(2)); // la methode charAt() donne la position du caractère 
console.log("MDN la référence de Javascript!".indexOf("de"));//La méthode indexOf() donne l'index de la première occurrence d'un tableau ou dans une chaîne de caractères
console.log("MDN la référence de Javascript!".split(' '));// La méthode split() transforme une chaine de caractère en tableau
console.log("MDN la référence de Javascript!".substr(4));// La méthode substr() extrait une chaine de caractère à une position ** obsolète **
console.log("MDN la référence de Javascript!".substr(4,12));// La méthode substr() extrait une chaine de caractère à une position et le nombre de caractere ** obsolète **
console.log("MDN la référence de Javascript!".slice(4,16));// La méthode slice() extrait une chaine de caractère à une position de depart et un point de fin
console.log("MDN la référence de Javascript!".toUpperCase());// La méthode toUpperCase() met en majuscule une chaine

// Ne pas employer le constructeur String()!
let s1 = "MDN";
let s2 = new String("MDN");
console.log(s1 == s2);
console.log(s1 === s2);
console.log(typeof s1); // string (type primitif)
console.log(typeof s2); // object (instance de String)


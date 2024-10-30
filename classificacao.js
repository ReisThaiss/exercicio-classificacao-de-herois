const nome = "Thais";
const xp = 7000;

if (xp <= 1000) {
    console.log("O Herói de nome " + nome + " está no nível de ferro");
} 
else if (xp > 1000 && xp <= 2000) {
    console.log("O Herói de nome " + nome + " está no nível de bronze");
} 
else if (xp > 2000 && xp <= 5000) {
    console.log("O Herói de nome " + nome + " está no nível de prata");
} 
else if (xp > 5000 && xp <= 7000) {
    console.log("O Herói de nome " + nome + " está no nível de ouro");
} 
else if (xp > 7000 && xp <= 8000) {
    console.log("O Herói de nome " + nome + " está no nível de platina");
} 
else if (xp > 8000 && xp <= 9000) {
    console.log("O Herói de nome " + nome + " está no nível de ascendente");
} 
else if (xp > 9000 && xp < 10000) {
    console.log("O Herói de nome " + nome + " está no nível de imortal");
} 
else if (xp >= 10000) {
    console.log("O Herói de nome " + nome + " está no nível de radiante");
} 
else {
    console.log("Dados inválidos");
}

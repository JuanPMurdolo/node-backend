const nombre = "Deadpool";
const real = "Wade Wilson";

const normal = nombre + ' ' + real;
//res = Deadpool Wade Wilson
//const template = `Juan Murdolo`;
//res = Juan Murdolo
//const template = `${1 + 1} Murdolo`;
//res = 2 Murdolo porque entre ${} puede ir una sintaxis js tipica
const template = `${nombre} ${real}`
//res = Deadpool Wade Wilson

console.log(normal);    //Deadpool Wade Wilson
console.log(template); //Deadpool Wade Wilson
console.log(normal === template) //truea
const html = `
<h1>Hola<h1>
<p>Mundo</p>
`;
console.log(html) 
/* 
<h1>Hola<h1>
<p>Mundo</p>
*/
//Se guarda el salto de linea, si se usan los ``
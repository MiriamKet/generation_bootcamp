alert('phoo');
/*ALGUNAS COSAS QUE PODEMOS HACER CON DOM*/
console.log(window.document);
console.log(document);
console.log(document.head); //regresa el head del documento 
console.log(document.body); //regresa el body
console.log(document.documentElement); //regresa todo el html
console.log(document.doctype);
console.log(document.charset);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets);//regresa los css
console.log(document.scripts);//regresa las etiquetas scripts
console.log(document.getSelection().toString());
setTimeout (()=> {
    console.log(document.getSelection().toString());
}, 3000);
document.write('Hola mango desde document write');
document.write('<h2>Hola mango desde document write</h2>');//mala practica, se agrega texto a un pagna en vivo


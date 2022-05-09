const { Module } = require("module");

const palindrome = (string) => {
/*se agrega la linea de if para que no se rompa el programa*/
    if(typeof string === 'undefined')return;
    
    return string
            .split('')
            .reverse()
            .join('');
}

const average = array => {
   if(typeof array === 'undefined')return;
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

/*permite exportar elementos de otros documentos para ser usados*/
/*exportar*/

module.exports ={
    palindrome : palindrome,
    average : average
}
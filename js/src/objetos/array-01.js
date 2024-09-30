const frutas = ['maçã', 'banana', 'laranja'];
console.table(frutas);

console.log(frutas[1]);
console.log('length:', frutas.length);

//adiociona o valor no fim da lista
frutas.push('uva');
console.log('push:', frutas);

//exclui o ultimo elemento da lista
console.log('pop:', frutas.pop());
console.log(frutas);

//adiciona no indice '0' o valor na lista
frutas.unshift('manga');
console.log('unshift:', frutas);

//exclui o valor do indice '0' da lista
console.log('shift:', frutas.shift());
console.log(frutas);

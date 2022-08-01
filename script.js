//preciso dividir em

const objects = [
    { data: 1, empresa: "F", pago: "0" },
    { data: 1, empresa: "A", pago: "1" },
    { data: 2, empresa: "C", pago: "1" },
];

//construir primeiro todas as categorias existentes
const empresa = [];
for (let obj of objects){ 
    if (!empresa.includes(obj.empresa)){
        empresa.push(obj.empresa);
    }
}

//agrupar os valores para as series com reduce
const series = objects.reduce((acc, val) => {
    let index = acc.map((o) => o.pago).indexOf(val.pago); //posicao do fem/masc
    let categoryIndex = empresa.indexOf(val.empresa); //posicao da categoria

    if (index === -1){ //se não existe 
        let newSeries = {
            pago: val.pago,
            data: new Array(empresa.length).fill(0)
        }; //novo objeto para fem/masc já com um array de data todo a zeros
        
        //coloca o valor na posição correspondente à categoria
        newSeries.data[categoryIndex] = val.data; 
        acc.push(newSeries); //e adiciona o novo objeto à serie
    }
    else { 
        acc[index].data[categoryIndex] = val.data; //troca só o valor na data
    }

    return acc;
}, []); //inicia o reduce com array vazio

console.log(series, empresa);

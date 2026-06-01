const clientes = require("./cliente.json");

function ordenar(lista,propriedades){
            const resultado = lista.sort((a, b) => {
                if (a[propriedade] < b [propriedades]){
                    return -1;
                }
                if (a[propriedade] < b [propriedades]){
                    return 1;
                }
                return 0;
            });
            return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);
                
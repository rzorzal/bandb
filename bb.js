function geraCiclo(caminho,no){
	for(c in caminho){
		if(caminho[c] == no){
			return true;
		}
	}
	return false;
}

function branchAndBound(graph,sai,chega){
    	var caminhos = [];
    	caminhos.push({caminho: [sai], custo: 0});

		console.log("Novo Caminho Adicionado: ");
		console.log({caminho: [sai], custo: 0});
		console.log("\n\n");

    	while(!caminhos.some( (curr) => curr.caminho.indexOf(chega) != -1 ) && caminhos.length > 0){
    		//Pego o primeiro caminho da fila
    		var caminhoInicio = caminhos[0];
    		//Retiro da fila
    		caminhos = caminhos.slice(1);
    		//Pego o ultimo elemento do caminho para estender seus filhos
    		var ultimoElemento = caminhoInicio.caminho[caminhoInicio.caminho.length - 1];
    		//Adicionando todos os filhos que não fazem ciclo
    		for(var i in graph[ultimoElemento]){
    			//Se não faz ciclo e é filho, adiciona o novo caminho a fila
    			if(graph[ultimoElemento][i] != undefined && graph[ultimoElemento][i] != "" && !caminhoInicio.caminho.some( (curr) => curr == i )){
    				var novoCaminho = JSON.parse(JSON.stringify(caminhoInicio));
    				novoCaminho.caminho.push(i);
    				novoCaminho.custo = parseInt(novoCaminho.custo) + parseInt(graph[ultimoElemento][i]);
    				caminhos.push(novoCaminho);
    				console.log("Novo Caminho Adicionado: ");
    				console.log(novoCaminho);
    				console.log("\n\n");

    			}
    		}
    		//Ordenando segundo o custo acumulado
    		caminhos.sort( (a,b) => a.custo-b.custo);
    		console.log("Caminhos Ordenados:");
    		console.log(caminhos);
    		console.log("\n\n");
    	}
    	return caminhos;

 }

grafo = {
		S:{
			S:"",
			A: 3,
			B:"",
			C:"",
			D:4,
			E:"",
			F:"",
			G:"",
		},
		A:{
			S:3,
			A:"",
			B:4,
			C:"",
			D:5,
			E:"",
			F:"",
			G:"",
		},
		B:{
			S:"",
			A: 4,
			B:"",
			C:4,
			D:"",
			E:5,
			F:"",
			G:"",
		},
		C:{
			S:"",
			A:"",
			B:4,
			C:"",
			D:"",
			E:"",
			F:"",
			G:"",
		},
		D:{
			S:4,
			A: 5,
			B:"",
			C:"",
			D:"",
			E:2,
			F:"",
			G:"",
		},
		E:{
			S:"",
			A:"",
			B:5,
			C:"",
			D:2,
			E:"",
			F:4,
			G:"",
		},
		F:{
			S:"",
			A:"",
			B:"",
			C:"",
			D:"",
			E:"",
			F:4,
			G:3,
		},
		G:{
			S:"",
			A:"",
			B:"",
			C:"",
			D:"",
			E:"",
			F:3,
			G:"",
		},
};

console.log(grafo);
console.log("\n\n");

 branchAndBound(grafo,'S','G');

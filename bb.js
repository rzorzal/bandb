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
    			if(graph[ultimoElemento][i] != undefined && graph[ultimoElemento][i] != "" && !geraCiclo(caminhoInicio.caminho,i)){
    				var novoCaminho = Object.assign({}, caminhoInicio);
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
 
 branchAndBound(JSON.parse('{"1":{"1":"","1092":"","2192":"","2634":"","3024":"4","3864":"","4512":"","7223":"3"},"1092":{"1":"","1092":"","2192":"4","2634":"","3024":"","3864":"","4512":"5","7223":"4"},"2192":{"1":"","1092":"4","2192":"","2634":"","3024":"","3864":"","4512":"","7223":""},"2634":{"1":"","1092":"","2192":"","2634":"","3024":"","3864":"3","4512":"4","7223":""},"3024":{"1":"4","1092":"","2192":"","2634":"","3024":"","3864":"","4512":"2","7223":"5"},"3864":{"1":"","1092":"","2192":"","2634":"3","3024":"","3864":"","4512":"","7223":""},"4512":{"1":"","1092":"5","2192":"","2634":"4","3024":"2","3864":"","4512":"","7223":""},"7223":{"1":"3","1092":"4","2192":"","2634":"","3024":"5","3864":"","4512":"","7223":""}}'),1,7223);

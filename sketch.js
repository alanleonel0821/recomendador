function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
    if (idade >= 10) {
      if (idade >= 14) {
        return "O menino que descobriu o vento";
      } else {
        if (idade >= 12) {
          if(gostaDeFantasia || gostaDeAventura) {
            return "Homem aranha: no aranhaverso";          
          } else{
           return "Ladrões de bicicleta";
          }
        } else {
          if (gostaDeFantasia) {
            return "As aventuras de pi";
          } else {
            return "Depois da chuva";
          }
        }
      }
    } else {
      if (gostaDeFantasia) {
        return "A viagem de chihiro";
      } else {
        return "O feitiço do tempo";
      }
    }
  }
  
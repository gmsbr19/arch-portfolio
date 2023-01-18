export const projects = []

const ggB = {
    id: 1,
    label: "Golden Gate Bridge",
    category: "arq",
    imgs: ["src/assets/imgs/goldenGate/goldenGate1.jpg", "src/assets/imgs/goldenGate/goldenGate2.jpg", "src/assets/imgs/goldenGate/goldenGate3.jpg"],
    text: "A Golden Gate Bridge (em português: Ponte do Portão Dourado) é uma ponte localizada no estado da Califórnia, nos Estados Unidos, que liga a cidade de São Francisco até Sausalito, na região metropolitana de São Francisco, sobre o estreito de Golden Gate.\nA ponte é o principal cartão postal da cidade, uma das mais conhecidas construções dos Estados Unidos, e é considerada uma das Sete Maravilhas do Mundo Moderno pela Sociedade Americana de Engenheiros Civis. A Ponte Golden Gate, em São Francisco, Califórnia também é palco de mais de 1 500 suicídios, e é o lugar onde as pessoas cometem mais suicídios no mundo."
}

const bjk = {
    id: 2,
    label: "Burj Khalifa",
    category: "arq",
    imgs: ["src/assets/imgs/burjKhalifa/burj1.jpg", "src/assets/imgs/burjKhalifa/burj2.jpg", "src/assets/imgs/burjKhalifa/burj3.jpg"],
    text: "Burj Khalifa Bin Zayid (em árabe: برج خليفة; \"Torre do Khalifa\"), anteriormente conhecido como Burj Dubai, é um arranha-céu localizado em Dubai, nos Emirados Árabes Unidos, sendo a mais alta estrutura e, consequentemente, o maior arranha-céu já construído pelo ser humano, com 828 metros de altura e 160 andares. Sua construção começou em 21 de setembro de 2004 e foi inaugurado no dia 4 de janeiro de 2010. Foi rebatizado devido ao empréstimo feito por Khalifa bin Zayed al Nahyan, xeque do emirado de Abu Dhabi, depois que este emprestou dez bilhões de dólares para evitar que o emirado de Dubai desse um calote em investidores de uma de suas principais companhias, a Dubai World.\nO edifício faz parte de um complexo comercial e residencial de dois quilômetros quadrados de área chamado Downtown Dubai, localizado ao lado das duas principais avenidas da cidade de Dubai, a Sheikh Zayed Road e a Financial Centre Road (anteriormente conhecida como Doha Street). O arquiteto do edifício é Adrian Smith, que trabalhou com a Skidmore, Owings and Merrill (SOM) até 2006. A empresa de arquitetura e engenharia sediada na cidade estadunidense de Chicago ficou encarregada do projeto arquitetônico do prédio. As primeiras empreiteiras são a Samsung Engineering & Construction, a Besix e a Arabtec. A Turner Construction Company foi escolhida para comandar o projeto."
}

const jbc = {
    id: 3,
    label: "Jardim Botânico de Curitiba",
    category: "pais",
    imgs: ["src/assets/imgs/jardimBot/jardim1.jpg", "src/assets/imgs/jardimBot/jardim2.jpg", "src/assets/imgs/jardimBot/jardim3.jpg"],
    text: "O Jardim Botânico de Curitiba, ou Jardim Botânico Francisca Richbieter, é um dos principais pontos turísticos da cidade de Curitiba, capital do estado brasileiro do Paraná. Localiza-se no bairro Jardim Botânico. Em 2007 foi o monumento mais votado numa eleição para escolha das Sete Maravilhas do Brasil, promovido pelo site Mapa-Mundi.\nInaugurado em 5 de outubro de 1991, seu nome oficial (J.B. Francisca Richbieter) presta uma homenagem à urbanista Francisca Maria Garfunkel Rischbieter, uma das pioneiras no trabalho de planejamento urbano da capital paranaense).\nTodo o Jardim Botânico possui uma área total de 278 mil metros quadrados, incluindo o bosque com mata atlântica preservada. Localiza-se na rua Engenheiro Ostoja Roguski (primeira perimetral dos bairros), bairro Jardim Botânico."
}

projects.push(ggB)
projects.push(bjk)
projects.push(jbc)
projects.push(ggB)
projects.push(bjk)
projects.push(jbc)

export const filters = []

filters.push({filter: "arq", active: false, text: "Arquitetônicos"})
filters.push({filter: "ie", active: false, text: "Inst. Especiais"})
filters.push({filter: "pais", active: false, text: "Paisagismo"})
filters.push({filter: "int", active: false, text: "Interiores"})
filters.push({filter: "ref", active: false, text: "Reformas"})
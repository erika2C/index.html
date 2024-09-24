const perguntas = [
    {
        enunciado: "É possível uma música ajudar a combater o Racismo?",
        alternativas: [
            {
                texto: "sim ",
                afirmacao: [
                    "A música sempre foi um dos recursos mais utilizados para denunciar o racismo"
                ],
                proxima: 1,
            },
            {
                texto: "Não",
                afirmacao: [
                    "A música acaba piorando o Racismo",
                   
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Os cantores discriminam seus fãs?E se Sim eles se Responsabilizam por isso?",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: [
                    "Os cantores demonstra respeito ao seus fãs",
                    
                    
                ],
                proxima: 3,
            },
            {
                texto: "Sim",
                afirmacao: [
                    "Eles não demonstra Respeito aos seus fãs",
                    
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "As pessoas ajuda ou dá auxílio no resgates aos animais extintos? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                    "Muitas pessoas ajudam no resgate, tanto doando como se voluntariando",
                    
                ],
                proxima: 3,
            },
            {
                texto: "Não",
                afirmacao: [
                    "Muitas pessoas ajudam na extinção deles por meio do abuso animal",
                    
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Ferramentas de busca que utilizam IA podem facilitar muito nosso processo de busca por informações. Agora imagine que você precisa participar de um debate sobre o quanto a IA impacta no trabalho do futuro. Qual posicionamento tomar?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 5,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Utilizar informações próprias traz um toque pessoal ao nosso trabalho. Agora imagine que você precisa participar de um debate sobre o quanto a IA impacta no trabalho do futuro. Qual posicionamento tomar?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 5,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Novas tecnologias trazem novos desafios, por isso após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 7,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "É muito importante refletir sobre os trabalhadores do futuro. Por isso a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 7,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade, por isso vem estimulando pessoas em suas redes sociais a fazer pintura em aquarela."
                ],
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                    "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através da arte.",
                    "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem ideias do papel."
                ],
            },
        ]

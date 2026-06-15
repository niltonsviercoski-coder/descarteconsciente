# Descarte Consciente — Concurso Agrinho 2026
Projeto desenvolvido para o **Concurso Agrinho 2026**, promovido pelo SENAR-PR e pela Secretaria de Estado da Educação do Paraná (SEED-PR). 

Inserido na **Categoria: Programação**, atendendo aos critérios específicos estabelecidos para a **Subcategoria 3: Ensino Médio**.

# Identificação do Estudante e Instituição
Estudante: Nilton Rafael Batistel Sviercoski
CGM: 1008629605
Série: 1º ano "A" - Técnico em agropecuária Integral
Componente Curricular: Educação digital programação comutação e  IA
Instituição de Ensino: Centro Estadual de Educação Profissional Olegário Macedo
Município: Castro - PR
Núcleo Regional de Educação (NRE): NRE Ponta Grossa

# Tema Oficial e Objetivo do Projeto

Tema:
"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"

O projeto **Descarte Consciente** é uma plataforma educacional e interativa focada no cumprimento da Lei nº 14.785/2023 (Nova Lei de Agrotóxicos) e nas diretrizes do Sistema Campo Limpo (gerido pelo inpEV). 

O objetivo principal é mitigar os impactos ambientais causados pela destinação incorreta de embalagens vazias de defensivos agrícolas — como a contaminação de lençóis freáticos, degradação do solo e riscos à saúde humana. A aplicação ensina o passo a passo da Tríplice Lavagem e calcula os prazos legais para a devolução das embalagens, unindo tecnologia à conscientização no campo.

Tecnologias e Ferramentas Utilizadas
Em total conformidade com as diretrizes do edital para o desenvolvimento de aplicações Front-End robustas, responsivas e acessíveis, foram utilizadas:

HTML5: Estruturação semântica limpa e acessível (tags como `<header>`, `<main>`, `<section>`, `<video>`), livre de estilos inline para garantir a separação de escopos.
CSS3 Nativo (`style.css` e `responsive.css`): Uso de variáveis CSS (`:root`), layouts adaptáveis via Flexbox e CSS Grid, animações controladas e Media Queries para responsividade completa em dispositivos móveis e tablets.
JavaScript Puro (`main.js`, `calculadora.js`, `quiz.js`): Arquitetura lógica modular e independente, tratamento e manipulação assíncrona do DOM, escuta dinâmica de eventos e persistência local simplificada de dados.

Estrutura Oficial de Arquivos do Repositório
O projeto está organizado de maneira modular e limpa, dividindo as responsabilidades de estilo, comportamento e mídia conforme a arquitetura padrão declarada:

text
projeto-agrinho/
├── index.html               # Estrutura semântica e esqueleto da aplicação
├── README.md                # Documentação oficial exigida pelo edital
├── video/
│   └── passoapasso.mp4      # Reprodutor nativo do tutorial de lavagem
├── css/
│   ├── style.css            # Estilização geral, variáveis de cor e layout base
│   └── responsive.css       # Adaptações e regras para visualização mobile
└── js/
    ├── main.js              # Controle do menu, abas informativas e animações
    ├── calculadora.js       # Mecanismo lógico de contagem dos prazos legais
    └── quiz.js              # Gerenciador interativo de perguntas e respostas
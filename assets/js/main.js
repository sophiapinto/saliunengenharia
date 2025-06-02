import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".exec-obras",
  `Execução completa de obras residenciais, comerciais e industriais, com foco em qualidade, segurança e cumprimento de prazos. Atuamos desde a fundação até o acabamento final.`,
  " ",
  "Construções e Reformas",
  " "
);

hoverChangeExperience(
  ".infraestrutura",
  `Soluções técnicas e operacionais para obras de infraestrutura urbana e rural: Pavimentação, terraplanagem, drenagem pluvial, sinalização viária e uutros serviços correlatos.`,
  " ",
  "Infraestrutura",
  " "
);

hoverChangeExperience(
  ".projetos",
  `Desenvolvimento de projetos personalizados, alinhados às normas técnicas e às necessidades do cliente:
	•	Projeto arquitetônico completo
	•	Projeto estrutural
	•	Projetos elétrico, hidrossanitário, SPDA e combate a incêndio`,
  " ",
  "Projetos Arquitetônicos e Complementares",
  " "
);

hoverChangeExperience(
  ".planejamento",
  `Elaboração de orçamentos detalhados, cronogramas físico-financeiros e planejamento estratégico de obras para garantir eficiência na execução e controle de custos.`,
  " ",
  "Orçamentação e Planejamento",
  " "
);

hoverChangeExperience(
  ".consultoria",
  `Emissão de documentos técnicos com base em análise criteriosa:
	•	Laudos de patologias construtivas;
	•	Vistorias técnicas para compra, venda ou aluguel de imóveis;
	•	Atestados e pareceres de engenharia.`,
  " ",
  "Laudos Técnicos e Vistorias",
  " "
);

hoverChangeExperience(
  ".responsabilidade",
  `Assumimos a responsabilidade legal e técnica pela execução de obras ou serviços de engenharia, conforme exigido pelo CREA e demais órgãos reguladores.`,
  " ",
  "Responsabilidade Técnica (RT)",
  " "
);

hoverChangeExperience(
  ".elaboracao",
  `Conformidade legal com os principais programas de saúde, segurança e meio ambiente:
	•	PCMAT (Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção);
	•	PPRA / PGR / PGRCC;
	•	PCMSO / LTCAT / PAE / PPR;
	•	E outros programas técnicos obrigatórios.`,
  " ",
  "Elaboração e Revisão de Programas Técnicos",
  " "
);

hoverChangeExperience(
  ".capacitacao",
  `Capacitação de equipes para atendimento às Normas Regulamentadoras (NRs) e demais exigências técnicas e legais:
	•	NRs (NR-10, NR-18, NR-35 etc.);
	•	RACs (Regras de Ouro);
	•	Cursos e reciclagens específicas sob demanda.`,
  " ",
  "Treinamentos Profissionais e Capacitação",
  " "
);
hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);

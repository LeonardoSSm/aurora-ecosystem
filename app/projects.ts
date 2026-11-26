export type Stage = "Versão inicial" | "Em desenvolvimento" | "Arquitetura" | "Planejado";
export type Project = { name: string; tag: string; stage: Stage; symbol: string; description: string };
export const projects: Project[] = [
  {name:"Aurora Central",tag:"Interface",stage:"Em desenvolvimento",symbol:"◎",description:"Uma central desktop para acessar e conectar os módulos do ecossistema em uma experiência unificada."},
  {name:"Aurora Board",tag:"Produtividade",stage:"Versão inicial",symbol:"▦",description:"Um canvas infinito e local-first para organizar ideias, tarefas, conhecimento e ferramentas em um espaço livre."},
  {name:"Aurora Control",tag:"Observabilidade",stage:"Versão inicial",symbol:"⌁",description:"Monitoramento de agentes de desenvolvimento, com foco em visibilidade de uso, atividade e limites."},
  {name:"Aurora Flow",tag:"Automação",stage:"Em desenvolvimento",symbol:"↝",description:"Engine de workflows para conectar serviços, executar automações e integrar processos."},
  {name:"Aurora AI",tag:"Inteligência artificial",stage:"Arquitetura",symbol:"✳",description:"Infraestrutura compartilhada para modelos, inferência, adaptadores e execução de agentes de IA."},
  {name:"Aurora Nexus",tag:"Conhecimento",stage:"Arquitetura",symbol:"◇",description:"Camada de memória, conhecimento, recuperação de contexto e estudos para inteligência aplicada."},
  {name:"Aurora Lens",tag:"Captura",stage:"Planejado",symbol:"◉",description:"Conceito de captura e transmissão de conteúdo visual para integração com outras ferramentas."},
  {name:"Aurora Connect",tag:"Conectividade",stage:"Planejado",symbol:"⤧",description:"Conceito de integração entre computadores com compartilhamento de periféricos, clipboard e arquivos."},
  {name:"Aurora Studio",tag:"Criação",stage:"Planejado",symbol:"▱",description:"Conceito de ambiente para produção de conteúdo e fluxos criativos assistidos por inteligência artificial."},
];

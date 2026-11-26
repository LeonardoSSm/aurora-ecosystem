import { projects } from "./projects";
function Core() {
  const points = Array.from({length:240},(_,i)=>{
    const y=1-2*(i+.5)/240, r=Math.sqrt(1-y*y), a=i*2.39996323;
    const z=r*Math.sin(a);
    return {x:300+r*Math.cos(a)*119,y:220+y*119,opacity:.28+(z+1)*.31,r:i%11===0?2:1};
  });
  return <svg className="core" viewBox="0 0 600 440" role="img" aria-label="Núcleo Aurora com partículas e órbitas">
    <defs><radialGradient id="glow"><stop stopColor="#7159dc" stopOpacity=".27"/><stop offset="1" stopColor="#7159dc" stopOpacity="0"/></radialGradient></defs>
    <circle cx="300" cy="220" r="205" fill="url(#glow)"/>
    <g fill="none" stroke="#8c85d5" strokeWidth=".75" opacity=".45">
      <ellipse cx="300" cy="220" rx="254" ry="100" transform="rotate(-25 300 220)"/>
      <ellipse cx="300" cy="220" rx="244" ry="93" transform="rotate(28 300 220)"/>
      <ellipse cx="300" cy="220" rx="218" ry="68" transform="rotate(75 300 220)"/>
      {Array.from({length:7},(_,i)=><ellipse key={i} cx="300" cy="220" rx="119" ry={20+i*15} transform={`rotate(${i*26} 300 220)`}/>)}
    </g>
    <g fill="#c9c0ff">{points.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={p.r} opacity={p.opacity}/>)}</g>
    <g fill="#f1edff">{[[92,325],[490,105],[520,305],[214,30],[356,417]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3"/>)}</g>
  </svg>;
}
export default function Home(){
  return <><header className="header"><a className="brand" href="#inicio"><span className="mark" aria-hidden="true">✳</span> AURORA <small>ECOSYSTEM</small></a><nav aria-label="Navegação"><a href="#sistemas">Sistemas</a><a href="#visao">Visão</a><a href="https://github.com/LeonardoSSm">GitHub ↗</a></nav></header>
  <main id="inicio"><section className="hero wrap"><div className="hero-copy"><p className="eyebrow"><span/> ECOSSISTEMA INDEPENDENTE DE SOFTWARE</p><h1>Inteligência.<br/><em>Conectada.</em></h1><p className="lead">Construindo ferramentas que aproximam inteligência artificial, produtividade e automação. Um ecossistema modular, conectado por uma visão em comum.</p><a className="cta" href="#sistemas">Explorar o ecossistema <span>↘</span></a></div><Core/></section>
  <section className="wrap systems" id="sistemas"><div className="section-head"><div><p className="eyebrow">01 / PROJETOS</p><h2>Uma visão. Dez sistemas.</h2></div><p>Conheça cada módulo e sua proposta. Os estágios são uma visão inicial do desenvolvimento, não monitoramento em tempo real.</p></div><div className="legend"><span>Catálogo editorial · Novembro de 2026</span><span>{projects.length} iniciativas</span></div><div className="cards">{projects.map(p=><article className="project" key={p.name}><div className="project-top"><span className="symbol" aria-hidden="true">{p.symbol}</span><span className={"stage "+(p.stage==="Versão inicial"?"initial":"")}><i/>{p.stage}</span></div><small>{p.tag}</small><h3>{p.name}</h3><p>{p.description}</p></article>)}</div></section>
  <section className="wrap vision" id="visao"><p className="eyebrow">02 / VISÃO</p><h2>Construir com propósito.</h2><p>Ferramentas independentes, responsabilidades claras e integração progressiva. O objetivo é criar um ambiente em que tecnologia e conhecimento se complementem, sem exigir que tudo esteja em um único aplicativo.</p><a href="https://github.com/LeonardoSSm">Acompanhar no GitHub ↗</a></section></main>
  <footer className="wrap footer"><span>AURORA ECOSYSTEM</span><span>Desenvolvido por Leonardo Sousa · 2026</span><a href="https://ssousa-portfolio.vercel.app">Portfólio ↗</a></footer></>;
}

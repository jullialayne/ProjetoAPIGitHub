import React from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Card from './component/Card';
import Cards from './component/Cards';

function App() {
  return (
    < >
      <Header titulo="Home"/>
      <Content titulo="Sobre Cora Coralina">
      
        <p>
        Cora Coralina, pseudônimo de Anna Lins dos Guimarães Peixoto Bretas (Cidade de Goiás, 20 de agosto de 1889 — Goiânia, 10 de abril de 1985), foi uma poetisa e contista brasileira. Considerada uma das mais importantes escritoras brasileiras, ela teve seu primeiro livro publicado em junho de 1965 (Poemas dos Becos de Goiás e Estórias Mais), quando já tinha quase 76 anos de idade, apesar de escrever seus versos desde a adolescência.
        </p>
        <p>
        Mulher simples, doceira de profissão, tendo vivido longe dos grandes centros urbanos, alheia a modismos literários, produziu uma obra poética rica em motivos do cotidiano do interior brasileiro, em particular dos becos e ruas históricas de Goiás.
        </p>
       <Cards>
          <Card 
            imagem="https://upload.wikimedia.org/wikipedia/pt/d/db/Cora_Coralina.jpg"
            titulo="Aninha e Suas Pedras"
            texto={<p>Não te deixes destruir…<br />
            Ajuntando novas pedras<br />
            e construindo novos poemas.<br />
            Recria tua vida, sempre, sempre.<br />
            Remove pedras e planta roseiras e faz doces. Recomeça.<br />
            Faz de tua vida mesquinha<br />
            um poema.<br />
            E viverás no coração dos jovens<br />
            e na memória das gerações que hão de vir.<br />
            Esta fonte é para uso de todos os sedentos.<br />
            Toma a tua parte.<br />
            Vem a estas páginas<br />
            e não entraves seu uso<br />
            aos que têm sede. </p>}
          />
          <Card 
            imagem="https://3.bp.blogspot.com/-eO0K-uo4ivo/WOv0KBcPAwI/AAAAAAAAZPk/SnQcdIA91AkF-OHK6ocySawTwGuQeek5ACLcB/s640/ohenry2.png"
            titulo="Conclusões de Aninha"
            texto={<p>Estavam ali parados. Marido e mulher.<br />
            Esperavam o carro. E foi que veio aquela da roça<br />
            tímida, humilde, sofrida.<br />
            Contou que o fogo, lá longe, tinha queimado seu rancho,<br />
            e tudo que tinha dentro.<br />
            Estava ali no comércio pedindo um auxílio para levantar<br />
            novo rancho e comprar suas pobrezinhas.<br />
            O homem ouviu. Abriu a carteira tirou uma cédula,<br />
            entregou sem palavra.<br />
            A mulher ouviu. Perguntou, indagou, especulou, aconselhou,<br />
            se comoveu e disse que Nossa Senhora havia de ajudar<br />
            E não abriu a bolsa.<br />
            Qual dos dois ajudou mais?</p>}
          />
          <Card 
            imagem="https://f.i.uol.com.br/fotografia/2020/12/23/16087585915fe3b53fef1d4_1608758591_3x4_md.jpg"
            titulo="Mulher da Vida"
            texto={<p>Mulher da Vida,<br />
            Minha irmã.<br />
            De todos os tempos.<br />
            De todos os povos.<br />
            De todas as latitudes.<br />
            Ela vem do fundo imemorial das idades<br />
            e carrega a carga pesada<br />
            dos mais torpes sinônimos,<br />
            apelidos e ápodos:<br />
            Mulher da zona,<br />
            Mulher da rua,<br />
            Mulher perdida,<br />
            Mulher à toa.<br />
            Mulher da vida,<br />
            Minha irmã.</p>}
          />
        </Cards>
      </Content>
    </>
  );
}

export default App;

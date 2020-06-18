import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './imagens/foto.png'
import email from './imagens/email.png'
import address from './imagens/address.png'
import ifsc from './imagens/ifsc.png'
import freelancer from './imagens/freelancer.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= { foto }
          acessibilidade="Foto de perfil do currículo da pessoa" 
          nome="Julio Gabriel" 
          descricao="Oi, eu sou o Julio Gabriel. Sou aluno da Labenu. Tive meu primeiro contato com a programação quando estudava Mecatrônica no IFSC e desde então venho buscando estudar/trabalhar com programação. Trabalhei dois anos como programador de CLP."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          acessibilidade="Flecha apontando para baixo" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem= { email }
          acessibilidade="Um envelope" 
          campo="Email:"
          valor=" juliogabriel@endereco.com"
        />

        <CardPequeno
          imagem= { address }
          acessibilidade="Imagem representando a sua localização" 
          campo="Endereço:"
          valor="Rua dos Bobos, 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= { freelancer }
          acessibilidade="Imagem de atividade freelancer" 
          nome="Programador CLP" 
          descricao="Programador de CLP Omron e Siemens" 
        />
        
        <CardGrande 
          imagem= { ifsc } 
          acessibilidade="Logo do Instituto Federal de Santa Catarina" 
          nome="Estudante de Técnico em Mecatrônica" 
          descricao="Estudei Mecatrônica no IF-SC" 
        />
      </div>

      <div className="pages-section-container">
          <h2>Competências</h2>
          <CardPequeno
          imagem="https://img.favpng.com/5/10/9/css-icon-html-icon-html5-icon-png-favpng-F085sKM3CjHVXmHKJhEBwjxY4.jpg"
          acessibilidade="Logo do HTML" 
          campo="HTML"
          />

          <CardPequeno
          imagem="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png"
          acessibilidade="Logo do CSS" 
          campo="CSS"
          />

          <CardPequeno
          imagem="https://banner2.cleanpng.com/20180810/biz/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b6dbeb48e4583.2854840415339189005828.jpg"
          acessibilidade="Logo do JavaScript" 
          campo="JavaScript"
          />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          acessibilidade="Logo do Facebook" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          acessibilidade="Logo do Twitter" 
          texto="Twitter" 
        />      
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';


function formatarData(data){ // como é formatação não entra props
return data.toLocaleDateString(); // formatação data em tring já vem pronto
}
function FotoUsuario(props){
  return(
    <img
    src={props.usuario.fotoUrl}
    alt={props.usuario.fotoNome} // tem colocar alt por causa das pessoas especiais 
    />
  )
}
 function DadosUsuario(props) {
   return(
   <div>{props.userio.nome}</div>
   )
 }
function InformacoesGerais(props) {// pegar as informações
return(
  <div className="InformacaoUsuario">
    <FotoUsuario usuario={props.usuario}/>
    <DadosUsuario usuario={props.usuario.nome}/>
    
  </div>
)
}

function Comentarios(props){
  return(
    <div className="Comentario"> {/*comentario do usuario*/}
      <InformacoesGerais usuario={props.autora} />
      <div>{props.comentario}</div>
      {formatarData(props.data)}

    </div>
  )
}

// Criando objeto de comentarios
const comentario = {
  data: new Date(),
  comenario: 'Este é o comentário',
  autora:{
    nome:'Marisa',
    FotoUrl: 'https://placekitten.com/g/64/64',
    fotoNome:'Perfil'

  }

}

ReactDOM.render(
  <React.StrictMode>
    <Comentarios
      data={comentario.data}
      comentario={comentario.comentario}
      autora={comentario.autora}

    />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

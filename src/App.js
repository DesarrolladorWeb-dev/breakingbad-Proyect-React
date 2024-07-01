import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
display:flex;
align-items:center;
padding-top: 5rem;
flex-direction: column;
`

const Boton = styled.button`
  background : -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top:3rem;
  padding:1rem 3rem;
  font-size: 2rem;
  border:2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }

`;

function App() {

  // state de frases
  const [frase , guardarFrase] = useState({}); // cada vez que ñe doy clic en el boton se va a sobreescribir el objeto frase

  const consultarAPI =  async () => {
    console.log('consultando ... ')
    // https://breaking-bad-quotes.herokuapp.com/v1/quotes
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes') // await:deten esta ejecucion del codigo hasta que esto se complete y una ves que este listo pasaselo a api  
    // nos devolvio un promise y fech funciona con promise de esta manera:
    const frase = await api.json()
    
    //siempre que en un promise en la consola es <pending> es por que falta un .then
    guardarFrase(frase[0])
  }
// Cargar una frase
useEffect(() => {
  consultarAPI()
},[]) // son las dependencias


  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
        <Boton 
          onClick={consultarAPI}
          // consultarAPI()  : mando a llamar la funcion no presiono el boton y ta se ejecuta es por eso del arrow funcion
          // consultarAPI : se ejecuta cuando le de click al boton
        >
        Obtener Frase
      </Boton>
    </Contenedor>
      );
}

export default App;
 
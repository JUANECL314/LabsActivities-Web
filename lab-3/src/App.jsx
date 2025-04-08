
import CryptoJS from "crypto-js";
import './App.css'
import React, { useState } from "react";

function App() {
  
  const [texto,setTexto] = useState("");
  const [textoCodificado,setTextoCodificado] = useState("");
  const [textoDescifrado,setTextoDescifrado] = useState("");

  const llave_encriptado = "j3c13l4";
  const cifrar = (mensaje,llave_encriptado) => {
    var encriptado = CryptoJS.AES.encrypt(mensaje, llave_encriptado).toString();
    return encriptado;
  }

  const decifrar = (mensaje,llave_encriptado) => {
    var decifrado = CryptoJS.AES.decrypt(mensaje, llave_encriptado);
    var decifradoExitoso = decifrado.toString(CryptoJS.enc.Utf8);
    return decifradoExitoso;
  } 

  return (
    <div className="Contenedor">
      <h1 className='titulo'>Formulario</h1>
      <div className='codificador'>
        <input 
          className='parrafo-input' 
          type="text" 
          placeholder='Escribe aquí el párrafo a cifrar' 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />   
        <button className='boton-codificar'  onClick={() => {
            setTextoCodificado(cifrar(texto,llave_encriptado)); 
        }}>Codificar</button>
      </div>
      <h1 className='titulo'>Mensaje codificado</h1>
      <div className='mensaje-codificado'>
        
        <p className='parrafo-codificado'>{textoCodificado}</p>
        
        
        <button className='boton-descifrar'onClick={() => setTextoDescifrado(decifrar(textoCodificado,llave_encriptado))}>Descifrar</button>
      </div>
      <h1 className='titulo'>Mensaje descifrado</h1>
      <div className='descifrado'>
        <p className='texto-descifrado'>{textoDescifrado}</p>
      </div>
    </div>
  )
}

export default App

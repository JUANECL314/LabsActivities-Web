export function SecondComp() {
    const nombre = 'Juan';
    const apellido = 'Cibrian';

    const videojuegoFav = 'Dragon Ball Z Dokkan Battle';
    
    const tiempoJugado = 9;

    const facto = (nombre, apellido, videojuegoFav, tiempoJugado) => `${nombre} ${apellido} su videojuego favortio es ${videojuegoFav}, ya que lo ha jugado por ${tiempoJugado} años.`;
    console.log(facto(nombre, apellido, videojuegoFav, tiempoJugado));

}


export default SecondComp;
export const Fruit = ({id,name,description,type,image}) => {

    return (
        <section style = {{height: 400}}>
        <h2 className="text-capitalize">Nombre de la fruta: {name} </h2>
        <div>
            <img src = {image} width="200" height="200" alt = {name}/>
            <p>Tipo de fruta: {type}</p>
            <p>{description}</p>
        </div>
        </section>
    )
}
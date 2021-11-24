import ItemCount from "./ItemCount"

const ItemDetail = (props) => {
    const {elem} = props
    return (
        <>

            <div key={elem.id} className="container">
                <h2>Detalles</h2>
                <p> {elem.title}</p>
                <img src={elem.image} alt={elem.title} />
                <p> {elem.description}</p>
                <ItemCount stock={elem.stock} initial={1} />
            </div>




        </>

    )

}


export default ItemDetail
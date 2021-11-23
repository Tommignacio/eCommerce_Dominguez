import ItemCount from "./ItemCount"

const ItemDetail=(elem)=>{
    return(
        <>
        {
        elem.length===0?
        <p>cargando .__.</p>
        :
          <div key={elem.id} className="container">
                  <h2>Detalles</h2>
                  <p> {elem.title}</p>
                  <img src={elem.image}/>
                  <p> {elem.description}</p>
                  <ItemCount stock={elem.stock} initial={1} />
              </div>

       
        }
       
        </> 
    
    )

}


export default ItemDetail
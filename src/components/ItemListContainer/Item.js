import { Link } from "react-router-dom"
//ESTRUCTURa de cada producto
//recibe props del estado de los datos del array que estan en ITEMLISTCONTAINER
const Item =(props)=>{

return(
    <>
        <div className="container">
            <p> {props.el.title}</p>
            <Link to={`/item/${props.id}`}><img src={props.el.image}/></Link>
        </div>
    </>
)
}
export default Item
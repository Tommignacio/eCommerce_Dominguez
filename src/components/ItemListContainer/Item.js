
const Item =(props)=>{

return(
    <>
        <div className="container">
            <p> {props.el.title}</p>
            <img src={props.el.image}/>
            <p> {props.el.description}</p>
        </div>
    </>
)
}
export default Item
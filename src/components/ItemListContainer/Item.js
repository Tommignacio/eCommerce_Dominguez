
const Item =(props)=>{

return(
    <>
        <div className="container">
            <p> {props.el.title}</p>
            <img src={props.el.image}/>
        </div>
    </>
)
}
export default Item
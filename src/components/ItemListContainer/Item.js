
const Item =(props)=>{

return(
    <>
        <div>
            <p>{props.el.id}</p>
            <p> {props.el.title}</p>
            <p> {props.el.description}</p>
        </div>
    </>
)
}
export default Item
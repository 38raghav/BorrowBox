import { cardData } from "./cardData"
export const showDetails=(item)=>{
    return(
        <>
        <div style={{backgroundColor:"white",width:"70%",height:"70%",display:"flex",boxShadow:"0px 2px 4px rgba(0,0,0,0.1)",borderRadius:"5px"}}>
            <div>
                <img src={item.images} alt="" />
            </div>
            <div>
                <h4>Title:{item.title}</h4>
                <h4>Category:{item.category}</h4>
                <h4>Description:{item.description}</h4>
                <h4>StartDate</h4>
                <input type="date" placeholder="dd/mm/yyyy"></input>
                <h4>EndDate</h4>
                <input type="date" placeholder="dd/mm/yyyy"></input>
            </div>
        </div>
        </>
    )
}
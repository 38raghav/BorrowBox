import { Ccarousal } from "../Components/Carousel"
import { Cards } from "../Components/Cards"
import Category from "../Components/Category"

export default function Home(){
    return(
        <>
       <Ccarousal></Ccarousal>
       <br />
       <br />
      <h3 style={{backgroundColor:"blue", color:"white" ,width:"220px" ,marginLeft:"5%", padding:"1%",borderRadius:"5%"}}> All Categores</h3>
       <br />
       <Category></Category>
       <br />
       <br />
       <br />
       <Cards style={{justifyContent:"center"}}></Cards>
        </>
    )
}
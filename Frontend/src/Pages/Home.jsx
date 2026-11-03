import { Ccarousal } from "../Components/Carousel"
import { Cards } from "../Components/Cards"
import Category from "../Components/Category"

export default function Home(){
    return(
        <>
       <Ccarousal></Ccarousal>
       <br />
       <br />
      <h1 style={{backgroundColor:"blue", color:"white" ,width:"300px" ,marginLeft:"5%", padding:"1%"}}> All Categores</h1>
       <br />
       <Category></Category>
       <br />
       <br />
       <br />
       <Cards></Cards>
        </>
    )
}
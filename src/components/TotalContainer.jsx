import Container1 from "./Container1"
import BottomContainer from "./Bottom-Container"
import "../styles/TotalContainer.css"


export default function TotalContainer(){
    return(
        <div className="total-container">
            <Container1/>
            <BottomContainer/>
        </div>
    )
}
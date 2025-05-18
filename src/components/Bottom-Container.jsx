import Container2 from "./Container2"
import Container3 from "./Container3"
import '../styles/BottomContainer.css'

export default function BottomContainer(){
    return(
        <div className="bottom-container">
            <Container2/>
            <Container3/>
        </div>
    )
}
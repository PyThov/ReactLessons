import { Button } from "@mui/material"
import "./components.css"

export default function Header(){
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#444",
            padding: "20px",
            marginBottom: "10px"     
        }}>
            <div className="headerText" style={{color: "white"}}>
                ZPM - React Lessons
            </div>
            <div>
                <Button href="/pokesearcher" variant="contained" sx={{
                    backgroundColor: "white",
                    color: "black",
                    ":hover": {
                        backgroundColor: "red",
                        color: "white"
                    }}}>
                        PokeSearcher
                    </Button>
            </div>
        </div>
    )
}

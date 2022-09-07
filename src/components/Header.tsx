import "./components.css"

export default function Header(){
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#444",
            width: "100vw",
            padding: "20px",            
        }}>
            <div className="headerText">
                I'm a Header!
            </div>
        </div>
    )
}

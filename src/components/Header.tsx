import { Button, Box, Typography } from "@mui/material"
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
            <Button variant="outlined" sx={{borderColor: "white"}} href="/">
                <Typography variant="body1" color="white">ZPM - React Lessons</Typography>
            </Button>
            <Box display="flex" gap="20px">
                <Button href="/worker" variant="contained" sx={{
                    backgroundColor: "white",
                    color: "black",
                    ":hover": {
                        color: "white"
                    }}}>
                        Web Worker
                </Button>
                <Button href="/pokesearcher" variant="contained" sx={{
                    backgroundColor: "white",
                    color: "black",
                    ":hover": {
                        backgroundColor: "red",
                        color: "white"
                    }}}>
                        PokeSearcher
                </Button>
            </Box>
        </div>
    )
}

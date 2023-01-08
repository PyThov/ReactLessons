import { Container, Typography } from "@mui/material";

export default function Home() {
    return (
        <Container maxWidth="xl" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
            }}>
            <Typography variant="h2" sx={{borderBottom: "2px solid #444"}}>Home</Typography>
        </Container>
    )
}
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export default function ApiPage() {
    const [isLoading, setIsLoading] = React.useState(false)
    const path = window.location.pathname;
    const href = path === "/api-1" ? "/api-2" : "/api-1"

    const sendPostRequest = () => {
        setIsLoading(true)

        const redirect = () => {
            window.location.assign(href)
        }

        setTimeout(() => {
            redirect()
        }, 1000)

        fetch(`http://localhost:8000`, {
            method: "POST",
            // mode: "no-cors",
            headers: {
              'Content-Type': 'application/json',

            },
            body: JSON.stringify({name: "test"})})
        .then(() => {
            redirect()
        })
    }

    return (
        <Container maxWidth="xl" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
            }}>
            <Typography variant="h2" sx={{borderBottom: "2px solid #444"}}>Custom API</Typography>
            <Box display="flex" flexDirection="row" gap="10px" alignItems="baseline">
                <Typography fontSize={20} fontWeight="600">Path:</Typography>
                <Typography fontWeight="400">{window.location.pathname}</Typography>
            </Box>
            <Button
                onClick={() => sendPostRequest()}
                variant="contained"
                // href={href}
                sx={{
                    backgroundColor: path === "/api-1" ? "primary" : "red",
                    ":hover": {
                        backgroundColor: path === "/api-1" ? "primary" : "darkred"
                    }
                }}>
                POST
            </Button>
            {isLoading && <Typography>Loading...</Typography>}
        </Container>
    )
}
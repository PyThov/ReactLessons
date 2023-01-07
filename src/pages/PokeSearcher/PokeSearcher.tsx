import React, { useEffect } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { PokeResult } from "./components";

export default function PokeSearcher() {
    const [searchTerm, setSearchTerm] = React.useState('') // TODO: Create react hook for debounce searching?
    const [pokemon, setPokemon] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false)

    const getPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        .then(res => res.json())
        .then((result) => {
            setPokemon(result)
            setIsLoading(false)
        })
    }

    return (
        <Container maxWidth="xl" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
            }}>
            <Box display="flex" flexDirection="row" borderBottom="2px solid #000">
                <Typography variant="h2" sx={{color: "#E50000"}}>Poke</Typography>
                <Typography variant="h2" sx={{color: "#333"}}>Searcher</Typography>
            </Box>
            <Box
                // component="form"
                display="flex"
                flexDirection="row"
                textAlign="center"
            >
                <TextField
                    autoFocus
                    label="Pokemon"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        width: "45vw"
                    }}
                />
                <Button variant="contained" sx={{backgroundColor: "#E50000"}} onClick={() => {
                    setIsLoading(true)
                    getPokemon()
                }}>
                    <Typography variant="h6">Search</Typography>
                </Button>
            </Box>
            {isLoading ? <Typography>Loading...</Typography> : pokemon && <PokeResult pokemon={pokemon} />}
        </Container>
    )
}

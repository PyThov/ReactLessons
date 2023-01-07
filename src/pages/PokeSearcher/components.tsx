import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import { capitalizeFirstLetter } from "../../utils/utils";

interface IPokeResult {
    pokemon: {
        name: string;
        sprites: {
            [name: string]: string;
        }
    };
}
export const PokeResult = ({pokemon}: IPokeResult) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        > 
            <Card>
                <CardContent>
                        <Typography variant="h4">{capitalizeFirstLetter(pokemon.name)}</Typography>
                        <Divider />
                        <CardMedia component="img" image={pokemon.sprites["front_default"]} />
                </CardContent>
            </Card>
        </Box>
    )
}
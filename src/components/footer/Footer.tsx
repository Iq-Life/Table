import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Link} from "@mui/material";

export const Footer: React.FC = () => {
    return (
        <Box bgcolor="text.secondary" color="white">
            <Container maxWidth={"lg"}>
                <Grid container sx={{display: "flex", justifyContent: "space-between"}}>
                    <Grid item xs={8} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box><Link href={"/"} color="inherit">Contact</Link></Box>
                        <Box><Link href={"/"} color="inherit">Support</Link></Box>
                    </Grid>
                    <Grid item xs={8} sm={2}>
                        <Box borderBottom={1}>Account</Box>
                        <Box><Link href={"/"} color="inherit">Login</Link></Box>
                        <Box><Link href={"/"} color="inherit">Register</Link></Box>
                    </Grid>
                    <Grid item xs={8} sm={2}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box><Link href={"/"} color="inherit">Backup</Link></Box>
                        <Box><Link href={"/"} color="inherit">History</Link></Box>
                    </Grid>
                </Grid>
                <Box textAlign={"center"} sx={{padding: "10px"}}>
                    Terms of Reference from CodeInside&reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    )
}
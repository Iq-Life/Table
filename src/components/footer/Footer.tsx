import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {NavLink} from "react-router-dom";
import s from './Footer.module.css'

export const Footer: React.FC = () => {
    return (
        <Box bgcolor="text.secondary" color="white">
            <Container>
                <Grid container sx={{display: "flex", justifyContent: "space-around"}}>
                    <Grid item>
                        <Box>
                            <NavLink to={"/page-not-found"}
                                     color="inherit"
                                     className={s.link}>
                                Help
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid item >
                        <Box>
                            <NavLink to={"/page-not-found"}
                                     color="inherit"
                                     className={s.link}>
                                Account
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box>
                            <NavLink to={"/page-not-found"}
                                     color="inherit"
                                     className={s.link}>
                                Backup
                            </NavLink>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign={"center"} sx={{padding: "10px"}}>
                    Terms of Reference for CodeInside &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    )
}
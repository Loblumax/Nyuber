import React from "react";
import { Container, AppBar, Typography, Grow, Grid2 } from '@mui/material';
import Nyuber from './images/Nyuber.jpeg'; // Import the image
import Posts from "./Components/Posts/posts";
import Form from "./Components/Form/form";
 import useStyles from './styles'

const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">NyUber</Typography>
                <img className={classes.image} src={Nyuber} alt="nyuberlogo" height="60" />

            </AppBar>
            <Grow in>
                <Container>
                    <Grid2 container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid2 item xs={12} sm={7}>
                            <Posts/>


                        </Grid2>
                        <Grid2 item xs={12} sm={4}>
                            <Form/>
                            
                        </Grid2>

                    </Grid2>
                </Container>
            </Grow>
            

        </Container>
    );
}

export default App;
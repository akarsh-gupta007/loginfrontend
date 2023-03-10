import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';



const Home = (props) => {

  const handlebtn = () => {
    props.setLoginUser({})
  }
  // console.log(setLoginUser.firstName)
  return (


    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          marginBottom: 26,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: "10px",
          height: "300px",
          boxShadow: "0px 0px 10px grey",
          backgroundColor:"lightpink"
        }}
      >

        <Typography component="h1" variant="h5"
        sx={{
         textAlign:"center",
         marginTop:"100px",
         fontFamily:"sans-serif",
         fontSize:"35px"
        }}
        >
          Welcome {props.user.firstName} 
          </Typography>
        <Button
          onClick={handlebtn}

          fullWidth
          variant="contained"
          sx={{ mt: 23, mb: 2,height:"120px" }}
        >
          Logout
        </Button>

      </Box>


    </Container>

  );
}
export default Home

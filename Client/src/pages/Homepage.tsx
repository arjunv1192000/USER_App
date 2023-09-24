import React from 'react';
import { Box, Stack, Typography, TextareaAutosize, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import validationSchema from '../components/validation/messageValidation';
import axios from '../utils/axios'
import { useNavigate } from "react-router-dom";
import Tables from '../components/Table';



type RootState = {
  user: {
    value: {
      id: string | null;
      name: string | null;
      email: string | null;
      phone: string | null;
      access_token: string;
    };
  };
};


interface FormValues {
  message: string;


}

function Homepage() {


  const navigate = useNavigate();
  const userdata = useSelector((state: RootState) => state.user.value);
  const mail = userdata.email;

  const formik = useFormik({
    initialValues: {
      message: ''




    } as FormValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {




      const body = {

        message: values.message,
        Id: mail




      };
      console.log(body);


      axios.post("/addmessage", body).then((response) => {
        console.log(response);



        if (response.data.status == true) {
          resetForm();
          navigate("/home")

        } else {
          console.error(response);



        }


      }).catch((response) => {
        console.error(response.message);

        navigate("/")

      })

    },

  });


  return (
    <Box>
      <Stack>
        <Header />
        <Box
          sx={{
            width: "95%",
            height: 'auto',
            borderRadius: 6,
            backgroundColor: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 5,
            boxShadow: 6,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontSize: 20, fontWeight: 500, color: "blue", marginBottom: 4, marginTop: 10 }}>
            Welcome
          </Typography>
          <Typography component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000 }}>
            {userdata.name}
          </Typography>
          <Typography component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000, marginTop: 10 }}>
            Add Message
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ paddingLeft: 10, marginTop: 5 }}>
            <TextareaAutosize
              minRows={10}
              placeholder="Message"
              required
              id="message"
              name="message"
              autoComplete="message"
              autoFocus
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <Typography component="h1" variant="h5" sx={{ fontSize: 12, fontWeight: 1000, color: 'red' }}>
                {formik.errors.message}
              </Typography>
            ) : null}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2, height: 60, width: "70%", backgroundColor: '#131392' }}  >
              Submit
            </Button>
          </Box>
        </Box>
        <Tables/>
        <Footer />
      </Stack>
    </Box>
  );
}


export default Homepage;

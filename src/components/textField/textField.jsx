import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AddTextField(props) {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#30475E",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#30475E",
      borderSize: 100,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#30475E",
        borderSize: 100,
      },
      "&:hover fieldset": {
        borderColor: "#30475E",
        borderSize: 100,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#30475E",
        borderSize: 100,
      },
    },
  });

  return (
    <Box
      component="form"
      noValidate
      // boxShadow={8}
      sx={{width: '90%', marginBottom: '2rem', borderSize: '100rem'}}
    >
      <CssTextField fullWidth multiline rows={props.rows} label={props.label} id="custom-css-outlined-input" />
    </Box>
  );
}

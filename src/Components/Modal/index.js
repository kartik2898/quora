import "./modal.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSignUpSchema = yup.object({
        name:yup.string().trim().min(2,"Your name needs to be at least 2 characters long.").required("name is required"),
        email:yup.string().email("The email address you entered is not valid.").required("email is required")
});



function SignUpModal({handleClose}){


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: validationSignUpSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },

    })

    return(
        <Box class="Sign-Up-Modal">
            <IconButton onClick={handleClose} sx={{m:0.5}}>
                <CloseRoundedIcon />
            </IconButton>
            <Box class="signUp-form">
                <h3>Sign up</h3>
                <Box>
                    <label htmlFor="name">Name</label>
                    <TextField fullWidth  
                        id="name" 
                        size="small" 
                        placeholder="What would you like to be called?" 
                        sx={{mt:0.5}}
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Box>
                <Box>
                    <label htmlFor="email">Email</label>
                    <TextField fullWidth 
                        id="email" 
                        size="small" 
                        placeholder="Your email" 
                        sx={{mt:0.5}}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
            </Box>
            <Box class="Next">
                <Button 
                    variant="contained" 
                    sx={{borderRadius:50,backgroundColor:"#96B4FF"}}
                    type="button"
                    onClick={formik.handleSubmit}
                >
                    Next
                </Button>
            </Box>
        </Box>
    )
}

export default SignUpModal
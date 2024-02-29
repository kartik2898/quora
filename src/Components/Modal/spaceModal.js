import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "./spaceModal.css";
import { useFormik } from 'formik';
import * as yup from 'yup';
import postService from "../../service/PostService";
import { GrGallery } from "react-icons/gr";
import { useRef,useState } from "react";

function SpaceModal({handleClose, getChannel}){

    const validationCreateSpace = yup.object({
        spaceName:yup.string().trim().required(),
        description:yup.string().trim(),
    });

    const inputFileRef = useRef();
    const [file, setFile] = useState();
    const [uploadedFileURL, setUploadedFileURL] = useState(null);
    
    const formikCreateSpace = useFormik({
        initialValues: {
            spaceName: '',
            description: '', 
        },
        validationSchema: validationCreateSpace,
        onSubmit: (values) => {
           createChannel(values)
        },
    })

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
        setUploadedFileURL(URL.createObjectURL(event.target.files[0]))
    };

    const triggerFileUpload = ()=>{
        inputFileRef.current.click();
    }
    
    const closeImg = ()=>{
        setFile(null);
        setUploadedFileURL(null);
    }

    const createChannel=(values)=>{
        var formData = new FormData();
        formData.append('title',values.spaceName)
        formData.append('description',values.description)
        formData.append('images',file)
        postService.createChannel(formData).then((res)=>{
            console.log(res);
            handleClose();
            getChannel();
        })
    }


    return(
        <Box className="Space-Modal-container">
            
                <IconButton onClick={handleClose} sx={{m:0.5}} className="space-close-btn">
                    <CloseRoundedIcon />
                </IconButton>
            
            <Box className="space-modal-wrapper">

                <Box className="space-heading-container">
                    <h3>Create a space</h3>
                    <Box className="create-space-info">Share your interests, curate content, host discussions, and more.</Box>
                </Box>
                <Box className="space-info-container">
                    <Box>
                        <Typography variant="h7" component="h4">Name*</Typography>
                        <Typography variant="7" fontSize={14}>This can be changed in Space settings.</Typography>
                        <TextField fullWidth 
                            size="small" 
                            sx={{mt:0.5}}
                            name="spaceName"
                            value={formikCreateSpace.values.spaceName}
                            onChange={formikCreateSpace.handleChange}
                            onBlur={formikCreateSpace.handleBlur}
                            error={formikCreateSpace.touched.spaceName && Boolean(formikCreateSpace.errors.spaceName)}
                            helperText={formikCreateSpace.touched.spaceName && formikCreateSpace.errors.spaceName}
                        />
                    </Box>
                    <Box className="space-des.-container">
                        <Typography variant="h7" component="h4">Brief description</Typography>
                        <Typography variant="7" fontSize={14}>Include a few keywords to show people what to expect if they join.</Typography>
                        <TextField fullWidth 
                            size="small" 
                            sx={{mt:0.5}}
                            name="description"
                            value={formikCreateSpace.values.description}
                            onChange={formikCreateSpace.handleChange}
                            onBlur={formikCreateSpace.handleBlur}
                            error={formikCreateSpace.touched.description && Boolean(formikCreateSpace.errors.description)}
                            helperText={formikCreateSpace.touched.description && formikCreateSpace.errors.description}
                        />
                    </Box>
                    <Box className='create-post-img-select'>
                        {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content"className="select-img"/>}
                        {uploadedFileURL &&   <IconButton onClick={closeImg} sx={{m:0.5}}className="create-post-img-close-icon"><CloseRoundedIcon fontSize="10"/></IconButton>}
                    </Box>
                    <Box className="space-create-btn-wrapper">
                        <Box>
                            <Button variant="text" className="file-btn file-lang"  >
                                <GrGallery fontSize={30} onClick={triggerFileUpload}/>
                                <input hidden accept="image/*" ref={inputFileRef} type="file" onChange={handleFileUpload} />
                            </Button>
                        </Box>
                        <Button 
                            variant="contained" 
                            sx={{borderRadius:50,backgroundColor:"#96B4FF"}}
                            type="button"
                            onClick={formikCreateSpace.handleSubmit}
                        >
                            Create
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SpaceModal
import "./postModal.css";
import { useState } from "react";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { RiGroupLine } from "react-icons/ri";
import pfImg from "../../Assets/profileImg.webp"
import TextField from '@mui/material/TextField';




function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


function PostModal({handleClose}){

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <Box className="Post-Modal">
            <IconButton onClick={handleClose} sx={{m:0.5}}>
                <CloseRoundedIcon />
            </IconButton>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} className="Add-create-tab-box">
                        <Tab label="Add Question" {...a11yProps(0)} />
                        <Tab label="Create Post" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box className="AddQuestion-container">
                        <Box className="Instruction-Component">
                            <Typography component="div">
                                <h3>Tips on getting good answers quickly</h3>
                                <ul>
                                    <li>Make sure your question has not been asked already</li>
                                    <li>Keep your question short and to the point</li>
                                    <li>Double-check grammar and spelling</li>
                                </ul>
                            </Typography>
                        </Box>
                        <Box className="post-option-box">
                            <Avatar src={pfImg}/>
                            <Button variant="outlined" className="try-quora-btn" startIcon={<RiGroupLine />}>P<span>ublic</span></Button>
                        </Box>
                        <Box className="post-questionContainer">
                            <Input placeholder='Start your question with "What", "How", "Why", etc.' fullWidth />
                        </Box>
                        <Box className="Add-cancle-btn-container">
                            <Button variant="text" className="btn-cancle" onClick={handleClose}>C<span>ancle</span>
                            </Button>
                            <Button 
                                variant="contained" 
                                sx={{borderRadius:50,backgroundColor:"#96B4FF"}}
                                type="button"
                            >
                                A<span>ddQuestion</span>
                            </Button>
                        </Box>
                    </Box>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box className="create-box-container">
                        <Box className="createpost-profile-box">
                            <Avatar src={pfImg}/>
                            <Box>
                                <h4 className="create-post-pName">kartik</h4>
                                <Button variant="outlined" className="try-quora-btn">C<span>hoose credential</span></Button>
                            </Box>
                        </Box>
                        <Box>
                            <TextField
                                id="outlined-multiline-static" 
                                multiline
                                fullWidth
                                rows={12}
                                placeholder="say something..."
                            />
                        </Box>
                        <Box className="Add-cancle-btn-container">
                            <Button 
                                variant="contained" 
                                sx={{borderRadius:50,backgroundColor:"#96B4FF"}}
                                type="button"
                            >
                                P<span>ost</span>
                            </Button>
                        </Box>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

export default PostModal 
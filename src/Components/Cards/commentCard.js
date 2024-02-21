import Avatar from '@mui/material/Avatar';
import postService from '../../service/PostService';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import "./Cards.css"
import { useContext, useState } from "react";
import { UserContext } from '../../contexts/user-context';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CommentCardD from './commentCardD'

function CommentCard({ feed, comments, getComments }) {
    const { userDetail } = useContext(UserContext);
    const validationCommentSchema = yup.object({
        content: yup.string().trim().required(),
    });

    const formik = useFormik({
        initialValues: {
            content: "",
        },
        validationSchema: validationCommentSchema,
        onSubmit: (values) => {
            handleComment(values)     
        },
    })

    const handleComment = (values) => {
        postService.addComments(feed._id, values).then(() => {
            getComments();
        })
    }

    return (
        <>
            <Box className="comment-container-wrapper">
                <Box className="comment-box-container">
                    <Avatar sx={{ bgcolor: red[500] }} >
                        {userDetail?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box className="comment-box">
                        <TextField fullWidth size="small" className='cmt-input'
                            name="content"
                            value={formik.values.content}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.content && Boolean(formik.errors.content)}
                            helperText={formik.touched.content && formik.errors.content}
                        />
                    </Box>
                    <Box className="cmt-btn-wrapper">
                        <Button variant='contained' className='add-cmmt-btn' onClick={formik.handleSubmit}>Add comment</Button>
                    </Box>
                </Box>
                {
                    comments.map((comment, key) => (
                        <CommentCardD feed={feed} comment={comment} getComments={getComments}></CommentCardD>
                    ))
                }
            </Box>
        </>
    )
}

export default CommentCard
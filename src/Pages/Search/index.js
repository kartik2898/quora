import { Box,Container } from "@mui/material";
import Button from '@mui/material/Button';
import { RxThickArrowUp } from "react-icons/rx";
import { RxThickArrowDown } from "react-icons/rx";
import { useEffect, useState } from "react";
import "./search.css"
import postService from "../../service/PostService";
import { useLocation } from "react-router-dom";

function Search(){

    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);
    const [likes, setLikes] = useState(0);
    const [searchPost, setSearchPost] = useState([])

    const location = useLocation();
    const searchTitle = location.state.title.search

    const like = ()=>{

        if(!upVote && !downVote){
            setUpVote(true);
            setLikes((prev) => prev+1)
        }
        else if(!upVote && downVote){
            setDownVote(false);
            setUpVote(true);
            setLikes((prev) => prev+1)
        }
        else{
            setUpVote(false);
            setLikes((prev) => prev-1)
        }
    }

    const disLike = ()=>{
        
        if(!upVote && !downVote){
            setDownVote(true);
        }
        else if(upVote && !downVote){
            setUpVote(false);
            setDownVote(true);
            setLikes((prev) => prev-1);
        }
        else{
            setDownVote(false)
        }
    }

    const urlComponent = encodeURIComponent(JSON.stringify({"title":searchTitle}));

    useEffect(()=>{
        search();
    },[searchTitle])

    const search = ()=>{
        postService.search(urlComponent).then((res)=>{
            setSearchPost(res.data.data);
            console.log(res.data.data);
        })
    }

    return(<Container className="search-container">
        <Box className="search-res-wrapper">
             <Box className="search-result-container">
                Search Results
             </Box>
             {
                searchPost?.map((feed,indx)=>(
                    <Box className="search-QNA-container" key={indx}>
                        <Box className="search-QNA-box">
                            <Box>
                                <b>{feed.title}</b>
                            </Box>
                            <Box>
                                {feed.content}
                            </Box>
                        </Box>
                        <Box className="search-like-btn">
                            <Button startIcon={<RxThickArrowUp color='blue'/>} 
                                className='upvote-btn' 
                                sx={{backgroundColor:"#F7F7F7",color:"#636466"}}
                                onClick={like}
                            >
                                U<span>pvote</span> · {feed.likeCount}</Button>
                            <Button startIcon={<RxThickArrowDown className={downVote && "red-btn"} />} 
                                className='downvote-btn' 
                                sx={{backgroundColor:"#F7F7F7",color:"#636466"}}
                                onClick={disLike}
                            ></Button>
                        </Box>
                    </Box>
                ))
             }
        </Box>
    </Container>
)}

export default Search
import http from "../http-interceptor";

const getFeeds = (page=0) => {
    return http.get(`https://academics.newtonschool.co/api/v1/quora/post?limit=100&page=${page}`);
};
const addPost = (formData) => {
    return http.post(`https://academics.newtonschool.co/api/v1/quora/post/`,formData);
};

const getComments = (id)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/quora/post/${id}/comments`);
}
const addComments = (id,content)=>{
    return http.post(`https://academics.newtonschool.co/api/v1/quora/comment/${id}`,content);
}
const deleteComment = (commentId)=>{
    return http.delete(`https://academics.newtonschool.co/api/v1/quora/comment/${commentId}`);
}
const getSpace =(page=0)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/quora/channel?limit=100&page=${page}`);
}

const getChannel = (id)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/quora/channel/${id}`);
}

const getChannelPost = (id)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/quora/channel/${id}/posts`);
}

const createChannel = (formData) => {
    return http.post(`https://academics.newtonschool.co/api/v1/quora/channel/`,formData);
};

const getPost = (id)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/quora/post/${id}`)
}

const getCommentUser = (id)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/quora/user/${id}`)
}

const follow = (channel_id)=>{
    return  http.post(`https://academics.newtonschool.co/api/v1/quora/follow/:${channel_id}`)
}

const unfollow= (channel_id)=>{
    return  http.delete(`https://academics.newtonschool.co/api/v1/quora/follow/:${channel_id}`)
}

const upVote = (post_id)=>{
    return  http.post(`https://academics.newtonschool.co/api/v1/quora/like/${post_id}`)
}

const downVote = (post_id)=>{
    return  http.delete(`https://academics.newtonschool.co/api/v1/quora/like/${post_id}`)
}

const deletePost = (post_id)=>{
    return http.delete(`https://academics.newtonschool.co/api/v1/quora/post/${post_id}`)
}

const postService = {
    getFeeds,
    addPost,
    getComments,
    addComments,
    deleteComment,
    getSpace,
    getChannel,
    getChannelPost,
    createChannel,
    getPost,
    getCommentUser,
    follow,
    unfollow,
    upVote,
    downVote,
    deletePost
}

export default postService
import http from "../http-interceptor";

const getFeeds = (page=0) => {
    return http.get(`https://academics.newtonschool.co/api/v1/quora/post?limit=100&page=${page}`);
};
const addPost = (formData) => {
    return http.post(`https://academics.newtonschool.co/api/v1/quora/post/`,formData);
};

const getComments = (id)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/quora/post/${id}/comments`)
}
const addComments = (id,content)=>{
    return http.post(`https://academics.newtonschool.co/api/v1/quora/comment/${id}`,content)
}
const deleteComment = (commentId)=>{
    return http.delete(`https://academics.newtonschool.co/api/v1/quora/comment/${commentId}`)
}


const postService = {
    getFeeds,
    addPost,
    getComments,
    addComments,
    deleteComment,
}

export default postService
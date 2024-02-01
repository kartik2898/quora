import http from "../http-interceptor";

const getFeeds = (page=0) => {
    return http.get(`/quora/post?limit=100&page=${page}`);
};

const postService = {
    getFeeds,
}

export default postService
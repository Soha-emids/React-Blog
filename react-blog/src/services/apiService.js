import axios from "axios";

const API_BASE_URL='https://dummyjson.com/';

const apiService={
getPosts: async () =>{
    try{
        const response=await axios.get(`${API_BASE_URL}/posts`);
    return response.data.posts;

    }catch(error){
        console.log('Error fetching posts: ',error);
        throw error;
    }
},


getPostsById: async (id)=>{
try{
const response=await axios.get(`${API_BASE_URL}/posts/${id}`);
return response.data;
}
catch(error){
    console.log(`Error fetch post ${id}: `,error);
    throw error;
}
},


createPost: async (postData) =>{
try{
    const response=await axios.post(`${API_BASE_URL}/posts/add`,postData);
    return response.data;
}
catch(error){
    console.log('Error posting data: ',error);
    throw error;
}
},


getPostComments: async (id) =>{
    try{
    const response= await axios.get(`${API_BASE_URL}/posts/${id}/comments`);
    return response.data.comments;
    }catch(error){
        console.log('Error loading comments: ',error);
        throw error;
    }
}
}

export default apiService;
import { useState } from "react";
import apiService from '../services/apiService';

const CreatePostForm=({onPostCreated})=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [isSubmitting,setIsSubmitting]=useState(false);

    const handleSubmit= async (e) =>{
        e.preventDefault();
        setIsSubmitting(true);

        try{
            const newPost={
                title,body,userId:1,
            }
            const createPost =await apiService.createPost(newPost);
            alert('Post created successfully.')
            onPostCreated(createPost);
            setTitle('');
            setBody('');

        }catch(error){
            console.error('Error creating post: ',error);
            alert('Failed to create post. Please try again.');
        }finally{
            setIsSubmitting(false);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="mb-4 rounded bg-light p-3">
            <div className="mb-3">
                <label className="form-label fw-bold">Title</label>
                <input 
                className="form-control"
                type="text"
                name="title"
                value={title}
                id="postTitle"
                placeholder="Enter post title"
                onChange={(e)=>setTitle(e.target.value)}
                required
                disabled={isSubmitting}/>
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Content</label>
                <textarea 
                className="form-control"
                name="body"
                value={body}
                id="postContent"
                placeholder="Enter post content"
                onChange={(e)=>setBody(e.target.value)}
                required
                disabled={isSubmitting}></textarea>
            </div>

            <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Post'}
            </button>

        </form>
    )
}

export default CreatePostForm;

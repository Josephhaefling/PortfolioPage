import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../actions/blogs';
import Input from './input';

const NewBlogForm = (): any => {

    const [ blogData, setBlogData ] = useState({
        title: '',
        content: '',
        images: [''],
        tags: [''],
        likeCount: {
            type: 0,
            default: 0
        },
        createdAt: {
            type: "",
            // default: new Date()
    }
})

const dispatch = useDispatch()

const handleSubmit = (e : any) => {
    console.log(blogData)
    e.preventDefault()
    dispatch(createBlog(blogData))
    clear()
}

const clear = () => {
    blogData.title = ''
    blogData.content = ''
}

return (
    <form className="new-blog">
        <Input inputType={"title"} /> 
        <Input inputType={"paragraph"} /> 
        <Input inputType={"image"} /> 
        <Input inputType={"tags"} /> 
        <Input inputType={"type"} /> 
        <button 
            className="submit-button"
            onClick={handleSubmit}
        >Publish
        </button>
    </form>
)
}

export default NewBlogForm
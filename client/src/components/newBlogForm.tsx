import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../actions/blogs';

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
        <label htmlFor="blog-title"> Title:
            <input 
                className="blog-title" 
                type="text"
                onChange={(e) => setBlogData({...blogData, title: e.target.value})}
            ></input>
        </label>
        <label htmlFor="content"> Content:
            <textarea 
                className="content"
                onChange={(e) => setBlogData({...blogData, content: e.target.value})}
            ></textarea>
        </label>
        <label htmlFor="images"> Image:
            <input 
                className="images"
                onChange={(e) => setBlogData({...blogData, images: [...blogData.images, e.target.value]})}
            ></input>
        </label>
        <label htmlFor="tags"> Tags:
            <input 
                className="tags"
                onChange={(e) => setBlogData({...blogData, tags: [...blogData.tags, e.target.value]})}
            ></input>
        </label>
        <label htmlFor="type"> Type:
            <input 
                className="type" 
                type="text"
                onChange={(e) => setBlogData({...blogData, createdAt: {type: e.target.value,}})}
            ></input>
        </label>
            {/* <button 
                className="like-count" 
                onChange={(e) => setBlogData({
                    ...blogData, likeCount: {type: 1, default: blogData.likeCount.type += 1,}
                })
            }
            >Like</button> */}
            <button 
                className="submit-button"
                onClick={handleSubmit}
            >Publish</button>
    </form>
)
}

export default NewBlogForm
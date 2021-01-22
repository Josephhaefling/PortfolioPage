import React, { useState } from 'react';

const UseInput = (props: any) => {
    
    const { inputType } = props 
    
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

    switch (inputType) {
        case "title":
            return (
                <label htmlFor={ inputType }> Title:
                    <input 
                        className={ inputType } 
                        type="text"
                        onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                    ></input>
                </label>
            )
        case "tags":
            return (
                <label htmlFor={ inputType }> Tags:
                    <input 
                        className={ inputType } 
                        type="text"
                        onChange={(e) => setBlogData({...blogData, tags: [...blogData.tags, e.target.value]})}
                    ></input>
                </label>
            )
        case "type": 
        return (
            <label htmlFor={  inputType }> Type:
                <input 
                    className={ inputType } 
                    type="text"
                    onChange={(e) => setBlogData({...blogData, createdAt: {type: e.target.value,}})}
                ></input>
            </label>
        )
        case "paragraph":
            return (
                <label htmlFor={ inputType }> Content:
                    <textarea 
                        className={ inputType }
                        onChange={(e) => setBlogData({...blogData, content: e.target.value})}
                    ></textarea>
                </label>
            )
        case "image":
            return (
                <label htmlFor={ inputType }> Image:
                    <input
                        className={ inputType }
                        onChange={(e) => setBlogData({...blogData, images: [...blogData.images, e.target.value]})}
                    ></input>
                </label>  
            )
    }
}

export default UseInput
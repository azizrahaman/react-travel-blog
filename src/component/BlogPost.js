import React from 'react';
import { IoIosPin } from 'react-icons/io';

export default function BlogPost(props) {
    return (
        <div className='blog--wrapper'>
            <img src= {`images/${props.imageUrl}`} className='blog--image' alt="blog"/>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <IoIosPin className='location-icon'/>
                    <p className='blog-post-header-country'>{props.location}</p>
                    <a href={props.googleMapsUrl} className='blog-post-header-link'>Viw on google maps</a>
                </div>
                <h1 className='blog-post-title'>{props.title}</h1>
                <p className='blog-post-date'>{props.startDate} - {props.endDate}</p>
                <div className='blog-post-details'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { GoLocation } from 'react-icons/go';

export default function BlogPost() {
    return (
        <div className='blog--wrapper'>
            <img src='images/travel1.png' className='blog--image' alt="blog image"/>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <GoLocation />
                    <p className='blog-post-header-country'>JAPAN</p>
                    <a href='https://maps.google.com' className='blog-post-header-link'>View on google maps</a>
                </div>
                <h1 className='blog-post-title'>Mount Fuji</h1>
                <p className='blog-post-date'>12 Jan, 2022 - 24 Jan, 2022</p>
                <div className='blog-post-details'>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </div>
            </div>
        </div>
    )
}
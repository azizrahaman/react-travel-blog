import React from "react";
import Topbar from "./component/Topbar";
import BlogPost from "./component/BlogPost";
import Posts from "./component/Data.js";

export default function App() {

    const blogPosts = Posts.map(data=>{
        console.log(data);
        return <BlogPost 
            key={data.id}
            location={data.location}
            googleMapsUrl={data.googleMapsUrl}
            startDate={data.startDate}
            endDate={data.endDate}
            description={data.description}
            imageUrl={data.imageUrl}
          
        />
    });
    return (
        <div>
            <Topbar />
            {blogPosts}
        </div>
    )
}
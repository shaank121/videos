import React from 'react';
const VideoItem = ({video})=>{
    return (
        <div><div  className="ui segment">
            <img src={video.snippet.thumbnails.medium.url} ></img>
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description} </p>
        </div>
         </div>
            
        
        );
};

export default VideoItem;

import React from 'react';


const VideoListItem=({video,onVideoSelect})=>{
    const imageUrl=video.snippet.thumbnails.default.url;
    return(
            <li onClick={()=>onVideoSelect(video)} className="list-group-item">
                <div className="video-list media" style={{cursor:'pointer'}}>
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} /><span></span>
                    </div>

                    <div className="media-body" >
                        <br/>
                        <div className="media-heading" style={{margin:'10px'}}>{video.snippet.title}</div>
                    </div>
                </div>
            </li>
    );

}

export default VideoListItem;
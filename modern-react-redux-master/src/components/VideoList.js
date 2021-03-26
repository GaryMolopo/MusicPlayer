import React from 'react';
import VideoItem from './VideoItem';


//destructure
const VideoList = ({videos , handleVideoSelect}) => {

    //map over videoList
    const renderedVideos =  videos.map((video) => {
        //return videoItem with props
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
      
    });

    //return videos

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;
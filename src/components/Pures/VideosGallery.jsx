import React from 'react';
import { Player } from 'video-react'

const VideosGallery = () => {
    return (
        <>
            <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
            <div className='d-flex gap-4 w-100 flex-wrap justify-content-center px-xl-3'>
                <div style={{ width: '420px', boxShadow: '0 0 10px grey' }}>
                    <Player
                        poster='https://i.imgur.com/wUJ5cEK.jpg'
                    >
                        <source src='vidEdwin.mp4' />
                    </Player>
                </div>
            </div>
        </>
    );
}

export default VideosGallery;

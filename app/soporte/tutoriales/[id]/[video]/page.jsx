"use strict";
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Page = () => {
    const router = useRouter();
    const id = router.pathname.split("/").pop();
    console.log(id);
    const [videoUrl, setVideoUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const videoUrls = {
                "1": "https://www.w3schools.com/html/mov_bbb.mp4",
                "2": "https://www.w3schools.com/html/movie.mp4",
                "3": "https://vimeo.com/90221441"
            };
            
            setVideoUrl(videoUrls[id]);
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!videoUrl) {
        return <div>Video not found</div>;
    }

    return (
        <div>
            <Head>
                <title>Video {id}</title>
            </Head>
            <main>
                <h1>Video {id}</h1>
                <video width="600" controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </main>
        </div>
    );
};

export default Page;

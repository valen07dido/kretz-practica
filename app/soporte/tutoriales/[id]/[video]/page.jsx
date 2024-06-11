"use client";
import axios from 'axios';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const page = () => {
    const id =usePathname().split("/").pop()
    console.log(id)
    const [videoUrl, setVideoUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            // Simula una llamada a una API para obtener la URL del video
            // Aquí puedes implementar la lógica para obtener la URL del video desde una API real
            // Ejemplo: setVideoUrl(`https://example.com/videos/${id}.mp4`);

            // Para este ejemplo, usaremos una URL fija
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


export default page;
import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './IG_slider.css';
// import required modules
import { Navigation } from 'swiper/modules';


function IG_slider() {
    // Get jsonData with IG media links from behold.so
    const [jsonData, setJsonData] = useState(null); // State to store the fetched JSON data
    const [mediaUrls, setMediaUrls] = useState([]); // State to store mediaUrls
    const [permalinks, setPermalinks] = useState([]); // State to store permalinks

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://feeds.behold.so/VUuBYeBClu8sQrXlfwbp');
                const data = await response.json();
                setJsonData(data); // Store the fetched JSON data in the state
                // Why is it when I use (json) it fails? Both json and data contain the same json? 
                // How can I highlight comments for nonvscode?
                console.log({data})
                console.log({jsonData})
                extractMediaUrlsAndPermalinks(data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    function extractMediaUrlsAndPermalinks(data) {
        const urls = data.map(item => item.mediaUrl);
        const links = data.map(item => item.permalink);
        setMediaUrls(urls);
        setPermalinks(links);
    }
    
    const renderedSwiperSlides = mediaUrls.map((url, index) => (
    <SwiperSlide key={index}>
        <a href={permalinks[index]} target="_blank" rel="noopener noreferrer">
            <img src={url} alt={`Slide ${index + 1}`} />
        </a>
    </SwiperSlide>
    ));

    return (
        <div className="IG_slider">
            <h1>Social media</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {renderedSwiperSlides}
            </Swiper>
        </div>
    );
}

export default IG_slider;

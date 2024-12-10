import react, { useEffect, useState } from 'react';
import Top_Navbar from '../Top_Navbar/Top_Navbar';
import Play_Card from '../Play_Card'
import './Right_Menu.css'

function Right_Menu() {
    const [videos, setVideos] = useState([]);
    const [Searchvalue, SetSearchvalue] = useState("");

    const Key = "AIzaSyD7UOvuFNnA8zwkRi9icRoVN_bE40XaNwk";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${Searchvalue}&type=video&maxResults=16&key=${Key}`;

    const fetch_data = () => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const transformedData = data.items.map((item) => ({
                    id: item.id.videoId || item.id, // Handle both "search" and "videos" responses
                    thumb: item.snippet.thumbnails.high.url,
                    title: item.snippet.title,
                    channel: item.snippet.channelTitle,
                }));
                setVideos(transformedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        if (Searchvalue) {
            fetch_data();
        }
    }, [Searchvalue]); // Trigger fetch when Searchvalue changes

    return (
        <>
            <div>
                <Top_Navbar SetSearchvalue={SetSearchvalue} />
                <div className="videos_menu">
                    {videos.map((data) => (
                        <div className="video_card" key={data.id}>
                            <Play_Card data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Right_Menu;

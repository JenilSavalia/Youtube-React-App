import './Play_Card.css'
import image from '../assets/Thumbnail-1.png'
import image2 from '../assets/Ellipse 1 (1).png'
import image3 from '../assets/verified.png'
import { useState } from 'react'

function Play_Card({ data }) {

    const [thumbClicked, SetthumbClicked] = useState(false);

    function ThumbnailClick() {
        SetthumbClicked(true)
    }
    return (

        <>
            {
            thumbClicked ?
                (<iframe
                    width={"450vh"}
                    height={"270vh"}
                    src={`https://www.youtube.com/embed/${data.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={data.title}
                    frameBorder="0"
                ></iframe>) : (<img src={data.thumb} alt=""
                    width={"450vh"}
                    height={"270vh"}
                    className="Youtube_Img"
                    onClick={ThumbnailClick}
                />
                )}


            <div className="video_card_title">
                <img src={image2} alt="" />
                <span>{data.title}</span>
            </div>

            <div className="video_card_title_2">
                <div>{data.channel}<img src={image3} alt="" width={"13vh"} /></div>
                {/* <div>{data.meta}</div> */}
            </div>
        </>

    )


}

export default Play_Card;
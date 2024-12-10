import './Play_Card.css'
import image from '../assets/Thumbnail-1.png'
import image2 from '../assets/Ellipse 1 (1).png'
import image3 from '../assets/verified.png'

function Play_Card({ data }) {

    return (

        <>
            <img src={data.thumb} alt="" width={"350vh"} className="Youtube_Img"  />
            <div className="video_card_title">
                <img src={data.channel_img} alt="" />
                <span>{data.title}</span>
            </div>

            <div className="video_card_title_2">
                <div>{data.channel}<img src={image3} alt="" width={"13vh"} /></div>
                <div>{data.meta}</div>
            </div>
        </>

    )


}

export default Play_Card;
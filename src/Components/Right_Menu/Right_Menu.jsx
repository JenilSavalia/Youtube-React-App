import Top_Navbar from '../Top_Navbar/Top_Navbar';
import Play_Card from '../Play_Card'
import './Right_Menu.css'

function Right_Menu() {

    const video_card = [
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
        {
            image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Thumbnail-11.png?raw=true',
            channel_img: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%204%20(1).png?raw=true',
            title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita',
            channel_title: 'Coke Studio Bangla',
            meta: '1.5Mviews • 2 days ago'
        },
    ]

    return (

        <>
            <div>
                <Top_Navbar />
                <div className="videos_menu">
                    {
                        video_card.map((data) => (

                            <div className="video_card">
                                <Play_Card data={data} />
                            </div>

                        ))
                    }
                </div>

            </div>
        </>

    )

}

export default Right_Menu;
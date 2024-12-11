import './Left_Menu.css'
import Left_Menu_Links from './Left_Menu_Links'
import logo from '../../assets/Youtube logo.png'
import hambarger from '../../assets/hambarger.png'

function Left_Menu({Setleftmenu}) {

    const list_1 = [
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Home' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/explore.png?raw=true', title: 'Explores' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/shorts.png?raw=true', title: 'Shorts' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/subscription.png?raw=true', title: 'Subscriptions' },
    ]
    const list_2 = [
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/library.png?raw=true', title: 'Library' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/history.png?raw=true', title: 'History' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/your_video.png?raw=true', title: 'Your Videos' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/watch_later.png?raw=true', title: 'Watch Later' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/liked.png?raw=true', title: 'Liked Videos' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/leftBottom.png?raw=true', title: 'Show More' }
    ]
    const Subscriptions = [
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla1' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla2' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla3' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla4' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla5' },
    ]

    function ExplorNow() {
        Setleftmenu('ExploreNow')
    }
    function ytShorts() {
        Setleftmenu('ytShorts')
    }
    function Subscription() {
        Setleftmenu('Subscription')
    }
    return (

        <>
            <div className="left_menu">

                <div className="left_menu_logo">
                    <img src={hambarger} alt="" width={"30px"} />
                    <img src={logo} alt="" className="youtube_logo" />
                </div>


                < Left_Menu_Links details={list_1[0]} key={list_1[0].title} />
                < Left_Menu_Links details={list_1[1]} key={list_1[1].title} onClick={ExplorNow} />
                < Left_Menu_Links details={list_1[2]} key={list_1[2].title} onClick={ytShorts} />
                < Left_Menu_Links details={list_1[3]} key={list_1[3].title} onClick={Subscription} />

                <hr />

                {
                    list_2.map((details) => (
                        <Left_Menu_Links details={details} key={details.title} />
                    )
                    )
                }

                <hr />

                {
                    Subscriptions.map((details) => (
                        <Left_Menu_Links details={details} key={details.title} />
                    )
                    )
                }


            </div>


        </>

    )

}


export default Left_Menu
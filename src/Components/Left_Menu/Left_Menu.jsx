import './Left_Menu.css'
import Left_Menu_Links from './Left_Menu_Links'
import logo from '../../assets/Youtube logo.png'
import hambarger from '../../assets/hambarger.png'

function Left_Menu() {

    const list_1 = [
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Library' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'History' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Your Videos' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Watch Later' },
    ]
    const list_2 = [
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Library' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'History' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Your Videos' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Watch Later' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Liked Videos' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/home.png?raw=true', title: 'Show More' }
    ]
    const Subscriptions = [
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla' },
        { image: 'https://github.com/PatelNeelMahesh/full_stack/blob/main/react/clones_assets/Youtube/assets/Ellipse%201%20(3).png?raw=true', title: 'Coke Studio Bangla' },
    ]


    return (

        <>
            <div className="left_menu">

                <div className="left_menu_logo">
                    <img src={hambarger} alt="" width={"30px"} />
                    <img src={logo} alt="" className="youtube_logo" />
                </div>




                {
                    list_1.map((details) => (
                        <Left_Menu_Links details={details} key={details.title} />
                    )
                    )
                }

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
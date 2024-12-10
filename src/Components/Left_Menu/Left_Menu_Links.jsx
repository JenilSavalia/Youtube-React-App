import './Left_Menu.css'


function Left_Menu_Links({ details }) {
    return (

        <>
            <div className="inner_menu_box" >
                <img src={details.image} alt="" />
                <div>{details.title}</div>
            </div>
        </>

    )
}


export default Left_Menu_Links;
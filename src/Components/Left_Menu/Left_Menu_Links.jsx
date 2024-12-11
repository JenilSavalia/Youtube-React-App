import './Left_Menu.css'


function Left_Menu_Links({ details ,onClick}) {
    return (

        <>
            <div className="inner_menu_box" onClick={onClick}>
                <img src={details.image} alt="" />
                <div>{details.title}</div>
            </div>
        </>

    )
}


export default Left_Menu_Links;
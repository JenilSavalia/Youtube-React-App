import './Search.css'
import srch from '../../assets/search.png'
import upload from '../../assets/create.png'


function Search() {

    return (

        <>
            <div className="top_navbar">

                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <button>
                        <i className="search-icon"><img src={srch} alt="" /></i>
                    </button>
                </div>

                <div className="right_icons">
                    <img src={upload} alt="" />
                    <img src={upload} alt="" />
                    <img src={upload} alt="" />
                    <img src={upload} alt="" />
                </div>

            </div>

        </>


    )
}

export default Search;
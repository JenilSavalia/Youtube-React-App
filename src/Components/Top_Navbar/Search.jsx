import './Search.css'
import srch from '../../assets/search.png'
import upload from '../../assets/create.png'
import react, { useEffect, useState } from 'react';     

function Search({ SetSearchvalue }) {
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        SetSearchvalue(inputValue); // Trigger search when button is clicked
    };

    const handleChange = (event) => {
        setInputValue(event.target.value); // Update internal input value
    };

    return (
        <>
            <div className="top_navbar">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search"
                        value={inputValue} // Bind input value
                        onChange={handleChange} // Update on user input
                    />
                    <button onClick={handleClick}>
                        <i className="search-icon">
                            <img src={srch} alt="" />
                        </i>
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
    );
}

export default Search;

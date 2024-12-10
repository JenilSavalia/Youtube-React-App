import './Tags.css'

function Tags() {

    const tags = [
        { id: 1, keyword: 'All' },
        { id: 2, keyword: 'Coke Studio' },
        { id: 3, keyword: 'Insian' },
        { id: 4, keyword: 'sdsdsdsd' },
        { id: 5, keyword: 'ffffffff' }
    ]

    return (

        <>
            <div className="line"></div>
            <div className="top_navbar_2">

                {
                    tags.map((data) => (
                        <div className="keyword" key={data.id}>{data.keyword}</div>
                    )
                    )
                }

            </div>
            <div className="line"></div>
        </>

    )
}

export default Tags;
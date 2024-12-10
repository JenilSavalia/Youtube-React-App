import Search from './Search';
import Tags from './Tags';

function Top_Navbar({ SetSearchvalue }) {
    return (
        <>
            <div>
                <Search SetSearchvalue={SetSearchvalue} />
                <Tags />
            </div>
        </>
    );
}

export default Top_Navbar;

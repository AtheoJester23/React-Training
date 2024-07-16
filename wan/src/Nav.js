import { Link } from "react-router-dom";

const Navnav = () => {
    return (  
        <nav className="navbar bg-dark p-3">
            <h2 className="text-secondary">Website title</h2>

            <div className="d-flex gap-2">
                <Link to="/" className="btn border border-light text-light">Home</Link>
                <Link to="/create" className="btn border border-warning text-warning">Create</Link>
            </div>
        </nav>
    );
}
 
export default Navnav;
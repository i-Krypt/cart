import { Link } from "react-router-dom";

export const Navbar = () => (
    <div className="bg-slate-400 mb-4 p-6 flex justify-between">
        <div className="items-center space-x-4">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Store">Store</Link>
        </div>
        <div className="">
            <a href="">Cart</a>
        </div>


    </div>
);
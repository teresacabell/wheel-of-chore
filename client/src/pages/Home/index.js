import React from "react";
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>This Is Home</h1>
            <Link to={"/signup"}     ><button> 
                 Sign Up
            </button>
            </Link>
        </div>
    )
}
export default Home;
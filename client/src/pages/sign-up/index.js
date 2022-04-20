import React, { useState} from "react";
import ReactDom from "react-dom";
import { use } from "../../../../server/routes/api";

function SignUpForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const user = event.target.user;
        const email = event.target.email;
        const password = event.target.password;
        setInputs(value => ({...value, [user]: value, [email]: value, [password]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <label> Enter User Name:
                <input
                type="text"
                placeholder="Username"
                value={inputs.username || ""}
                onChange={handleChange} />
            </label>
            <label> Email:
                <input 
                type="email"
                placeholder="Email"
                value={inputs.email || ""}
                onChange={handleChange} />
            </label>
            <label> Password:
                <input
                type="password"
                placeholder="Password"
                value={inputs.password || ""}
                onChange={handleChange}/>
            </label>

        </form>
    )
};  

ReactDom.render(<SignUpForm />, document.getElementById('root'));

export default SignUpForm;
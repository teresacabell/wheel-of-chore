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
}  



export default SignUpForm;
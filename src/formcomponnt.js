import React, { useState } from "react";
import './App.css'
import validation from './validatedata'
export default function App() {

    const [values, setvalues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [errors,setError] = useState({})

    const handleChange = (event) => {
        setvalues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        console.log("hjuhu");
      setError(validation(values));
    }
    return (
        <div className="cointainer">
            <div className="content">
            </div>
            <div className="hfg">
                <form onSubmit={handlesubmit}>
                    <input placeholder="name" name="fullname" class="inputclass" onChange={handleChange} />
                    {errors.fullname && <p style={{ marginTop: "15%",position:"absolute",marginLeft:"10%",color:"red" }} className="error">{errors.fullname}</p>}
                    <input type="text" name="email" placeholder="email" onChange={handleChange} className='loginget' style={{ marginTop: "20%" }} />
                    {errors.email && <p style={{ marginTop: "28%",position:"absolute",marginLeft:"10%",color:"red" }} className="error">{errors.email}</p>}
                    <input type="text" name="password" onChange={handleChange} className='loginget' placeholder='password' style={{ marginTop: "33%" }}></input>
                    {errors.password && <p style={{ marginTop: "40%",position:"absolute",marginLeft:"10%",color:"red" }} className="error">{errors.password}</p>}
                    <button className="buttonclass"> Submit </button>
                </form>
            </div>
        </div>
    );
}

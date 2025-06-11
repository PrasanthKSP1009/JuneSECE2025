import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const login = () =>{
        alert("Signup Successful");
        navigate('/login');
    }
    return (
        <section>
            <h1>Signup</h1>
            <form onSubmit={login}>
                <label htmlFor="fname">Enter your First Name:</label>
                <input type="text" placeholder="Enter your First Name"/>
                <br />
                <br />
                <label htmlFor="lname">Enter your Last Name:</label>
                <input type="text" placeholder="Enter your Last Name"/>
                <br />
                <br />
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Enter your User Name"/>
                <br />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter your Email ID"/>
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Enter your Password"/>
                <br />
                <br />
                <label htmlFor="cnf-password">Confirm Password:</label>
                <input type="password" placeholder="Enter your Password"/>
                <br />
                <br />
                <button>Signup</button>
                <p>Already have an account?? <Link to='/login'>Login</Link></p>
            </form>
            
        </section>
    )
}
export default Signup;
import { Link } from "react-router-dom";
const Login = () => {
    function userPass(){
        console.log("Welcome to the Login Page");
        alert("Welcome to the Login Page");
    }
    return (
        <section>
            <h1>Login</h1>
            <form action='samplee.html' onSubmit={userPass} method="POST" target="_blank">
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Enter your User Name"/>
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Enter your Password"/>
                <br />
                <br />
                <button>Login</button>
                <p>Create an account?? <Link to='/signup'>Signup</Link></p>
            </form>
            
        </section>
    )
}
export default Login;
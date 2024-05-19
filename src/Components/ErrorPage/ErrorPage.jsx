import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>"Opps data Not found"</h2>
            <Link to="/">click me to Go back Home</Link>
        </div>
    );
};

export default ErrorPage;
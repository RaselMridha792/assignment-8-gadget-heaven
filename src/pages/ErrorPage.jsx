import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div className="min-h-screen items-center justify-center flex flex-col">
            <h1 className="text-4xl text-purple-500 font-bold">Error/ 404 not found</h1>
            <button onClick={handleGoBack} className="btn btn-primary">Go back</button>
            
        </div>
    );
};

export default ErrorPage;
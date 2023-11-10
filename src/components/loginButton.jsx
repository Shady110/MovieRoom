import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {

    const  { loginWithRedirect, isAuthenticated } = useAuth0();


    return (

        !isAuthenticated && (
            <button onClick={()=>loginWithRedirect()} className="btn btn-light">
                Sign in
            </button>
        )


    )
}

export default LoginButton;
import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
 
const Private = () => {
    const{actions} = useContext(Context)
    const [isAuthenticated, setIsAuthenticated] = useState("pending")

    useEffect(() => {
        let authenticate = async () => {
            try {
                const result = await actions.goPrivate();
                setIsAuthenticated(result ? "yes" : "no")
            } catch (error) {
                console.error("error occured durring authentication", error)
                setIsAuthenticated("no");

            }
        };
        authenticate();
    }, [actions])
    
    switch(isAuthenticated){
        case "pending": 
            return(
                <div className="text-center mt-5">
                    <h1> 
                    authentication in pogress
                    </h1>
                    <p>please wait while we authorize you</p>
                </div>
            )
        case "yes": 
            return(
                <div className="text-center mt-5">
                    <h1> 
                    private page
                    </h1>
                    <p>You have been successfully logged in.</p>
                </div>
            )
        case "no": 
            return(
                <div className="text-center mt-5">
                    <h1> 
                    access denied
                    </h1>
                    <p>please try logging in again. could not authenticate</p>
                    <Link to= "/login">
                        <p>login</p>
                    </Link>
                </div>
            )
        }
}
export default Private;
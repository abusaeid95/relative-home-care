import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner style={{ marginLeft: "40rem" }} animation="border" variant="success" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={
                            {
                                pathname: "/signin",
                                state: { from: location }
                            }
                        }
                    >

                    </Redirect>
                )
            }
        >

        </Route>
    );
};

export default PrivateRoute;

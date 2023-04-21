import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("sign Out successful", user)
            })
            .catch(error => {
                console.log('unexpected error occurred', error)
            })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between">
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/registar'>Registar</Link>
                </div>
                <div>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-active btn-accent text-white">Log Out</button>
                        </> : <Link to="/login">
                            <button className="btn btn-active btn-accent text-white">Log In</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
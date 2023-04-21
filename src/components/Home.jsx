import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const {displayName} = useContext(AuthContext)
    console.log(displayName)
    return (
        <div>
            this is from {displayName}
        </div>
    );
};

export default Home;
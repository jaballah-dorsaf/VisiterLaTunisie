import React from 'react'
import app from './base';

const Hom = () => {
    return (
        <div>
            <h3>Hom</h3>
            <button onClick={() => app.auth().signOut()} >Sign Out</button>
        </div>
    )
}

export default Hom




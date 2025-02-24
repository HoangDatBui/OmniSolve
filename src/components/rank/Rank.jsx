import React from 'react';
import './Rank.css';

function Rank() {
    return (
        <div>
            <div className='white f4 rank-text'>
                {'Hey, your current rank is '}
            </div>
            <div className='white f2 rank-number'>
                {'#1'}
            </div>
        </div>
    );
}

export default Rank;
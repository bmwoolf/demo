import React from 'react';
//might need to do two separate ones with the same styling/ flexbox in compare container
import ResultBox from '../components/ResultBox.jsx';
import TimeBox from '../components/TimeBox';

const NoCacheQL = (props) => {
    return ( 
        <div>
            <h2>nochacheql container</h2>
            <TimeBox />
            <ResultBox />
        </div>
     );
}
 
export default NoCacheQL;
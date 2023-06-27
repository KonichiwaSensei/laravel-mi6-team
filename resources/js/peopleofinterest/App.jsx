import { useState } from 'react';
import  People  from './components/People';
import Missions from './components/Missions';

export function App () {
    const [content, setContent] = useState('');
    
    const chooseComponent = () => {
        if (content == 'people-of-interest'){
            return  <People />
        }
        else if (content == 'missions'){
            return <Missions/>
        }
        else {
            return 'FUN FUN FUN'
        }
    }
    return (
        <>

            <h1 className="title_text">P.o.I Database</h1>

            <button onClick={() => setContent('people-of-interest')}>People-of-interest</button>
            <button onClick={() => setContent('missions')}>Missions</button>
            
            {chooseComponent()}
        </>
    );
}
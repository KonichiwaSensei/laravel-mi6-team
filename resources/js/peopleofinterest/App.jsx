import { useState } from "react";
import People from "./components/People";
import Missions from "./components/Missions";


export function App() {

    const [content, setContent] = useState('')

    const returnContent = () => {
        if (content === 'people-of-interest') {
            return <People />
        }
        if (content === 'missions') {
            return <Missions />
        }
        else {
            return <div className="setContent__button_message">Click a button above to get to a sub-category</div>
        }
    }

    return (
        <>

            <h1 className="title_text">P.o.I Database</h1>

            <div className={'setContent__div'}>
                <button className={'setContent__button_ele'} onClick={() => setContent('people-of-interest')}>P.o.I</button>
                <button className={'setContent__button_ele'} onClick={() => setContent('missions')}>Missions</button>
                {returnContent()}
            </div>

        </>
    );

}
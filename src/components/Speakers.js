import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import Header from "./Header";
import { useState } from 'react';

function Speakers() {
    const [showSessions, setShowSessions] = useState(true);
    const [theme, setTheme] = useState('light');

    return (
        <div className={`container-fluid ${theme}`}>
            <Header theme={theme}/>
            <SpeakersToolbar showSessions={showSessions} setShowSessions={setShowSessions} theme={theme} setTheme={setTheme}/>
            <SpeakersList data={data}/>
        </div>
    );
}

export default Speakers;
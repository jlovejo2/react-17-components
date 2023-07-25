import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import Header from "./Header";
import { speakerData } from "../../SpeakerData";

function Speakers() {
    return (
        <div className="container-fluid">
            <Header />
            <SpeakersToolbar />
            <SpeakersList data={speakerData} />
        </div>
    );
}

export default Speakers;
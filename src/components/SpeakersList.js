import { useContext } from 'react';
import Speaker from "./Speaker";
import ContentLoader from 'react-content-loader'
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";

// Create a custom loader
const MyLoader = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)


function SpeakersList() {
    const { data: speakersData, requestStatus, error, updateRecord, insertRecord, deleteRecord } = useRequestDelay(2000, data);
    const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className="text-danger">
                ERROR: <b>loading Speader Data Failed: {error}</b>
            </div>
        )
    }

    if (requestStatus === REQUEST_STATUS.LOADING) {
        return (
            <MyLoader />
        )
    }

    return (
        <div className="container speakers-list">
            <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord}/>
            <div className="row">
                { speakersData
                    .filter(function (speaker) {
                        if (speaker.first && speaker.last)
                            return (
                                speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
                            );
                    })
                    .filter(function(speaker) {
                        return (
                            speaker.sessions.find((session) => {
                                return session.eventYear === eventYear;
                            })
                        );
                    })
                    .map(function (speaker, index) {
                        return <Speaker key={speaker.id} speaker={speaker} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord}/>;
                    }) 
                }
            </div>
        </div>
    );
}

export default SpeakersList;
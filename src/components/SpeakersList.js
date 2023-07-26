import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect, Suspense } from 'react';
import ContentLoader from 'react-content-loader'

// Create a custom loader
const MyLoader = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)


function SpeakersList({ showSessions }) {
    const [speakersData, setSpeakersData ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise ((resolve) => setTimeout(resolve, ms));

    useEffect( () => {
        async function delayFunc() {
            try {
                await delay(2000);
                setIsLoading(false);
                setSpeakersData(data);
            } catch (err) {
                setIsLoading(false);
                setHasErrored(true);
                setError(err.message);
            }
        }

        delayFunc();
    },[]);

    function onFavoriteToggle(id) {
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const speaksRecUpdated = {
            ...speakersRecPrevious, 
            favorite: !speakersRecPrevious.favorite
        };
        const speakersDataNew = speakersData.map(function (rec) {
            return rec.id === id ? speaksRecUpdated : rec;
        });

        setSpeakersData(speakersDataNew);
    }

    if (hasErrored === true) {
        return (
            <div className="text-danger">
                ERROR: <b>loading Speader Data Failed: {error}</b>
            </div>
        )
    }

    if (isLoading === true) {
        return (
            <MyLoader />
        )
    }

    return (
        <div className="container speakers-list">
            <div className="row">
                { speakersData.map(function (speaker, index) {
                    return <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} onFavoriteToggle={() => onFavoriteToggle(speaker.id)}/>;
                }) }
            </div>
        </div>
    );
}

export default SpeakersList;
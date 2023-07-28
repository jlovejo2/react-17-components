import Speaker from "./Speaker";
import ContentLoader from 'react-content-loader'
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";


// Create a custom loader
const MyLoader = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)


function SpeakersList() {
    const { data: speakersData, requestStatus, error, updateRecord } = useRequestDelay(2000, data);


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
            <div className="row">
                { speakersData.map(function (speaker, index) {
                    return <Speaker key={speaker.id} speaker={speaker} onFavoriteToggle={(doneCallback) => updateRecord({...speaker, favorite: !speaker.favorite}, doneCallback)}/>;
                }) }
            </div>
        </div>
    );
}

export default SpeakersList;
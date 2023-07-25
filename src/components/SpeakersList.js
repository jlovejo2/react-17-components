import Speaker from "./Speaker";

function SpeakersList({ data }) {
    console.log('data .....', data)
    return (
        <div className="container speakers-list">
            <div className="row">
                { data.map(function (speaker, index) {
                    console.log('data.map ....', speaker)
                    return <Speaker key={speaker.id} prop={speaker}/>;
                }) }
            </div>
        </div>
    );
}

export default SpeakersList;
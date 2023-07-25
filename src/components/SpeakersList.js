import Speaker from "./Speaker";

function SpeakersList(props) {
    return (
        <div className="container speakers-list">
            <div className="row">
                {console.log(props.data)}
                {/* {props.data.map(function (speaker){
                    return <Speaker key={speaker.id} speaker={speaker}/>;
                })} */}
            </div>
        </div>
    );
}

export default SpeakersList;
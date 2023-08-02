function SpeakerAdd ({eventYear, insertRecord}) {
    return (
        <a href="#" className="addSes">
            <i onClick={ (evt) => {
                evt.preventDefault();
                const firstLast = window.prompt("Enter first and last name:", "");
                const firstLastArray = firstLast.split(" ");
                insertRecord({
                    id:"99999",
                    first: firstLastArray[0],
                    last: firstLastArray[1], bio: "Bio not entered yet",
                    sessions: [
                        {
                            id: "8888",
                            title: `New Session for ${firstLastArray[0]}`,
                            room: {
                                name: "Main Ball Room",
                            },
                            eventYear
                        }
                    ]
                })
            }}>
                +
            </i>
        </a>
    )
}

export default SpeakerAdd;
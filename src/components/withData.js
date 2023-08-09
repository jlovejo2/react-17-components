function withData(maxSpeakersToShow) {
    return function withData(Component) {
        const speakers = [
            {imageSrc: "speaker-1124", nname: "Douglast Crockford"},
            {imageSrc: "speaker-1530", name: "Tamara Baker"},
            {imageSrc: "speaker-10803", name: "Eugene Chuvyrov"},
        ];

        return function () {
            return <Component speakers={speakers.slice(0, maxSpeakersToShow)}></Component>
        }
    }
}

export default withData;
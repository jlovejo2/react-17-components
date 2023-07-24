import { data} from "../SpeakerData";

const IndexPage = () => {

    const {id, bio, first ,last, favorite, twitterHandle, company, sessions } = data[0];    

    return (
        <div>Hello From Pluralsight</div>
    )
}

export default IndexPage;
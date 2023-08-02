import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";

function SpeakersToolbar() {

    const { theme, setTheme } = useContext(ThemeContext);
    const { showSessions, setShowSessions, eventYear, setEventYear, setSearchQuery, EVENT_YEARS } = useContext(SpeakerFilterContext);

    return (
        <section className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Session&nbsp;&nbsp;</b>
                            <label className="fav">
                                <input type="checkbox" checked={showSessions} onChange={(evt) => {setShowSessions(evt.target.checked)}} />
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row">
                            <strong>Theme</strong>
                            <label className="dropdown">
                                <select className="form-control theme" value={theme} onChange={(evt) => {setTheme(evt.target.value)}}>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." onChange={(evt) => {
                                    setSearchQuery(evt.target.value);
                                }} />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex flex-column flex-md-row" >
                            <strong>Year</strong>
                            <label className="dropmenu">
                                <select className="form-control" value={eventYear} onChange={(evt) => {setEventYear(evt.currentTarget.value)}}>
                                    {EVENT_YEARS.map(function(year) {
                                        return (
                                            <option value={year} key={year}>{year}</option>
                                        )
                                    })}
                                </select>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpeakersToolbar;
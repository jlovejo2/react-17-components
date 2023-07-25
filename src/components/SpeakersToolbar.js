function SpeakersToolbar() {
    return (
        <section className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Session&nbsp;&nbsp;</b>
                            <label className="fav">
                                <input type="checkbox" checked={true} />
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row">
                            <strong>Theme</strong>
                            <label className="dropdown">
                                <select className="form-control theme" value="light">
                                    <option value="light">Light</option>
                                    <option cvalue="dark">Dark</option>
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
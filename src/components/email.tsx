export default function Email () {
    return (
        <>
            <div id="email_box" className="field_box">
                <div id="email-text" className="field_box_text">Email: </div>
            </div>
            <input type="text" id="email" className="text-input"/>
            <div id="email_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
        </>
    );
}
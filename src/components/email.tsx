export default function Email () {
    return (
        <>
            <div id="email_box" className="rounded-3xl bg-field_box px-2.5 pb-1.5 text-4xl text-white">
                <div id="email-text">Email: </div>
            </div>
            <input type="text" id="email" className="text-input"/>
            <div id="email_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
        </>
    );
}
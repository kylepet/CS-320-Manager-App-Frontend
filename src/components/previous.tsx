export default function Previous() {
    return (
        <>
            <div id="previous_box" className="field_box">
                <div id="320-previous" className="field_box_text">Have you previously taken 320?</div>
            </div>
            <div id="previously_taken_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
            <input type="checkbox" className="checkbox" id="checkbox"/>
        </>
    );
}
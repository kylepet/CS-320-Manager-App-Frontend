export default function Fname() {
    return (
        <>
            <div id="fname_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
            <div id="fname_box" className="field_box">
                <div id="fname-text" className="field_box_text">First Name: </div>
            </div>
            <input type="text" name="fname" id="fname" className="text-input"/>
        </>
    );
}
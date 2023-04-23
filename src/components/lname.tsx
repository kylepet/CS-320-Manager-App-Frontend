export default function Lname() {
    return (
        <>
            <div id="lname_box" className="field_box">
                <div id="lname-text" className="field_box_text">Last Name: </div>
            </div>
            <div id="lname_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
            <input type="text" name="lname" id="lname" className="text-input"/>
        </>
    );
}
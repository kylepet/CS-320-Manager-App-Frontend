export default function Lname() {
    return (
        <>
            <div id="lname_box" className="rounded-3xl bg-field_box px-2.5 pb-1.5 text-4xl text-white">
                <div id="lname-text">Last Name: </div>
            </div>
            <div id="lname_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
            <input type="text" name="lname" id="lname" className="text-input"/>
        </>
    );
}
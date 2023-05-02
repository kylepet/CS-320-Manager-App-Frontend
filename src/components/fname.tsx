export default function Fname() {
    return (
        <>
            <div id="fname_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
            <div id="fname_box" className="rounded-3xl bg-field_box px-2.5 pb-1.5 text-4xl text-white">
                <div id="fname-text">First Name: </div>
            </div>
            <input type="text" name="fname" id="fname" className="text-input"/>
        </>
    );
}
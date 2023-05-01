export default function YOG() {
    return (
        <>
            <div id="YoG_box" className="rounded-3xl bg-field_box px-2.5 pb-1.5 text-4xl text-white">
                <div id="YoG-text">Year of Graduation: </div>
            </div>
            <input type="number" id="YoG" className="text-input"/>
                <div id="YoG_bullet" className="bullet">
            <div className="inner_ellipse"></div>
            </div>
        </>
    );
}
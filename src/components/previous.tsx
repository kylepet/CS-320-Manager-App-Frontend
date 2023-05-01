export default function Previous() {
    return (
        <>
            <div id="previous_box" className="rounded-3xl bg-field_box px-2.5 pb-1.5 text-4xl text-white">
                <div id="320-previous">Have you previously taken 320?</div>
            </div>
            <div id="previously_taken_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
            <input type="checkbox" className="checkbox" id="checkbox"/>
        </>
    );
}
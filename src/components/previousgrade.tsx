export default function Previousgrade(){
    return (
        <>
            <div id="previous_grade" className="rounded-3xl bg-field_box px-2.5 pb-1.5 text-4xl text-white">
                <div id="previous_grade_text">Previous Grade in 320: </div>
            </div>
            <select name="grade" id="grade">
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C-">C-</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="D-">D-</option>
                <option value="F">F</option>
            </select>
            <div id="previous_grade_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
        </>
    );
}
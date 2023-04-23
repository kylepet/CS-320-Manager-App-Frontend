export default function Previousgrade(){
    return (
        <>
            <div id="previous_grade" className="field_box">
                <div id="previous_grade_text" className="field_box_text">Previous Grade in 320: </div>
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
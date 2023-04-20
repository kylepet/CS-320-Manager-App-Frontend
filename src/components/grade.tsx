import Select from 'react-select'

export default function Grade() {
    const options = [
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C'},
        { value: 'C-', label: 'C-'},
        { value: 'D+', label: 'D+' },
        { value: 'D', label: 'D'},
        { value: 'D-', label: 'D-'},
        { value: 'F', label: 'F'}
      ]

    return (
        <>
            <div id="previous_grade" className="field_box">
                <div id="previous_grade_text" className="field_box_text">Previous Grade in 320: </div>
            </div>
            <Select name="grade" id="grade" options={options} />
            <div id="previous_grade_bullet" className="bullet">
                <div className="inner_ellipse"></div>
            </div>
        </>
    );
}
export default function EduExperience({
  EduData,
  handleSubmitButton,
  ChangeValue,
  IsFormSubmitted,
  handleEditButton,
}) {
  const today = new Date().toISOString().split("T")[0];

  if (!IsFormSubmitted) {
    return (
      <div className="EduInfo">
        <h2>Education Experience</h2>

        <form className="EduInfo_Input" onSubmit={handleSubmitButton}>
          <label>
            School / University Name:
            <input
              type="text"
              name="School_University"
              className="Info_Input"
              value={EduData.School_University || ""}
              onChange={ChangeValue}
              required
            />
          </label>

          <label>
            Degree:
            <select
              name="Degree"
              className="Info_Input"
              value={EduData.Degree || ""}
              onChange={ChangeValue}
              required
            >
              <option value="">Select Degree</option>
              <option value="Associate">Associate</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Doctoral">Doctoral</option>
            </select>
          </label>

          <label>
            Field of Study:
            <input
              type="text"
              name="Field_of_study"
              className="Info_Input"
              value={EduData.Field_of_study || ""}
              onChange={ChangeValue}
              required
            />
          </label>

          <label>
            Start Date:
            <input
              type="date"
              name="StartDate"
              className="Info_Input"
              value={EduData.StartDate || ""}
              onChange={ChangeValue}
              required
            />
          </label>

          <label>
            End Date:
            <input
              type="date"
              name="EndDate"
              className="Info_Input"
              value={EduData.EndDate || ""}
              onChange={ChangeValue}
              min={EduData.StartDate}
              max={today}
              required
            />
          </label>

          <div className="Button_Wrapper">
            <input type="submit" className="Submit_Button" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="EduInfo">
      <h2>Education Experience</h2>
      <button onClick={handleEditButton} className="EditButton">
        Edit Education
      </button>
    </div>
  );
}

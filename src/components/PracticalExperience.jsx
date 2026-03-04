export default function PracticalExp({
  ExpData,
  handleSubmitButton,
  ChangeValue,
  IsFormSubmitted,
  handleEditButton,
}) {
  if (!IsFormSubmitted) {
    return (
      <div className="PracticalExp">
        <h2>Practical Experience</h2>

        <form className="SkillInfo_Input" onSubmit={handleSubmitButton}>
          <label>
            Company Name:
            <input
              type="text"
              name="CompanyName"
              className="Info_Input"
              value={ExpData.CompanyName || ""}
              onChange={ChangeValue}
              required
            />
          </label>

          <label>
            Position Title:
            <input
              type="text"
              name="Position"
              className="Info_Input"
              value={ExpData.Position || ""}
              onChange={ChangeValue}
              required
            />
          </label>


          <label>
            Start Date:
            <input
              type="date"
              name="StartDate_Exp"
              className="Info_Input"
              value={ExpData.StartDate_Exp || ""}
              onChange={ChangeValue}
              required
            />
          </label>

          <label>
            End Date:
            <input
              type="date"
              name="EndDate_Exp"
              className="Info_Input"
              value={ExpData.EndDate_Exp || ""}
              onChange={ChangeValue}
              required
            />
          </label>

          <div className="Button_Wrapper">
            <input
              type="submit"
              className="Submit_Button"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="PracticalExp">
      <h2>Practical Experience</h2>
      <button onClick={handleEditButton} className="EditButton">
        Edit Experience
      </button>
    </div>
  );
}
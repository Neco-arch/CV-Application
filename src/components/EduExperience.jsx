export default function EduExperience({
  handleChange,
  EduData,
  handleSubmitButton,
  addNewEdu,
  Index
}) {

  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="EduInfo" key={Index}>
      <h2>Education Experience</h2>
      <form className="EduInfo_Input" onSubmit={handleSubmitButton}>
        <label>
          School / University Name :{" "}
          <input
            type="text"
            name="School/University_Name"
            className="Info_Input"
            value={EduData.School_University}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Degree : {""}
          <input
            type="text"
            name="Degree"
            className="Info_Input"
            value={EduData.Degree}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Field of study :{""}
          <input
            type="text"
            name="Field_of_study"
            className="Info_Input"
            value={EduData.Field_of_study}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          StartDate :{" "}
          <input
            type="date"
            name="StartDate"
            className="Info_Input"
            value={EduData.StartDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          EndDate : {""}
          <input
            type="date"
            name="EndDate"
            className="Info_Input"
            value={EduData.EndDate}
            onChange={handleChange}
            min={EduData.StartDate}
            max={today}
            required
          />
        </label>

        <div className="Button_Wrapper">
          <input
            type="submit"
            className="Submit_Button"
            value="Submit"
            id="Submit"
          />
        </div>
      </form>


      <input
            type="button"
            className="Add_NewOne"
            onClick={addNewEdu}
            value="Add More"
          />
    </div>
  );
}

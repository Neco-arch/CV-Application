export default function EduExperience({
  Event_Handerler,
  FormData,
  handleSubmitButton,
  addNewEdu,
}) {
  return (
    <div className="EduInfo">
      <h2>Education Experience</h2>
      <form className="EduInfo_Input" onSubmit={handleSubmitButton}>
        <label>
          School / University Name :{" "}
          <input
            type="text"
            name="School/University_Name"
            className="Info_Input"
            value={FormData.School}
            onChange={Event_Handerler}
            required
          />
        </label>
        <label>
          Degree : {""}
          <input
            type="text"
            name="Degree"
            className="Info_Input"
            value={FormData.Degree}
            onChange={Event_Handerler}
            required
          />
        </label>

        <label>
          Field of study :{" "}
          <input
            type="text"
            name="Field_of_study"
            className="Info_Input"
            value={FormData.Field_of_study}
            onChange={Event_Handerler}
            required
          />
        </label>

        <label>
          StartDate :{" "}
          <input
            type="date"
            name="StartDate"
            className="Info_Input"
            value={FormData.StartDate}
            onChange={Event_Handerler}
            required
          />
        </label>

        <label>
          EndDate : {""}
          <input
            type="date"
            name="EndDate"
            className="Info_Input"
            value={FormData.EndDate}
            onChange={Event_Handerler}
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

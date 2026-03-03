export default function PracticalExp({
  ExpData,
  handleSubmitButton,

}) {
  return (
    <div className="PracticalExp" >
      <h2>PracticalExperience</h2>
      <form className="SkillInfo_Input" onSubmit={handleSubmitButton}  >
        <label>
          Company Name :
          <input
            type="text"
            className="Info_Input"
            value={ExpData.CompanyName}
            required
          />
        </label>
        <label>
          Position title :
          <input
            type="text"
            className="Info_Input"
            value={ExpData.Position}
            required
          />
        </label>
        <label>
          Main Responsibilities :
          <input
            type="text"
            className="Info_Input"
            value={ExpData.Main_Responsibilities}
            required
          />
        </label>

        <label>
          Start Date :
          <input
            type="date"
            className="Info_Input"
            value={ExpData.StartDate_Exp}
            required
          />
        </label>

        <label>
          End Date :
          <input
            type="date"
            className="Info_Input"
            value={ExpData.EndDate_Exp}
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
    </div>
  );
}

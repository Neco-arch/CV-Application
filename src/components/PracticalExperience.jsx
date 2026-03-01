export default function PracticalExp({
  Event_Handerler,
  FormData,
  handleSubmitButton,
  AddNewExp
}) {
  return (
    <div className="PracticalExp">
      <h2>PracticalExperience</h2>
      <form className="SkillInfo_Input" onSubmit={handleSubmitButton}>
        <label>
          Company Name :
          <input
            type="text"
            className="Info_Input"
            value={FormData}
            onChange={Event_Handerler}
            required
          />
        </label>
        <label>
          Position title :
          <input
            type="text"
            className="Info_Input"
            value={FormData}
            onChange={Event_Handerler}
            required
          />
        </label>
        <label>
          Main Responsibilities :
          <input
            type="text"
            className="Info_Input"
            value={FormData}
            onChange={Event_Handerler}
            required
          />
        </label>

        <label>
          Start Date :
          <input
            type="date"
            className="Info_Input"
            value={FormData}
            onChange={Event_Handerler}
            required
          />
        </label>

        <label>
          End Date :
          <input
            type="date"
            className="Info_Input"
            value={FormData}
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
            onClick={AddNewExp}
            value="Add More"
          />
    </div>
  );
}

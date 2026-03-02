export default function GeneralInfo({
  handleSubmitButton,
}) {
  return (
    <div className="GeneralInfo">
      <h2>General Info</h2>
      <form className="GeneralInfo_Input" onSubmit={handleSubmitButton} >
        <label>
          FirstName :{" "}
          <input
            className="Info_Input"
            name="FirstName"
            value=""
            required
          ></input>
        </label>

        <label>
          LastName :{" "}
          <input
            className="Info_Input"
            name="LastName"
            value=""
            required
          ></input>
        </label>

        <label>
          PhoneNumber (000-000-0000) :{" "}
          <input
          type="tel"
            className="Info_Input"
            name="PhoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value=""
            required
          ></input>
        </label>

        <label>
          Email :{" "}
          <input
          type="email"
            className="Info_Input"
            name="Email"
            value=""
            required
          ></input>
        </label>
        <div className="Button_Wrapper">
          <input
            type="submit"
            placeholder="Submit"
            className="Submit_Button"
            value="Submit"
          />
        </div>

      </form>
    </div>
  );
}

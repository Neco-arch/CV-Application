export default function GeneralInfo({
  handleChange,
  GeneralInfo,
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
            onChange={handleChange}
            value={GeneralInfo.FirstName}
            pattern="[A-Za-z]+"
            required
          ></input>
        </label>

        <label>
          LastName :{" "}
          <input
            className="Info_Input"
            name="LastName"
            onChange={handleChange}
            value={GeneralInfo.LastName}
            pattern="[A-Za-z]+"
            required
          ></input>
        </label>

        <label>
          PhoneNumber :{" "}
          <input
          type="tel"
            className="Info_Input"
            name="PhoneNumber"
            onChange={handleChange}
            value={GeneralInfo.PhoneNumber}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          ></input>
        </label>

        <label>
          Email :{" "}
          <input
          type="email"
            className="Info_Input"
            name="Email"
            onChange={handleChange}
            value={GeneralInfo.Email}
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

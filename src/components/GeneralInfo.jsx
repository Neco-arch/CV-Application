export default function GeneralInfo({
  GeneralInfo,
  handleSubmitButton,
  ChangeValue,
  IsFormSubmitted ,
  handleEditButton,
  
}) {
  if (IsFormSubmitted === false) {
    return (
      <div className="GeneralInfo">
        <h2>General Info</h2>
        <form className="GeneralInfo_Input" onSubmit={handleSubmitButton}>
          <label>
            FirstName :{" "}
            <input className="Info_Input" name="FirstName" value={GeneralInfo.FirstName} onChange={ChangeValue} required></input>
          </label>

          <label>
            LastName :{" "}
            <input className="Info_Input" name="LastName" value={GeneralInfo.LastName} onChange={ChangeValue} required></input>
          </label>

          <label>
            PhoneNumber (000-000-0000) :{" "}
            <input
              type="tel"
              className="Info_Input"
              name="PhoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              value={GeneralInfo.PhoneNumber} 
              onChange={ChangeValue}
            ></input>
          </label>

          <label>
            Email :{" "}
            <input
              type="email"
              className="Info_Input"
              name="Email"
              value={GeneralInfo.Email} 
              onChange={ChangeValue}
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
  } else {
    return (
      <div className="GeneralInfo">
        <h2>General Info</h2>
        <button onClick={handleEditButton} className="EditButton">EditInfo</button>
      </div>
    )
  }
}

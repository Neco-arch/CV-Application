export default function GeneralInfo({ handleChange , GeneralInfo }) {
  return (
    <div className="GeneralInfo">
      <h2>General Info</h2>
      <div className="GeneralInfo_Input">
        <label>
          FirstName :{" "}
          <input
            className="Info_Input"
            name="FirstName"
            onChange={handleChange}
            value={GeneralInfo}
          ></input>
        </label>

        <label>
          LastName :{" "}
          <input
            className="Info_Input"
            name="LastName"
            onChange={handleChange}
            value={GeneralInfo}
          ></input>
        </label>

        <label>
          PhoneNumber :{" "}
          <input
            className="Info_Input"
            name="PhoneNumber"
            onChange={handleChange}
            value={GeneralInfo}
          ></input>
        </label>

        <label>
          Email :{" "}
          <input
            className="Info_Input"
            name="Email"
            onChange={handleChange}
            value={GeneralInfo}
          ></input>
        </label>
      </div>
    </div>
  );
}

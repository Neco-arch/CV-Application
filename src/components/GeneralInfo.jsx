export default function GeneralInfo({ handleChange }) {
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
          ></input>
        </label>

        <label>
          LastName :{" "}
          <input
            className="Info_Input"
            name="FirstName"
            onChange={handleChange}
          ></input>
        </label>

        <label>
          PhoneNumber :{" "}
          <input
            className="Info_Input"
            name="FirstName"
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Email :{" "}
          <input
            className="Info_Input"
            name="FirstName"
            onChange={handleChange}
          ></input>
        </label>
      </div>
    </div>
  );
}

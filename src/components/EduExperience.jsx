export default function EduExperience({ Event_Handerler, FormData }) {
  return (
    <div className="GeneralInfo">
      <h2>Education Experience</h2>
      <div className="GeneralInfo_Input"> 
        <label>
          School / University Name :{" "}
          <input
            type="text"
            name="School/University_Name"
            className="Info_Input"
          />
        </label>
        <label>
          Degree : {""}
          <input
            type="text"
            name="Degree"
            className="Info_Input"
            value={FormData}
          />
        </label>

        <label>
          Field of study :{" "}
          <input
            type="text"
            name="Field_of_study"
            className="Info_Input"
            value={FormData}
          />
        </label>

        <label>
          StartDate :{" "}
          <input
            type="text"
            name="StartDate"
            className="Info_Input"
            value={FormData}
          />
        </label>

        <label>
          EndDate : {""}
          <input
            type="text"
            name="EndDate"
            className="Info_Input"
            value={FormData}
          />
        </label>
      </div>
    </div>
  );
}

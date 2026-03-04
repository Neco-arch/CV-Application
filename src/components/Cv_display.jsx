export default function DisplayCV({ GeneralInfo, EduInfo, ExpInfo }) {
  return (
    <div className="CV_Part">
      <div>
        <h2>{GeneralInfo.FirstName + " " +GeneralInfo.LastName} </h2>
        <img src="./src/assets/Profile.jpg" className="ProfilePicture" />
      </div>
      <div className="Info_Section">
        <div className="GeneralSection">
          <p>First Name : {GeneralInfo.FirstName}</p>
          <p>Last Name : {GeneralInfo.LastName}</p>
          <p>Email : {GeneralInfo.Email}</p>
          <p>PhoneNumber : {GeneralInfo.PhoneNumber}</p>
        </div>

        <div className="EduSection">
          <p> School / University : {EduInfo.School_University}</p>
          <p> Degree : {EduInfo.Degree}</p>
          <p> Field Of Study : {EduInfo.Field_of_study}</p>
          <p>Start Date : {EduInfo.StartDate}</p>
          <p>End Date : {EduInfo.EndDate}</p>
        </div>

        <div className="ExpSection">
          <p>CompanyName : {ExpInfo.CompanyName}</p>
          <p>Position : {ExpInfo.Position}</p>
          <p>Responsibility : {ExpInfo.Main_Responsibilities}</p>
          <p>StartDate : {ExpInfo.StartDate_Exp}</p>
          <p>EndDate : {ExpInfo.EndDate_Exp}</p>
        </div>
      </div>
    </div>
  );
}

export default function DisplayCV({ GeneralInfo, EduInfo, ExpInfo }) {
  return (
    <div className="CV_Part">
      <div className="ProfilePicture_Name">
        <h2>{GeneralInfo.FirstName + " " +GeneralInfo.LastName} </h2>
        <img src="./src/assets/Profile.jpg" className="ProfilePicture" />
      </div>
      <div className="Info_Section">
        <div className="GeneralSection">
          <h2>General Info</h2>
          <p>First Name : {GeneralInfo.FirstName}</p>
          <p>Last Name : {GeneralInfo.LastName}</p>
          <p><img  src="./src/assets/email.svg" alt="Email_Icon" className="Icon"/>Email : {GeneralInfo.Email}</p>
          <p><img  src="./src/assets/phone.svg" alt="Email_Icon" className="Icon"/>PhoneNumber : {GeneralInfo.PhoneNumber}</p>
        </div>

        <div className="EduSection">
          <h2>Education <img  src="./src/assets/school.svg" alt="Email_Icon" className="Icon"/></h2>
          <p> School / University : {EduInfo.School_University}</p>
          <p> Degree : {EduInfo.Degree}</p>
          <p> Field Of Study : {EduInfo.Field_of_study}</p>
          <p>Start Date : {EduInfo.StartDate}</p>
          <p>End Date : {EduInfo.EndDate}</p>
        </div>

        <div className="ExpSection">
          <h2>Experience</h2>
          <p>Company Name : {ExpInfo.CompanyName}</p>
          <p>Position : {ExpInfo.Position}</p>
          <p>StartDate : {ExpInfo.StartDate_Exp}</p>
          <p>EndDate : {ExpInfo.EndDate_Exp}</p>
        </div>
      </div>
    </div>
  );
}

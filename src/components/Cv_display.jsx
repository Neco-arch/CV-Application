export default function DisplayCV({ GeneralInfo, EduInfo, ExpInfo }) {
    return (
        <div>
            <div>
                <img src="./src/assets/Profile.jpg" className="ProfilePicture" />
            </div>

            <div className="GeneralSection">
                <p>{GeneralInfo.FirstName}</p>
                <p>{GeneralInfo.LastName}</p>
                <p>{GeneralInfo.Email}</p>
            </div>

            <div className="EduSection">
                <p>{EduInfo.School_University}</p>
                <p>{EduInfo.Degree}</p>
                <p>{EduInfo.Field_of_study}</p>
                <p>{EduInfo.StartDate}</p>
                <p>{EduInfo.EndDate}</p>
            </div>

            <div className="ExpSection">
                <p>{ExpInfo.CompanyName}</p>
                <p>{ExpInfo.Position}</p>
                <p>{ExpInfo.Main_Responsibilities}</p>
                <p>{ExpInfo.StartDate_Exp}</p>
                <p>{ExpInfo.EndDate_Exp}</p>
            </div>
        </div>
    );
}
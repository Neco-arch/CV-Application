import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import HeaderSection from "./components/Header";
import EduExperience from "./components/EduExperience";
import PracticalExp from "./components/PracticalExperience";

function App() {
  const [FormSubmiited, setFormSubmiited] = useState(false);

  const [Data_Info, SaveDataInfo] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
  });

  const [Data_Edu, SaveDataEdu] = useState([
    {
      School_University: "",
      Degree: "",
      Field_of_study: "",
      StartDate: "",
      EndDate: "",
    },
  ]);

  const [Data_Exp, SavaDataExp] = useState([
    {
      CompanyName: "",
      Position: "",
      Main_Responsibilities: "",
      StartDate_Exp: "",
      EndDate_Exp: "",
    },
  ]);

  //General Info Part
  function handleChange(e) {
    SaveDataInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmitbutton(event) {
    event.preventDefault();

    setFormSubmiited(true);
  }

  function HandleEditButton() {
    setFormSubmiited(false);
  }


  return (
    <>
      <HeaderSection></HeaderSection>
      <GeneralInfo
        GeneralInfo={Data_Info}
        ChangeValue={handleChange}
        handleSubmitButton={handleSubmitbutton}
        handleEditButton={HandleEditButton}
        IsFormSubmitted={FormSubmiited}
      ></GeneralInfo>
      <EduExperience 
      EduData={Data_Edu}
      ></EduExperience>
      <PracticalExp 
      ExpData={Data_Exp}>
        
      </PracticalExp>
    </>
  );
}

export default App;

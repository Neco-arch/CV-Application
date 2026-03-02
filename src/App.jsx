import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import HeaderSection from "./components/Header";
import EduExperience from "./components/EduExperience";
import PracticalExp from "./components/PracticalExperience";

function App() {
  let EduIndex = 0;
  let ExpIndex = 0;

  const [Data_Info, SaveDataInfo] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
  });

  const [Data_Edu, SaveDataEdu] = useState([
    {
      id: 0,
      School_University: "",
      Degree: "",
      Field_of_study: "",
      StartDate: "",
      EndDate: "",
    },
  ]);

  const [Data_Exp, SavaDataExp] = useState([
    {
      id: 0,
      CompanyName: "",
      Position: "",
      Main_Responsibilities: "",
      StartDate_Exp: "",
      EndDate_Exp: "",
    },
  ]);

  function HandleSubmit_GeneralInfo(event) {
    const formData = event.target

    console.log(formData.get("FirstName"))
    SaveDataInfo({
      FirstName: formData.get("FirstName"),
      LastName: formData.get("LastName"),
      PhoneNumber: formData.get("PhoneNumber"),
      Email: formData.get("Email"),
    })
  }


  return (
    <>
      <HeaderSection></HeaderSection>
      <GeneralInfo
        GeneralInfo={Data_Info} handleSubmitButton={HandleSubmit_GeneralInfo}
      ></GeneralInfo>
      <EduExperience
        EduData={Data_Edu}
        Index={EduIndex}
      ></EduExperience>
      <PracticalExp ExpData={Data_Exp}   Index={ExpIndex}></PracticalExp>
    </>
  );
}

export default App;

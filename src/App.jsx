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

  function UpdateDataGeneralInfo(event) {
    const { name, value } = event.target;
    SaveDataInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function UpdateDataEdu(event) {
    const { name, value } = event.target;
    SaveDataEdu((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function UpdateDateExp(event) {
    const { name, value } = event.target;
    SavaDataExp((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <HeaderSection></HeaderSection>
      <GeneralInfo
        GeneralInfo={Data}
        handleChange={UpdateDataGeneralInfo}
      ></GeneralInfo>
      <EduExperience
        EduData={Data}
        handleChange={UpdateDataEdu}
        Index={EduIndex}
      ></EduExperience>
      <PracticalExp ExpData={Data} handleChange={UpdateDateExp}  Index={ExpIndex}></PracticalExp>
    </>
  );
}

export default App;

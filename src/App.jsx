import { useState , cloneElement } from "react";
import GeneralInfo from "./components/GeneralInfo";
import HeaderSection from "./components/Header";
import EduExperience from "./components/EduExperience";
import PracticalExp from "./components/PracticalExperience";
import DisplayCV from "./components/Cv_display";

function App() {
  const [FormSubmiited_Ge, setFormSubmiited_Ge] = useState(false);

  const [FormSubmiited_Edu, setFormSubmiited_Edu] = useState(false);

  const [FormSubmiited_Exp, setFormSubmiited_Exp] = useState(false);


  const [Data_Info, SaveDataInfo] = useState({
    FirstName: "Dele",
    LastName: "Ali",
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

  // GeneralInfo Part
  function handleChange_Ge(e) {
    SaveDataInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmitbutton_Ge(event) {
    event.preventDefault();

    setFormSubmiited_Ge(true);
  }

  function HandleEditButton_Ge() {
    setFormSubmiited_Ge(false);
  }

  //Edu Part

  function handleChange_Edu(e) {
    SaveDataEdu((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmitbutton_Edu(event) {
    event.preventDefault();

    setFormSubmiited_Edu(true);
  }

  function HandleEditButton_Edu() {
    setFormSubmiited_Edu(false);
  }

  //PracticalExp

  function handleChange_Exp(e) {
    SavaDataExp((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmitbutton_Exp(event) {
    event.preventDefault();

    setFormSubmiited_Exp(true);
  }

  function HandleEditButton_Exp() {
    setFormSubmiited_Exp(false);
  }

    return (
    <div className="Wrapper">
    <div className="FormSection">
      <HeaderSection></HeaderSection>
      <GeneralInfo
        GeneralInfo={Data_Info}
        ChangeValue={handleChange_Ge}
        handleSubmitButton={handleSubmitbutton_Ge}
        handleEditButton={HandleEditButton_Ge}
        IsFormSubmitted={FormSubmiited_Ge}
      ></GeneralInfo>
      <EduExperience
        ChangeValue={handleChange_Edu}
        handleSubmitButton={handleSubmitbutton_Edu}
        handleEditButton={HandleEditButton_Edu}
        IsFormSubmitted={FormSubmiited_Edu}
        EduData={Data_Edu}
      ></EduExperience>
      <PracticalExp
        ExpData={Data_Exp}
        ChangeValue={handleChange_Exp}
        handleSubmitButton={handleSubmitbutton_Exp}
        handleEditButton={HandleEditButton_Exp}
        IsFormSubmitted={FormSubmiited_Exp}
        EduData={Data_Edu}
      ></PracticalExp>
    </div>
      <DisplayCV 
    GeneralInfo={Data_Info} 
    EduInfo={Data_Edu} 
    ExpInfo={Data_Exp} 
/>
    </div>
  );
}

export default App;

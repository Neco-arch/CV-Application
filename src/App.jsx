import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import HeaderSection from "./components/Header";
import EduExperience from "./components/EduExperience";



function App() {
  return (
    <>
      <HeaderSection></HeaderSection>
      <GeneralInfo></GeneralInfo>
      <EduExperience></EduExperience>
    </>
  );
}

export default App;

import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import HeaderSection from "./components/Header";
import EduExperience from "./components/EduExperience";
import PracticalExp from "./components/PracticalExperience";

function App() {
  return (
    <>
      <HeaderSection></HeaderSection>
      <GeneralInfo></GeneralInfo>
      <EduExperience></EduExperience>
      <PracticalExp></PracticalExp>
    </>
  );
}

export default App;

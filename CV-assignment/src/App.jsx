import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: ""
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: ""
  });

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div>

        <h1>My CV</h1>

        <CVPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />

        <button onClick={handleEdit}>Edit CV</button>

      </div>
    );
  }

  return (
    <div>

      <h1>CV Generator</h1>

      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />

      <Education
        education={education}
        setEducation={setEducation}
      />

      <Experience
        experience={experience}
        setExperience={setExperience}
      />

      <button onClick={handleSubmit}>Submit CV</button>

    </div>
  );
}

export default App;
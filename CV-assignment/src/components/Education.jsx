function Education({ education, setEducation }) {

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>

      <h2>Education</h2>

      <input
        type="text"
        name="school"
        placeholder="faculty"
        value={education.school}
        onChange={handleChange}
      />

      <input
        type="text"
        name="study"
        placeholder="Title of Study"
        value={education.study}
        onChange={handleChange}
      />

      <input
        type="text"
        name="date"
        placeholder="year of graduation"
        value={education.date}
        onChange={handleChange}
      />

    </div>
  );
}

export default Education;
function CVPreview({ generalInfo, education, experience }) {

  return (
    <div>

      <h2>CV Preview</h2>

      <h3>{generalInfo.name}</h3>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>

      <h3>Education</h3>
      <p>{education.school}</p>
      <p>{education.study}</p>
      <p>{education.date}</p>

      <h3>Experience</h3>
      <p>{experience.company}</p>
      <p>{experience.position}</p>
      <p>{experience.responsibilities}</p>

    </div>
  );
}

export default CVPreview;
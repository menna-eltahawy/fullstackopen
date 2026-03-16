import { Component } from "react"

class Experience extends Component {

  handleChange = (e) => {

    const updatedExperience = {
      ...this.props.experience,
      [e.target.name]: e.target.value
    };

    this.props.setExperience(updatedExperience);
  };

  render() {

    const exp = this.props.experience;

    return (
      <div>

        <h2>Practical Experience</h2>

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={exp.company}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Position Title"
          value={exp.position}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="responsibilities"
          placeholder="Main Responsibilities"
          value={exp.responsibilities}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="from"
          placeholder="From"
          value={exp.from}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="to"
          placeholder="Until"
          value={exp.to}
          onChange={this.handleChange}
        />

      </div>
    );
  }
}

export default Experience;
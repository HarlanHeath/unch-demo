import React from 'react';
import { Steps, Button, message, Card, Radio } from 'antd';
import AppointmentInfo from "./components/AppointmentInfo"
import Costs from "./components/Costs"
import CancelAppointment from "./components/CancelAppointment"
import SideBanner from "./components/SideBanner"
import './App.css';

const { Step } = Steps;

const steps = [
  {
    title: '',
    content: (
      <div>
        <h2>Patient: </h2>
        <select style={{ width: 200 }}>
          <option></option>
          <option value="JohnJacobs"> John Jacobs </option>
          <option value="MaryJacobs"> Mary Jacobs </option>
          <option value="SarahJones"> Sarah Jones </option>
        </select>
      </div>
    )
  },
  {
    title: '',
    content: (
      <div>
        <h2>Appointment Type: </h2>
        <select style={{ width: 200 }}>
          <option></option>
          <option value="New"> New </option>
          <option value="Existing"> Existing </option>
        </select>
      </div>
    )
  },
  {
    title: '',
    content: (
      <div>
        <h2>Department: </h2>
        <select style={{ width: 200 }}>
          <option></option>
          <option value="primaryCare"> Primary Care</option>
          <option value="adultsSpecialty"> Adults Specialty </option>
          <option value="pedsSpecialty"> Pediatric Specialty </option>
        </select>
      </div>
    )
  },
  {
    title: '',
    content: (
      <div>
        <h2>Clinic / Hospital: </h2>
        <select style={{ width: 200 }}>
          <option></option>
          <option value="primaryCare"> UNC Primary Care at Cary </option>
          <option value="familyMed"> UNC Family Medicine at Kildaire </option>
        </select>
      </div>
    )
  },
  {
    title: '',
    content: (
      <div>
        <h2>Provider: </h2>
        <select style={{ width: 200 }}>
          <option></option>
          <option value="marciOlsen"> Marci Olsen </option>
          <option value="heatherAnderson"> Heather Anderson </option>
          <option value="mariaHinckley"> Maria Hinckley </option>
          <option value="karenMolnar"> Karen Molnar </option>
          <option value="charlotteThompson"> Charlotte Thompson </option>
        </select>
      </div>
    )
  },
  {
    title: '',
    content: (
      <Card>
        <div>
          <h2> You are looking to see your Primary Care Physician? </h2>
          <h3>Maria Olsen is not accepting direct new patients.</h3>
          <h3>Maria Olsen only accepts referral patients from a Primary Care Doctor</h3>
          <h3>Betsy Powers, RN, accepts new patients</h3>
          <h3> Call Betsy Powers directly at (919) 245-9862</h3>
        </div>
      </Card>
    )
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const radioGroup = (
      <Radio.Group name="radiogroup" defaultValue={2}>
        <Radio value={1}>Billing</Radio>
        <Radio value={2}>Scheduling</Radio>
        <Radio value={3}>Referral</Radio>
        <Radio value={4}>Triage</Radio>
        <Radio value={5}>Pharmacy</Radio>
      </Radio.Group>
    )
    return (
      <div className="App">
        <Card title={radioGroup} style={{ width: "70vw", height: "65vh" }}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
            </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
            </Button>
            )}
          </div>
        </Card>
        <div style={{ width: "30vw", height: "65vh", backgroundColor: "#242424", color: "white" }}>
          <SideBanner />

        </div>
        {/* <AppointmentInfo /> */}
        {/* <Costs /> */}
        {/* <CancelAppointment /> */}
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Steps, Button, message, Card } from 'antd';

const { Step } = Steps;

const steps = [
    {
        title: '',
        content: (
            <div>
                <h2>What is the name of your insurance provider?</h2>
                <h2>Insurance: </h2>
                <select style={{ width: 200 }}>
                    <option></option>
                    <option value="UnitedHealth"> United Health </option>
                    <option value="BCBS"> BCBS </option>
                </select>
            </div>
        )
    },
    {
        title: '',
        content: (
            <div>
                <h2> What is your policy number?</h2>
                <h2>Policy Number: </h2>
                <input style={{ width: 200 }} type="text" />
            </div>
        )
    },
    {
        title: '',
        content: (
            <div>
                <h2> What is your policy type?</h2>
                <h2>Policy Type: </h2>
                <select style={{ width: 200 }}>
                    <option></option>
                    <option value="HMO"> HMO </option>
                    <option value="Choice"> Choice </option>
                    <option value="OpenAccess"> Open Access </option>
                    <option value="PPO"> PPO </option>
                </select>
            </div>
        )
    },
    {
        title: '',
        content: (
            <div>
                <h2> What is the type of visit? </h2>
                <h2>Visit Type: </h2>
                <select style={{ width: 200 }}>
                    <option></option>
                    <option value="Consultation"> Consultation </option>
                    <option value="SickVisit"> Sick Visit </option>
                    <option value="Routine"> Routine </option>
                    <option value="Physicals"> Physicals </option>
                    <option value="Surgery"> Surgery </option>
                    <option value="PreOp"> Pre-Op </option>
                    <option value="Appointment"> Appointment </option>
                </select>
            </div>
        )
    },
    {
        title: '',
        content: (
            <div>
                <h2>Do you want the estimate for this year or next year?</h2>
                <h2>Year: </h2>
                <select style={{ width: 200 }}>
                    <option></option>
                    <option value="ThisYear"> This Year (2019) </option>
                    <option value="NextYear">  Next Year (2020) </option>
                </select>
            </div>
        )
    },
    {
        title: '',
        content: (
            <Card>
                <div>
                    <h2> Here is the estimate of your out-of-pocket costs for this visit booked in 2019. If you hit your deductible, then this may be different </h2>
                    <h3>Out of pocket estimated cost: $142.33</h3>
                    <h3>Member Rate: $78.00</h3>
                    <br />
                    <h3> Your plan pays: $47.33</h3>
                </div>
            </Card>
        )
    }
];

class Costs extends React.Component {
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

        return (
            <div>
                <Card style={{ width: "70vw" }}>
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
            </div>
        );
    }
}

export default Costs;

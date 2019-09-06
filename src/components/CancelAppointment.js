import React from 'react';
import { Card } from 'antd';

class CancelAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }


    render() {
        const { current } = this.state;
        return (
            <div>
                <Card style={{ width: "70vw" }}>
                    <div>
                        <h2> Our cancellation policy is: </h2>
                        <h3>Because of the tremendous need for our services we have a policy of 24-hour notice for cancellations and a limit of three(3) failed or late cancellations for appointments</h3>
                        <br />
                        <h3>Since this is your third no-show/late cancellation, we will waive the cancellation fee</h3>
                    </div>
                </Card>
            </div>
        );
    }
}

export default CancelAppointment;

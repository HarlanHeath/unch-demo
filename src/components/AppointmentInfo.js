import React from 'react';
import Costs from "./Costs"
import { Button, Row, Col } from 'antd';

class AppointmentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            costs: false,
        };
    }

    handleCost = () => {
        this.setState({ costs: true });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { costs } = this.state.costs
        return (
            <div>
                <h2> Tell me how I can assist you with this appointment </h2>
                <Row gutter={8}>
                    <Col span={6} >
                        <Button type="primary" style={{ width: 200, height: 75 }} > Cancel Appointment </Button>
                        <Button type="primary" style={{ width: 200, height: 75, marginTop: 25 }} > FAQ </Button>
                    </Col>
                    <Col span={6} >
                        <Button type="primary" style={{ width: 200, height: 75 }} onClick={this.handleCost}> How Much Does It Cost </Button>
                        <Button type="primary" style={{ width: 200, height: 75, marginTop: 25 }} > Parking Directions </Button>
                    </Col>
                </Row>
                {this.state.costs === true ? <Costs /> : null}


            </div >
        );
    }
}

export default AppointmentInfo;

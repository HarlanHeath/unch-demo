import React from 'react';
import { Button, Row, Col } from 'antd';

class AppointmentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
        return (
            <div>
                <Row gutter={8}>
                    <Col span={6} >
                        <Button type="primary" style={{ width: 200, height: 75 }} > Cancel Appointment </Button>
                        <Button type="primary" style={{ width: 200, height: 75 }} > FAQ </Button>
                    </Col>
                    <Col span={6} >
                        <Button type="primary" style={{ width: 200, height: 75 }} > How Much Does It Cost </Button>
                        <Button type="primary" style={{ width: 200, height: 75 }} > Parking Directions </Button>
                    </Col>
                </Row>


            </div >
        );
    }
}

export default AppointmentInfo;

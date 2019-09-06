import React from 'react';
import { Card, Button } from 'antd';

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
                        <h2> I can provide you with directions </h2>
                        <Button>SMS To Customer</Button>
                        <img src="../facility-map.png" alt="facility map" height="200" width="200" />
                    </div>
                </Card>
            </div>
        );
    }
}

export default CancelAppointment;

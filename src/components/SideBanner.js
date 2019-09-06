import React from 'react';


class SideBanner extends React.Component {

    render() {
        return (
            <div>
                <p>
                    <a>Appointment for a New Problem</a>: Print this form and fill in Section 1 before your appointment. Complete section 2 at the end of your appointment if you have a health problem that needs treatment. Section 1 What questions or concerns do I want addressed during this appointment? ...
                </p>
                <p>
                    <a> First Appointment</a>: Complete this form if you are seeing this health professional for the first time. Although you may have to complete a similar form when you arrive at the office, completing this form will help you organize your thoughts and provide more complete...
                </p>
                <p>
                    <a>Follow-Up Appointment</a>: Answer the following questions before and during your appointment to follow up on a health problem. What health problem is the reason for this return appointment? What questions or concerns do I want addressed during this appointment? Do I have any...
                </p>
            </div>
        );
    }
}

export default SideBanner;

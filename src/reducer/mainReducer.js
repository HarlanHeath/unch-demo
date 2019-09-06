const initialState = {
    patient: "",
    appointmentType: "",
    department: "",
    clinicHosp: "",
    provider: "",
}
export default function reducer(state = initialState, action) {

    let state2 = state;
    switch (action.type) {
        case "SET_PATIENT":
            return { ...state2, patient: action.payload }
        case "SET_APPOINTMENTTYPE":
            return { ...state2, appointmentType: action.payload }
        case "SET_DEPARTMENT":
            return { ...state2, department: action.payload }
        case 'SET_CLINICHOSP':
            return { ...state2, clinicHosp: action.payload }
        case 'SET_PROVIDER':
            return { ...state2, provider: action.payload }

        default:
            break;
    }
    return state2;
}
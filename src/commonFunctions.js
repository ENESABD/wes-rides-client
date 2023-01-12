export const passwordConfirmationCheck = ({values}) => {
    if (values?.new_password !== values?.new_password2) {
        return "Please confirm your password correctly.";
    }
    
    const password = values.new_password;
    const verified_values = {...values, password: password};
    delete verified_values.new_password;
    delete verified_values.new_password2;
    return verified_values;
}

export const noChange = ({values}) => values;

export const captureRideTags = ({event}) => {
    let tags = {
        has_car: event.target.has_car.checked,
        wants_uber: event.target.wants_uber.checked,
        wants_car: event.target.wants_car.checked,
    };
    
    let { has_car, wants_uber, wants_car } = tags;

    if (!has_car && !wants_uber && !wants_car) {
        return "At least one tag must be selected";
    }

    return tags;
}

export const makeDateReadable = (date) => {
    let dateObject = new Date(date);
    let formatted_date = dateObject.toDateString();
    return formatted_date;
}

export const makeDateDescription = (updatedRideDates) => {
    let [start_date, end_date] = updatedRideDates;
    if (start_date && end_date) {
        if (start_date === end_date) {
            let exact_date = makeDateReadable(start_date);
            return exact_date;
        } else {
            let formatted_start_date = makeDateReadable(start_date);
            let formatted_end_date = makeDateReadable(end_date);
            return formatted_start_date + ' - ' + formatted_end_date;
        }
    }
}

export const convertDateFormat = (date) => date.substring(5,10) + '-' + date.substring(2,4);

export const isFutureDate = (date) => {
    let now = new Date();
    now.setHours(0,0,0,0);

    if ((new Date(date)) < now) {
        return false;
    }

    return true;
}


const startIsBeforeEnd = (start_date, end_date) => {
    if ((new Date(end_date) < new Date(start_date))) {
        return false;
    }

    return true;
}

export const formatRideDates = ({ event }) => {
    if (event.target.exact.checked) {
        let formatted_date = convertDateFormat(event.target.exact_date.value);
        
        if (!isFutureDate(formatted_date)) {
            return "Please choose a future date";
        }

        return {start_date: formatted_date, end_date: formatted_date};
    } 
    
    if (event.target.interval.checked) {
        let formatted_start_date = convertDateFormat(event.target.start_date.value);
        let formatted_end_date = convertDateFormat(event.target.end_date.value);

        if (!isFutureDate(formatted_start_date)) {
            return "Please choose a future start date";
        }

        if (!isFutureDate(formatted_end_date)) {
            return "Please choose a future end date";
        }

        if (!startIsBeforeEnd(formatted_start_date, formatted_end_date)) {
            return "The start date must be earlier than the end date";
        }        

        return {start_date: formatted_start_date, end_date: formatted_end_date};
    }
    
}
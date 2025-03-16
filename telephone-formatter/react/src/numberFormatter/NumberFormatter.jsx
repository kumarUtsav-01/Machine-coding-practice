import { useState } from "react";

import { createPhoneNumber } from "./NumberFormatter.lib";

import './NumberFormatter.css';

export default PhoneNumberFormatter = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleNumberChange = (e) => {
        const newInput = e.target.value;
        const newNumber = createPhoneNumber(newInput);
        
        setPhoneNumber(newNumber);
    }

    return (
        <section>
            <input type="text" value={phoneNumber} onInput={handleNumberChange}></input>
            <div>+(123) - 4567890</div>
        </section>
    )
}
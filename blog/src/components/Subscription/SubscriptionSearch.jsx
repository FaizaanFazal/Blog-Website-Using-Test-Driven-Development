import React, { useState } from 'react'

export default function SubscriptionSearch() {
    const [emailValue, setEmailValue] = useState('');

    const handleEmailInput = (e) => {
        e.preventDefault();
        setEmailValue(e.target.value);
      };

    return (
        <form data-testid="form" className="newsletter-form">
            <div className="form-group flex items-stretch">
                <input 
                    type="email"
                    data-testid="email"
                    value={emailValue}
                    className="form-input"
                    placeholder="Your Email" 
                    onChange={handleEmailInput}
                />
                <button data-testid="subscribebtn" type="submit" className="btn btn-primary nowrap">Get Started</button>
            </div>
            <p className="text text-base text-gray">
                Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a response the following data.
            </p>
        </form>
    )
}

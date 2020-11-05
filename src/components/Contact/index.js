import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {

            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {

                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }

        }

        console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <div id="contact-card" className="">
                <div className="card-body">
                    {/* <h1 className="card-title">Contact Me</h1> */}
                    <div className="" style={{width:"100rem"}}>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="px-2">
                            <label htmlFor="Name">Name:</label>
                            <br/>
                            <input type="text" name="Name" defaultValue={name} onBlur={handleChange} style={{width:"50%"}}/>
                        </div>
                        <div className="px-2">
                            <label htmlFor="email">Email address:</label>
                            <br/>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} style={{width:"50%"}}/>
                        </div>
                        <div className="px-2">
                            <label htmlFor="Message">Message:</label>
                            <br/>
                            <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} style={{width:"50%"}}/>
                        </div>
                        {errorMessage && (
                            <div className="px-2">
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                         <button className="button" type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        


        
        </section>
    );

}

export default ContactForm;
// Contact.js
import React from 'react';

const Contact = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="contact">
            <h1>Contact</h1>
            <p>This is the Contact section.</p>
        </section>
    );
});

export default Contact;
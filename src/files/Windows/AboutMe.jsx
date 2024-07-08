// AboutMe.js
import React, { useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from 'react-bootstrap/Container';
const AboutMe = React.forwardRef((props, ref) => {
    return (
        <div>
            <section ref={ref} id="about-me">
                <div className="container my-5">
                    <div className="row">
                        <div className="col text-center">
                            <Stack direction="row" spacing={2} className='justify-content-center'>
                                <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/D4E03AQGmwiQUyaELCQ/profile-displayphoto-shrink_200_200/0/1692066832678?e=1724889600&v=beta&t=af8EQ0Qa5tjtuUCI0PLARw6tGCkHTQTlZvxJADVIUc4" sx={{ width: 200, height: 200 }} />
                            </Stack>
                            <h1>Junior Huaman</h1>
                            
                        </div>
                        <div className="col text-start">
                            <h1>About Me</h1>
                            <p>Ninth-cycle Systems Engineering student at the University of Lima, ranking in the top third of my class. I have a strong foundation in programming, databases, and data analysis. I am a proactive team player who performs well under pressure and is goal-oriented. My short-term goal is to advance in the field of Data Analytics at a leading technology company.</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
});

export default AboutMe;
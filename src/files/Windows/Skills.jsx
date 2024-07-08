// Skill.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Skill = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="skill">
            <div className="container my-5">
                <h1>Habilidades</h1>
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }} className="text-center pt-4 m-2" >
                        <Stack direction="row" spacing={2} className='justify-content-center'>
                            <Avatar src="https://static-00.iconduck.com/assets.00/javascript-js-icon-512x512-q3igwln6.png" 
                            sx={{ width: 70, height: 70 }} 
                                variant='square'
                            />
                        </Stack>
                        <Card.Body>
                            <Card.Title>Java Script</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="text-center pt-4 m-2" >
                        <Stack direction="row" spacing={2} className='justify-content-center'>
                            <Avatar src="https://static-00.iconduck.com/assets.00/python-icon-512x512-88yv7xw6.png" 
                            sx={{ width: 70, height: 70 }} 
                                variant='square'
                            />
                        </Stack>
                        <Card.Body>
                            <Card.Title>Python</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="text-center pt-4 m-2" >
                        <Stack direction="row" spacing={2} className='justify-content-center'>
                            <Avatar src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" 
                            sx={{ width: 70, height: 70 }} 
                                variant='square'
                            />
                        </Stack>
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="text-center pt-4 m-2" >
                        <Stack direction="row" spacing={2} className='justify-content-center'>
                            <Avatar src="https://static-00.iconduck.com/assets.00/nodejs-icon-512x512-vl7ew1eg.png" 
                            sx={{ width: 70, height: 70 }} 
                                variant='square'
                            />
                        </Stack>
                        <Card.Body>
                            <Card.Title>Node</Card.Title>
                        </Card.Body>
                    </Card>
                    
                </div>
                
            </div>
        </section>
    );
});

export default Skill;
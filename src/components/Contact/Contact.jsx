import  React from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import {TextField} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Form submitted:', { name, email, subject, message });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrors({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
 
  return (
    <div id='contact'>
      <div className='md:px-28 px-6 py-16 max-w-screen-2xl mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>Send Us an Email</h2>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error. </p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit} >
        <FormControl class='full-width space-y-8'>
          <TextField
            id="name"
            label="Name"
            type="text"
            variant="standard"
            required
            fullWidth
            value={name}
            onChange={handleNameChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            required
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            id="subject"
            label="Subject"
            type="text"
            variant="standard"
            required
            fullWidth
            value={subject}
            onChange={handleSubjectChange}
            error={!!errors.subject}
            helperText={errors.subject}
          />
          <TextField
            id="message"
            label="Message"
            type="text"
            variant="standard"
            required
            fullWidth
            value={message}
            onChange={handleMessageChange}
            error={!!errors.message}
            helperText={errors.message}
          />
          <button
            type="submit"
            className="p-3 hover:bg-blue-700 text-white font-bold  rounded-full" style={{backgroundColor:'#303f9f'}}
          >
            <SendIcon/>
          </button>
        </FormControl>
    </form>
    </div>
    {/* Footer*/}
    <div className='md:px-28 px-6 py-16 max-w-screen-2xl mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-y-8' style={{backgroundColor: '#212121'}}>
        <div className='block h-full p-8 flex flex-col shadow-lg'>
        <h4 className="mb-2 relative">About Us</h4>
    <span className="block h-0.5 w-16 bg-yellow-500 mb-4"></span>

          <p className='text-sm font-light mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam.</p>
          <Button size="medium" style={{backgroundColor:'#FE6D01'}} href="#text-buttons" variant="contained" className="w-32">Contact us</Button>
        </div>
      <div className='block flex flex-col shadow-lg p-8'>
        <h4 className="mb-2 relative">Contact</h4>
          <span className="block h-0.5 w-16 bg-yellow-500 mb-4"></span>
          <div className="flex items-center mb-4">
        <EmailIcon color='warning' className='mr-2'/> 
        <div className="ml-2">
            <p>Email</p> 
            <p>abc@example.com</p> 
        </div>
    </div>
    <div className="flex items-center">
        <PlaceIcon color='warning' className='mr-2' /> 
        <div className="ml-2">
            <p>Address</p> 
            <p>Topoban, Akhalia Sylhet 3114, BD</p> 
        </div>
    </div>
      </div>

        <div className='block flex flex-col shadow-lg p-8'>
       <h4 className="mb-2 relative">Desclaimer</h4>
    <span className="block h-0.5 w-16 bg-yellow-500 mb-4"></span>

          <p className='text-sm font-light mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?</p>
          <div>
    <div className='flex items-start space-x-4'>
      <a href="https://www.linkedin.com/">
      <LinkedInIcon color='#ABABAB' className='h-24 w-24'/>
      </a>
      <a href="https://twitter.com/" >
        <TwitterIcon color='#ABABAB' className='h-24 w-24'/>
      </a>
      <a href="https://www.facebook.com/">
      <FacebookIcon color='#ABABAB' className='h-24 w-24'/>
      </a>
    </div>
  </div>

        </div>
      </div>

    </div>
  )
}
export default Contact;

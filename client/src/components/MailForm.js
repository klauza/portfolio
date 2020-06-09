import React, { useState } from 'react'
import { Spring } from 'react-spring/renderprops';

const MailForm = () => {

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    fetch('http://localhost:3001/send', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((res) => {
      return res.json();
    })

  }

  return (
    <Spring
      delay={700}
      from={{opacity: 0, transform: 'translateY(250px)'}}
      to={{ opacity: 1, transform: 'translateY(0px)'}}
    >
    {props => 
      <div style={{...props, background: 'orange'}}>
        <div className="container">
            
          <h1 className="brand"><span>me</span> design</h1>

            <div className="company-info">
              <h3>me Web Design</h3>
              <ul>
                <li><i className="fa fa-road"></i>contact</li>
                <li><i className="fa fa-phone"></i>me</li>
                <li><i className="fa fa-envelope"></i>asap</li>
              </ul>
            </div>
            
            <div className="contact">
              <h3>Email Me</h3>
              <form onSubmit={(e)=>handleSubmit(e)}>
                <p>
                  <label>Name</label>
                  <input type="text" name="name" placeholder="place name here" onChange={handleInputChange} />
                </p>
                <p>
                  <label>Company</label>
                  <input type="text" name="company" onChange={handleInputChange} />
                </p>
                <p>
                  <label>Email Address</label>
                  <input type="email" name="email" onChange={handleInputChange} />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="phone" onChange={handleInputChange} />
                </p>
                <p className="full">
                  <label>Message</label>
                  <textarea name="message" onChange={handleInputChange} rows="5"></textarea>
                </p>
                <p className="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
              
            </div>

        </div>
      </div>
    }
    </Spring>
  )
}

export default MailForm

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0x53gv5', 'template_5d4o9zs', e.target, 'Xxsw9xoMB1CrBOeAu')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
      });
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-10">Contact Me</h1>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 text-center mb-10 md:mb-0">
              <p className="flex items-center justify-center mb-4">
                <FaEnvelope style={{color: 'blue', fontSize: '30px', marginRight: '10px'}}/>
                kwanusujoseph@gmail.com
              </p>
              <p className="flex items-center justify-center mb-4">
                <a href="tel:+254725439354" className="flex items-center">
                  <FaPhone style={{color: 'blue', fontSize: '30px', marginRight: '10px', marginLeft: '10px'}}/>
                  +254725439354
                </a>
              </p>
            <div className="flex justify-center space-x-6 my-4">
              <a href="https://www.facebook.com/kwanusujoseph" className="text-2xl">
                <FaFacebook style={{color: 'blue', fontSize: '50px'}}/>
              </a>
              <a href="https://www.instagram.com/kwanusujoseph" className="text-2xl">
                <FaInstagram style={{color: 'red', fontSize: '50px'}}/>
              </a>
              <a href="https://twitter.com/kwanusujoseph" className="text-2xl">
                <FaTwitter style={{color: 'blue', fontSize: '50px'}}/>
              </a>
              <a href="https://www.linkedin.com/in/kwanusu-joseph-2450711a2" className="text-2xl">
                <FaLinkedin style={{color: 'blue', fontSize: '50px'}}/>
              </a>
              </div>
              <a href='#' download className="btn1 bg-red-500 text-white py-2 px-4 rounded-lg">Download CV</a>
            </div>
            <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="w-full p-3 mb-4 rounded-lg" 
                value={formState.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                className="w-full p-3 mb-4 rounded-lg" 
                value={formState.email}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="message" 
                rows="6" 
                placeholder="Your Message" 
                className="w-full p-3 mb-4 rounded-lg"
                value={formState.message}
                onChange={handleChange}
                required
              >

              </textarea>
              <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-lg">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

{/* <a href={require("../assets/cv.docx")} */}
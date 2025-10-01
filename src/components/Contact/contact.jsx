import React from 'react'
import './contact.scss'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3568204-b956-41cc-96c3-67d9f58d9bf7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("✅ Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("Error: " + data.message)
    }
  };


  return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch with Homiq</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Have questions, feedback, or partnership inquiries? The Homiq team is here to support you - let’s start the conversation.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt=''/><p>info@homiq.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt=''/><p>+254 701402513</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt=''/><p>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name="email" id="" />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message' id="" required></textarea>
                    <button type='submit' className="contact-submit">Send Message</button>
                </form>
            </div>
        </div>
  )
}

export default Contact
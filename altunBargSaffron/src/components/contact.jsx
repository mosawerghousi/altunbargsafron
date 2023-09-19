import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import {useTranslation} from 'react-i18next';


export const Contact = () => {

  const {t} = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('service_erj59b8', 'template_wcz4aqv', form.current, 'DpKrsKOqjfncuRJj8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      handleSubmitForm();
  };


      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

  
      const handleSubmitForm = event => {
       alert('form submitted');

        setFullName('');
        setEmail('');
        setMessage('');

      };

    

return (
  <div>
      <div id="contact">
        
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>{t('Be in touched with our Owner !')}</h2>
              <p>
              {t('Let us know your problems and ideas about the products and services !!')}
              </p>
            </div>
            <form name="sentMessage" className="sent-message" ref={form}  onSubmit={sendEmail} >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder={t('Enter your name')}
                      required
                      onChange={event => setFullName(event.target.value)}
                      value={fullName}
                      />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder={t('Enter your Email address')}
                      required
                      onChange={event => setEmail(event.target.value)}
                      value={email}
                      />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder={t('Enter Message')}
                  required
                  onChange={event => setMessage(event.target.value)}
                  value={message}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
              {t('Send Message')}
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3>{t('Contact Info')}</h3>
              <span>
                <i className="fa fa-map-marker"></i> <h5> {t('Addresses')} : </h5>
                <br/>
                  <h6>1. Head office: Shar-e Naw, Ansari, Mohammadi Plaza; </h6> 
                  <br/>
                  <h6>2. Mandavi, Kabul: Karimi Brothers Market , shop No. (28); </h6> 
                  <br/>
                  <h6>3. Mazar-e-Sharif: Kefait Market, Maimaneh Street, Omar Yusufzadeh Tea Shop. </h6> 
              </span>
          </div>
          <div className="contact-item">
              <span>
                <i className="fa fa-phone"></i>  <h5> {t('To order, call the following numbers:')} </h5>
                    <br/>
                  <h6>Head office: 0202202784-0744859696</h6> 
                    <br/>
                  <h6>Mandavi kabul: 0797140090-0778370459 </h6> 
                    <br/>
                  <h6>Mazar Sharif: 0792609561</h6> 
                </span>    
          </div>
          <div className="contact-item">
              <span>
                <i className="fa fa-envelope-o"></i> 
                <h5>{ t('Email')} : </h5> 
                <h6>altunbargsaffron1@gmail.com</h6>
              </span>{" "}
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li>
                  <a >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
    <div id="footer">
      <div className="container text-center">
        <p>
          {t('© Copyright . All Rights Reserved')}
        </p>
      </div>
    </div>
    </div>
 </div>
 
 
  ) 
}

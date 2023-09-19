import React from "react";
import img1 from "../images/s7.jpg"
import {useTranslation} from 'react-i18next'

export const About = () => {

  const {t} = useTranslation();

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={img1} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t('ABOUT SAFFRON')}</h2>
        
              <h3>{t('Buy genuine saffron hand-grown by the farmers of Herat Province-Afghanistan with Grade-A+ (Super Gem) wholesale and retail in standard packages from us.Note: Dear customer, if you want to export saffron abroad, experience the quality and price with us.')}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <li>
                    {t('Saffron is a powerful spice high in antioxidants.It has been linked to health benefits, such as improved mood, libido, and sexual function, as well as reduced PMS symptoms and enhanced weight loss. Best of all, its generally safe for most people and easy to add to your diet.')}
                  </li>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <li>
                    {t('Some possible side effects include dry mouth, anxiety, dizziness, drowsiness, nausea, change in appetite, and headache. Allergic reactions can occur in some people. Taking large amounts of saffron by mouth is POSSIBLY UNSAFE')}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

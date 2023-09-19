import React from "react";
import {useTranslation} from 'react-i18next'
 
export const Header = () => {
  const {t} = useTranslation();
  return (
    <header id="Home">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                   {t('Welcome to Our Website')}
                </h1>
                <p>{
                   t('WE ARE PROUD OF HAVING THE SUFFRON PRODUCTS')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

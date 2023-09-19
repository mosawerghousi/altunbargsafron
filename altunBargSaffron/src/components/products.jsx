import img1 from "../images/1.jpeg"
import React from "react";
import {useTranslation} from 'react-i18next'

export const Products = () => {
  
  const {t} = useTranslation();


  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t('PRODUCTS')}</h2>
          <p>
            {t('We love to show you some picture of our products')}
          </p>
          <p>
            {t('WholeSale')}
          </p>
        </div>
        <div className="row">
          <div className="products-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            </div>
          </div>
          <div className="products-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            </div>
          </div>
          <div className="products-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

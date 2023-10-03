import React from 'react'
import Languageoption from './language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from 'i18next'

export const Navigation = () => {
  const {t} = useTranslation()
  const handleClick = e => {
    i18next.changeLanguage(e.target.value)
  }
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#Home">
            {t('Altun Barg Saffron')}
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#Home" className="page-scroll">
                {t('HOME')}
              </a>
            </li>

            <li>
              <a href="#about" className="page-scroll">
                {t('ABOUT')}
              </a>
            </li>
            <li>
              <a href="#products" className="page-scroll">
                {t('PRODUCTS')}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {t('CONTACT')}
              </a>
            </li>

            <li>
              <a href="#language-dropdown" className="page-scroll">
                <Languageoption onChange={e => handleClick(e)} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export default function App() {

  const [language, setLanguage] = useState('');
  const [page, setPage] = useState('curatorial');
  const [isWelcome, setWelcome] = useState(true);

}

function WelcomeScreen({ setWelcome, setLanguage }) {

  const enterSite = () => {
    setWelcome(false);
  };

  const setEnglish = () => {
    setLanguage('english');
  };

  const setChinese = () => {
    setLanguage('chinese');
  };

  return (
    <>
      <h1>metro via virtual</h1>
      <h1>a virtual exhibition from Hong Kong</h1>
      <button onClick={ () => { setEnglish; enterSite } }>enter exhibition</button>
      <h1>虛擬都會</h1>
      <h1>來自香港的線上展覽</h1>
      <button onClick={ () => { setChinese; enterSite } }>進入展覽</button>
    </>
  );
}


function ContentScreen() {

  return (
    
  { isMobile && (<BurgerMenu /><PageIndicator />) }
  { !isMobile && (<LanguageButton />) }
  { if (!isMobile && (language === 'chinese')) {
      (<ChineseMenu />) 
    } else if (!isMobile && (language === 'english')) {
      (<EnglishMenu />)
    }
  }
  );
}

function LanguageButton() {

  let buttonElement = null;

    if (language === 'chinese') {
      buttonElement = <button>中國人</button>;
    } else if (language === 'english') {
      buttonElement = <button>English</button>;
    }

  return (
    <>
      {buttonElement}
    </>
  );
}

function BurgerMenu() {
  return (
    <button></button>
  )
}

function EnglishMenu({ setPage }) {

  function changeContent(num) {
    setPage(num);
  }

  return (
    <>
      <h2>metro via virtual</h2>
      <h3>A virtual exhibition from Hong Kong</h3>
      <button onClick={changeContent('curatorial')}>curatorial statement</button>
      <button onClick={changeContent('essay')}>essay about the exhibition</button>
      <button onClick={changeContent('autosave')}>Autosave: Redoubt</button>
      <button onClick={ChangeContent('confidential')}>Confidential Records: Dual Metropolitans</button>
      <button onClick={changeContent('illumination')}>Illumination</button>
      <button onClick={changeContent('butterflies')}>Butterflies on the Wheel</button>
      <button onClick={changeContent('domestik')}>Domestik/Publik</button>
    </>
  );
}


function ChineseMenu({ setPage }) {

  function changeContent(num) {
    setPage(num);
  }

  return (
    <>
      <h2>虛擬都會</h2>
      <h3>虛擬都會</h3>
      <button onClick={changeContent('curatorial')}>策展論</button>
      <button onClick={changeContent('autosave')}>自動存檔：堡壘</button>
      <button onClick={ChangeContent('confidential')}>機密錄：雙城</button>
      <button onClick={changeContent('illumination')}>啟示</button>
      <button onClick={changeContent('butterflies')}>黃淑賢</button>
      <button onClick={changeContent('domestik')}>家居/公共</button>
    </>
  );
}



function PageIndicator({ page }) {

}



function Content( { page, language } ) {

  if (language === 'english') {

    switch(page) {

      case 1:

      


      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:   

    }

  } else {

    switch(page) {

      case 1:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:     

    }

  }

}
import React, { useState, useEffect } from 'react';
import { isMobile }, from 'react-device-detect';

export default function App() {

  const [language, setLanguage] = useState('');
  const [page, setPage] = useState(1);
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
    
  {isMobile ? <LanguageButton /> : null}

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

function EnglishMenu({ setPage }) {

  function changeContent(num) {
    setPage(num);
  }

  return (
    <>
      <h2>metro via virtual</h2>
      <h3>A virtual exhibition from Hong Kong</h3>
      <button onClick={changeContent(1)}>curatorial statement</button>
      <button onClick={changeContent(2)}>essay about the exhibition</button>
      <button onClick={changeContent(3)}>Autosave: Redoubt</button>
      <button onClick={ChangeContent(4)}>Confidential Records: Dual Metropolitans</button>
      <button onClick={changeContent(5)}>Illumination</button>
      <button onClick={changeContent(6)}>Butterflies on the Wheel</button>
      <button onClick={changeContent(7)}>Domestik/Publik</button>
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
      <button onClick={changeContent(1)}>策展論</button>
      <button onClick={changeContent(2)}>自動存檔：堡壘</button>
      <button onClick={ChangeContent(3)}>機密錄：雙城</button>
      <button onClick={changeContent(4)}>啟示</button>
      <button onClick={changeContent(5)}>黃淑賢</button>
      <button onClick={changeContent(6)}>家居/公共</button>
    </>
  );
}

function PageIndicator({ page }) {

}
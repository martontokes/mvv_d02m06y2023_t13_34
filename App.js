import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export default function App() {

  const [language, setLanguage] = useState('');
  const [page, setPage] = useState('curatorial');
  const [isWelcome, setWelcome] = useState(true);

  let componentToRender;

  if (isWelcome) {
    componentToRender = <WelcomeScreen setWelcome={setWelcome} setLanguage={setLanguage} />;
  } else {
    componentToRender = <ContentScreen language={language} setPage={setPage} />;
  }

  return (

    <>
    
      <LanguageButton />
      {componentToRender}
      
    </>
  );


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
        <button onClick={() => { setEnglish(); enterSite(); }}>enter exhibition</button>
        <h1>虛擬都會</h1>
        <h1>來自香港的線上展覽</h1>
        <button onClick={() => { setChinese(); enterSite(); }}>進入展覽</button>
      </>
    );
  }


function ContentScreen({ page, language, setPage, setLanguage }) {

  let conditionalMenu;

  if (isMobile) {
    conditionalMenu = (
      <>
        <BurgerMenu />
        <PageIndicator />
      </>
    );
  } else {
    conditionalMenu = <LanguageButton language={language} setLanguage={setLanguage} />;
    if (language === 'chinese') {
      conditionalMenu = <ChineseMenu setPage={setPage} />;
    } else if (language === 'english') {
      conditionalMenu = <EnglishMenu setPage={setPage} />;
    }
  }

  return (
    <>
      {conditionalMenu}
      <Content page={page} />
    </>
  );
}

function LanguageButton({language}) {

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
    <button>BurgerButton Content</button>
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
      <button onClick={changeContent('confidential')}>Confidential Records: Dual Metropolitans</button>
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
      <button onClick={changeContent('confidential')}>機密錄：雙城</button>
      <button onClick={changeContent('illumination')}>啟示</button>
      <button onClick={changeContent('butterflies')}>黃淑賢</button>
      <button onClick={changeContent('domestik')}>家居/公共</button>
    </>
  );
}



function PageIndicator({ page }) {

}



function Content( { page, language } ) {

  if (language === 'english') { // ENGLISH CONTENT STARTS HERE //

    switch(page) { 

      case 'curatorial':

      return (

        <>
        <h3>Curatorial statement</h3>
        <p>
          Shih Shu-ching, in writing her Hong Kong trilogy, came across a specimen of eurema hecabe, a small pierid butterfly species commonly found in Hong Kong. Shih* used eurema hecabe as an analogy of the city, writing that this butterfly 'contains a decisive force to challenge its fate, albeit covered by its delicate, fragile appearance.'
        </p>
        <p>
          While literary works tend to narrate the stories of the city via its complicated history, contemporary art is open to diverse perspectives that center nonlinearity and indeterminacy. Critically unpacking the imagery of Hong Kong, the virtual exhibition Metro Via Virtual features artworks that tap into the topics of history, myth, religion, capital, gender, and race. Such multilayered representations are intertwined with multimedia experiments, ranging from interactive game-based system, 3D animation, figurative art and 360° video, to sound art. The result is a symphony of the metropolis, albeit the texture, the size, and the site of specific media are somewhat compromised by the virtual nature of the exhibition.
        </p>
        <p>
          Andrew Luk, Alexis Mailles, and Peter Nelson recreated the WWII bunkers and tunnels in Kowloon Peninsula to allow game players to immerse themselves in a historical site. Vvzela Kook’s animation presents the myth of a survived, hidden underground Kowloon Walled City, reigned by artificial intelligence. Kat Suryna’s pastel delineated the spiritual spaces she experienced in Hong Kong by way of a demonic online persona that looms in the transformation of Buddha’s face. Elaine Wong projected the moving image of cityscape onto her own living room as broken-down frames in 360° panorama, commenting on the fragmentation of city space as a result of spatial capitalization as well as gendered demarcation. Also reflecting on the division of the public/domestic, Riar Rizaldi mixed the soundscape of Victoria Park on Sunday, where Indonesian domestic workers enjoy their weekly day off, with composed noise of household utensils, to virtually ‘suture’ these women workers’ separated worlds.
        </p>
        <p className="firstaddendum">
          * Shih Shu-ching  |  1997
        </p>
        <p className="secondaddendum">
          City of the Queen: A Novel of Colonial Hong Kong
          Hung-fan Bookstore.
        </p>
      </>

      )

      case 'essay':

      return (

        <>
        <h3>On the Role of Symbol Alienation in Art</h3>
        <p>Content</p>
        </>
  
      )

      case 'autosave':
      
      return (

        <>
        <p>TestContent Autosave</p>
        </>
  
      )
      
      case 'confidential':

      return (

        <>
        <p>TestContent Confidential</p>
        </>
  
      )

      case 'illumination':

      return (

        <>
        <p>illumination</p>
        </>
  
      )
      
      case 'butterflies':

      return (

        <>
        <p>butterflies</p>
        </>
  
      )

      case 'domestik':
        
      return (

        <>
        <p>domestik</p>
        </>
  
      )

    }

  } else { // CHINESE CONTENT STARTS HERE //

    switch(page) {

      case 'curatorial':

      return (

      <>
        <h3>策展論</h3>
        <p>
        施叔青在寫作《香港三部曲》的時候偶然發現了香港的代表性物種黃翅粉蝶的標本，便因此用黃翅粉蝶來比喻香港，因「黃翅粉蝶於嬌弱的外表下，卻敢於挑戰既定的命運」。很多文學作品通過香港複雜的歷史來敘述這座城市的故事，相比之下，表現香港的當代藝術則具多種角度，並以非線性的形式傳達某種不確定性。
        線上展覽「虛擬都會」展出的藝術作品批判性地審視發生於這座城市的歷史、傳說、信仰、資本、性別與種族等議題。這種多層面的探討與藝術媒介上的實驗同時進行，從交互游戲系統、3D 動畫、繪畫、360° 錄像和聲音藝術等不同媒介一起譜寫出一曲關於香港的大都會交響樂，儘管不同媒介的質地、
        尺寸和場地屬性不得不因線上的展示而受到折衷。
        陸浩明、亞歷克斯·麥爾斯和彼得·倪爾森還原了二戰時在九龍半島修建的壕溝與隧道，讓游戲玩家可以虛擬地置身於此歷史現場。曲淵澈的動畫結合歷史、傳說與幻想，設計出一個由人工智能所統治的、藏匿於地下的九龍城寨。一個邪惡的網絡人格若隱若現地浮顯出Kat Suryna 所 畫的亦正亦邪的佛像中，以此表達她在香港體驗到的精神空間。黃淑賢以360° 全景將香港城市景觀的流動影像投射在她的居室中，回應在資本的侵蝕下所導致的城市空間碎片化和空間上的性別劃界問題。同樣關注公共空間與家居空間的分隔，
        Riar Rizaldi 將星期天維多利亞公園裏印尼裔家傭休閒活動的聲音，與他所編排的家用器皿的噪音混錄在一起，以「縫合」這些女性家傭被強迫分割的聲音空間。
        </p>
      </>

      )

      case 'autosave':
      
      return (

        <>
        <p>TestContent Autosave Chinese</p>
        </>
  
      )
      
      case 'confidential':

      return (

        <>
        <p>TestContent Confidential ch</p>
        </>
  
      )

      case 'illumination':

      return (

        <>
        <p>illumination ch</p>
        </>
  
      )
      
      case 'butterflies':

      return (

        <>
        <p>butterflies ch</p>
        </>
  
      )

      case 'domestik':
        
      return (

        <>
        <p>domestik ch</p>
        </>
  
      )

    }

  }

}
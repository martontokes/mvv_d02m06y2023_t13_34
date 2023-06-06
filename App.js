import React, { useState, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

export default function App() {

  const [language, setLanguage] = useState('');
  const [page, setPage] = useState('curatorial');
  const [isWelcome, setWelcome] = useState(true);
  const [isBurger, setBurger] = useState(false);

  let componentToRender;

  if (isWelcome) {
    componentToRender = <WelcomeScreen setWelcome={setWelcome} setLanguage={setLanguage} />;
  } else {
    componentToRender = <ContentScreen language={language} setPage={setPage} page={page} setLanguage={setLanguage} isBurger={isBurger} setBurger={setBurger}/>;
  }

  return (

    <>
      <MobileMenu isBurger={isBurger} setBurger={setBurger} setPage={setPage} language={language} />
      {componentToRender}
      <iframe id="confreciframe" frameborder="no" />
    </>
  );


  }

function WelcomeScreen({ setWelcome, setLanguage }) {

    const enterSite = () => {

      document.getElementById("welcomecenter").style.opacity = 0;

      setTimeout(() => {
      setWelcome(false);
      setTimeout(() => {document.getElementById("content").style.opacity = 1;}, 500)
 
    }, 2000);
    };
  
    const setEnglish = () => {
      setTimeout(() => {
      setLanguage('english');
      let initialunderscore = document.getElementsByClassName("curatorial");
      setTimeout(() => {
        if (initialunderscore[0] != undefined) {
        initialunderscore[0].classList.add("menuButtonActive");
        }
      }, 50);
    }, 2000);
    };
  
    const setChinese = () => {
      setTimeout(() => {
      setLanguage('chinese');
      let initialunderscore = document.getElementsByClassName("curatorial");
      setTimeout(() => {
        if (initialunderscore[0] != undefined) {
        initialunderscore[0].classList.add("menuButtonActive");
        }
      }, 50);
    }, 2000);
    };
  
    return (
      <>
      <div id="welcomeContainer">
      <div id="welcomecenter">

        <h1 className="welcometitle">metro via virtual</h1>
        <h5 className="welcomesubtitle">a virtual exhibition from Hong Kong</h5>
        <button className="enterbutton" onClick={() => { setEnglish(); enterSite(); }}><img src="/entereng.svg" /></button>
        <h1 id="chwelc" className="welcometitle">虛擬都會</h1>
        <h5 id="chsub" className="welcomesubtitle">來自香港的線上展覽</h5>
        <button className="enterbutton" onClick={() => { setChinese(); enterSite(); }}><img src="/enterzh.svg" /></button>
      </div>
      </div>
      </>
    );
  }


function ContentScreen({ page, language, setPage, setLanguage, isWelcome, isBurger, setBurger }) {

let conditionalMenu;

if (document.getElementById("content") != null && document.getElementById("content").style.opacity == 1 && isWelcome == true) {
  document.getElementById("content").style.opacity = 0;
}


  if (isMobile) {
    conditionalMenu = (
      <>
        <Header isBurger={isBurger} setBurger={setBurger} language={language} />
        <PageIndicator page={page} setPage={setPage} language={language} />
      </>
    );
  } else {

    if (language === 'chinese') {
      conditionalMenu = <><ChineseMenu setPage={setPage} /><LanguageButton setPage={setPage} language={language} page={page} setLanguage={setLanguage} /></>;
    } else if (language === 'english') {
      conditionalMenu = <><EnglishMenu setPage={setPage} /><LanguageButton setPage={setPage} language={language} page={page} setLanguage={setLanguage} /></>;
    }
  }

  return (
    <>
    <div id="content">

      {conditionalMenu}
  
      <div id="contentToFade">
      <Content page={page} language={language} />
      </div>
    </div>
    </>
  );
}

function MobileMenu({language, setPage, isBurger, setBurger}) {



  function changeContent(num) {

    if (isBurger == false) {

      var mobileMenu = document.getElementsByClassName("mobilemenu")[0];
      mobileMenu.getElementById("contentToFade").style.opacity = 0;
      setTimeout(() => {

      mobileMenu.classList.remove("mobilemenu");
      mobileMenu.classList.add("mobilemenuActive");


      }, 2000)

      setBurger(true);

      } else if (isBurger == true) {

      mobileMenu = document.getElementsByClassName("mobilemenuActive")[0];
      mobileMenu.classList.remove("mobilemenuActive"); 
      mobileMenu.classList.add("mobilemenu");
      setBurger(false);

      }

   

    let menubuttons = document.getElementsByClassName("menubutton");
    for (let i = 0; i < menubuttons.length; i++ ) {
      menubuttons[i].classList.remove("menuButtonActive"); 
    }

    menubuttons = document.getElementsByClassName(num);
    for (let v = 0; v < menubuttons.length; v++ ) {
      menubuttons[v].classList.add("menuButtonActive");
    }

    setTimeout(() => {
    setPage(num);
    setTimeout(  () => { document.getElementById("contentToFade").style.opacity = 1; }, 500);
 
     }, 2000);

   }

    if (language = "english") {

    return (

      <div className='mobilemenu'>
      <button className="menubutton curatorial" onClick={() => changeContent('curatorial')}>curatorial statement</button>
      <button className="menubutton essay" onClick={() => changeContent('essay')}>essay about the exhibition</button>
      <button className="menubutton autosave" onClick={() => changeContent('autosave')}>Autosave: Redoubt</button>
      <button className="menubutton confidential" onClick={() => changeContent('confidential')}>Confidential Records: Dual Metropolitans</button>
      <button className="menubutton illumination" onClick={() => changeContent('illumination')}>Illumination</button>
      <button className="menubutton butterflies" onClick={() => changeContent('butterflies')}>Butterflies on the Wheel</button>
      <button className="menubutton domestik" onClick={() => changeContent('domestik')}>Domestik/Publik</button>
      </div>

    )


    } else {

    return (

      <div className='mobilemenu'>
      <button id="zhmenuleft" className="menubutton curatorial" onClick={() => changeContent('curatorial')}>策展論</button>
      <button className="menubutton autosave" onClick={() => changeContent('autosave')}>自動存檔：堡壘</button>
      <button className="menubutton confidential" onClick={() => changeContent('confidential')}>機密錄：雙城</button>
      <button className="menubutton illumination" onClick={() => changeContent('illumination')}>啟示</button>
      <button className="menubutton butterflies" onClick={() => changeContent('butterflies')}>黃淑賢</button>
      <button className="menubutton domestik" onClick={() => changeContent('domestik')}>家居/公共</button>
      </div>
      
    )
  }
}




function Header({ language, isBurger, setBurger }) {
  if (language === "english") {
    return (
      <>
        <div className="mheader">
        <img id="mobillogoen" src="/mobillogoen.svg"></img>
        <BurgerMenu isBurger={isBurger} setBurger={setBurger}/>
        </div>


      </>
    );
  } else {
    return (
      <>
              <div className="mheader">
        <h1 id="chwelc" className="headerinline" className="welcometitle">
          虛擬都會
        </h1>
        <h5 id="chsub" className="headerinline" className="welcomesubtitle">
          來自香港的線上展覽
        </h5>

        </div>
        <BurgerMenu isBurger={isBurger} setBurger={setBurger} />
      </>
    );
  }
}



function LanguageButton({ language, setLanguage, setPage, page }) {

  const setLang = (lang) => {
    document.getElementById("content").style.opacity = 0;

    setTimeout(() => {
      setLanguage(lang);

      setTimeout(() => {
        document.getElementById("content").style.opacity = 1;
    
      }, 500);

      let menubuttons = document.getElementsByClassName("menubutton");

      for (let i = 0; i < menubuttons.length; i++ ) {
        menubuttons[i].classList.remove("menuButtonActive"); 
      }

      setTimeout(() => { menubuttons = document.getElementsByClassName(page);
        
        if (menubuttons[0] === undefined) {

        setPage("curatorial");
        menubuttons = document.getElementsByClassName("menubutton");
        menubuttons[0].classList.add("menuButtonActive");

      } else {
        menubuttons[0].classList.add("menuButtonActive"); 
      }
      
      }, 200);

        }, 2000);
      };

  let buttonElement = null;

  if (language === 'chinese') {
    buttonElement = (
      <button className="menubutton languageButton" onClick={() => setLang('english')}>
        English
      </button>
    );
  } else if (language === 'english') {
    buttonElement = (
      <button className="menubutton languageButton" onClick={() => setLang('chinese')}>
        中國人
      </button>
    );
  }

  return <>{buttonElement}</>;
}


function BurgerMenu({isBurger, setBurger}) {

  const toggleMobileMenu = () => {
    console.log(isBurger);
      if (isBurger == false) {
        var mobileMenu = document.getElementsByClassName("mobilemenu")[0];
 
        mobileMenu.classList.remove("mobilemenu");
        mobileMenu.classList.add("mobilemenuActive");
        setBurger(true);

        } else if (isBurger == true) {
        mobileMenu = document.getElementsByClassName("mobilemenuActive")[0];
        mobileMenu.classList.remove("mobilemenuActive"); 
        mobileMenu.classList.add("mobilemenu");
        setBurger(false);
        }
  }

  return (
    <button id="burgerbutton" onClick={toggleMobileMenu}><img src="/burgerbutton.svg"></img></button>
  )
  
}


function EnglishMenu({ setPage }) {

  function changeContent(num) {



    document.getElementById("contentToFade").style.opacity = 0;

    let menubuttons = document.getElementsByClassName("menubutton");
    for (let i = 0; i < menubuttons.length; i++ ) {
      menubuttons[i].classList.remove("menuButtonActive"); 
    }

   
    menubuttons = document.getElementsByClassName(num);
    for (let v = 0; v < menubuttons.length; v++ ) {
      menubuttons[v].classList.add("menuButtonActive");
    }


    setTimeout(() => {

    setPage(num);


    setTimeout(() => { document.getElementById("contentToFade").style.opacity = 1; }, 500);

    }, 2000);
  }

  return (
    <>

      <div id="uppermenu">
      <img id="enlogo" src="/metroenlogo.svg" />
      <div id="engright">
      <button className="menubutton curatorial" onClick={() => changeContent('curatorial')}>curatorial statement</button>
      <button className="menubutton essay" onClick={() => changeContent('essay')}>essay about the exhibition</button>
      </div>
      </div>
      <div id="buttonflex">
      <button className="menubutton autosave" onClick={() => changeContent('autosave')}>Autosave: Redoubt</button>
      <button className="menubutton confidential" onClick={() => changeContent('confidential')}>Confidential Records: Dual Metropolitans</button>
      <button className="menubutton illumination" onClick={() => changeContent('illumination')}>Illumination</button>
      <button className="menubutton butterflies" onClick={() => changeContent('butterflies')}>Butterflies on the Wheel</button>
      <button className="menubutton domestik" onClick={() => changeContent('domestik')}>Domestik/Publik</button>
      </div>
    </>
  );
}





function ChineseMenu({ setPage }) {

  function changeContent(num) {



    document.getElementById("contentToFade").style.opacity = 0;

    let menubuttons = document.getElementsByClassName("menubutton");
    for (let i = 0; i < menubuttons.length; i++ ) {
      menubuttons[i].classList.remove("menuButtonActive"); 
    }

    menubuttons = document.getElementsByClassName(num);
    for (let v = 0; v < menubuttons.length; v++ ) {
      menubuttons[v].classList.add("menuButtonActive");
    }



    
    


     setTimeout(() => {
      
      setPage(num);

     setTimeout(  () => { document.getElementById("contentToFade").style.opacity = 1; }, 500);
 
     }, 2000);

     
   }

  return (
    <>
      <div className="upperMenuZh">
      <div id="chtitle">
      <img id="zhlogo" src="/metrozhlogo.svg" />
      </div>
      <button id="zhmenuleft" className="menubutton curatorial" onClick={() => changeContent('curatorial')}>策展論</button>
      </div>
      <div id="buttonflex">
      <button className="menubutton autosave" onClick={() => changeContent('autosave')}>自動存檔：堡壘</button>
      <button className="menubutton confidential" onClick={() => changeContent('confidential')}>機密錄：雙城</button>
      <button className="menubutton illumination" onClick={() => changeContent('illumination')}>啟示</button>
      <button className="menubutton butterflies" onClick={() => changeContent('butterflies')}>黃淑賢</button>
      <button className="menubutton domestik" onClick={() => changeContent('domestik')}>家居/公共</button>
      </div>
    </>
  );
}




function PageIndicator({ page, language, setPage }) {

  if (language == 'english') { 

    return (

      <>
        <div id="pageindicator">
          <div id="pageindicators">
            <img className="indicator indicatorActive" src="/indicator.svg"></img>
            <img className="indicator" src="/indicator.svg"></img>
            <img className="indicator" src="/indicator.svg"></img>
            <img className="indicator" src="/indicator.svg"></img>
            <img className="indicator" src="/indicator.svg"></img>
            <img className="indicator" src="/indicator.svg"></img>
            <img className="indicator" src="/indicator.svg"></img>
          </div>
        </div>
      </>
  
    )

  } else {

  }

  return (

    <>
        <div id="pageindicator">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </>

  )

}


//   if (isBurger != true) {}

function Content( { page, language } ) {



  if (language === 'english') {

    switch(page) { 

      case 'curatorial':

      return (
 
        <>
        <h3>Curatorial statement</h3>
        <p>
          Shih Shu-ching, in writing her Hong Kong trilogy, came across a specimen of eurema hecabe, a small pierid butterfly species commonly found in Hong Kong. Shih* used eurema hecabe as an analogy of the city, writing that this butterfly 'contains a decisive force to challenge its fate, albeit covered by its delicate, fragile appearance.'
          While literary works tend to narrate the stories of the city via its complicated history, contemporary art is open to diverse perspectives that center nonlinearity and indeterminacy.<br /><br />Critically unpacking the imagery of Hong Kong, the virtual exhibition Metro Via Virtual features artworks that tap into the topics of history, myth, religion, capital, gender, and race. Such multilayered representations are intertwined with multimedia experiments, ranging from interactive game-based system, 3D animation, figurative art and 360° video, to sound art. The result is a symphony of the metropolis, albeit the texture, the size, and the site of specific media are somewhat compromised by the virtual nature of the exhibition.
          <br /><br />Andrew Luk, Alexis Mailles, and Peter Nelson recreated the WWII bunkers and tunnels in Kowloon Peninsula to allow game players to immerse themselves in a historical site. Vvzela Kook’s animation presents the myth of a survived, hidden underground Kowloon Walled City, reigned by artificial intelligence. Kat Suryna’s pastel delineated the spiritual spaces she experienced in Hong Kong by way of a demonic online persona that looms in the transformation of Buddha’s face. Elaine Wong projected the moving image of cityscape onto her own living room as broken-down frames in 360° panorama, commenting on the fragmentation of city space as a result of spatial capitalization as well as gendered demarcation. Also reflecting on the division of the public/domestic, Riar Rizaldi mixed the soundscape of Victoria Park on Sunday, where Indonesian domestic workers enjoy their weekly day off, with composed noise of household utensils, to virtually ‘suture’ these women workers’ separated worlds.
        </p>
        <p className="firstaddendum">
          * Shih Shu-ching&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;1997
        <br /><br />
          City of the Queen: A Novel of Colonial Hong Kong
          Hung-fan Bookstore.
        </p>
      </>

      )

      case 'essay':

      return (

        <>
        <h3>On the Role of Symbol Alienation in Art</h3>
        <p>Cities are built upon people’s individual and collective memories, which are themselves shaped by various visual and auditory symbols. In people’s memories of Hong Kong, cultural symbols including pedestrian crossings from Hong Kong TV drama, cramped fast-food restaurants in Wong Kar-Wai’s films, and Cantonese music comprise an alternate reality of the city. These symbols have designated contexts and meanings. However, new media art sometimes rearranges the contexts of symbols to give mobility to thoughts. In this online exhibition Metro Via Virtual, five groups of artists employ imageries of Hong Kong in their artworks to recreate locality. Being detached from reality and impressionistic, the cultural symbols in these artworks are allowed to take on a life of their own and create a complex and plural interpretation of Hong Kong.
        <br /><br />In this exhibition, some artists’ previous experience outside of Hong Kong help them observe subtle things about Hong Kong that local people tend to ignore. All five groups of artists combine knowledge from philosophy, media archaeology, video game design and technological development with art practice. They look at the local history, myth, religion, and demographics of Hong Kong, analyze it methodically, and create new media works about Hong Kong that are intricate and participatory.
        Artists’ choice of symbols and the detachment of their context give rise to a sense of alienation. These are cultural symbols that might exist but people are not familiar with them, or ones that people seem to be familiar with but do not exist. The artists then place these symbols outside of their original context and give new meanings to visuals or audio to form a utopian Hong Kong in the digital world. In these artists’ works appear shattered imageries of Hong Kong that emphasize a sense of messiness and dynamism in striking contrast to sleekness and hard boundaries.         <br /><br />Andrew Luk, Alexis Mailles, and Peter Nelson’s Autosave: Redoubt (2018) is a computer game based on geo-locations and incomplete visual information of WWII bunkers and tunnels in Kowloon.<br /><br />Vvzela Kook’s Confidential Records: Dual Metropolitans (2016-2018) reconstructs parts of hallways and some aerial views of Kowloon Walled City during British colonization.         <br /><br />Elaine Wong’s Butterflies on the Wheel (2020) is a video work featuring broken-down frames of Hong Kong cityscape videos, which were projected onto the wall in a room.         <br /><br />Riar Rizaldi’s soundscape work Domestik/Publik (2020) assembles fragments of audio recordings of Indonesian domestic workers’ lives in Hong Kong.         <br /><br />Kat Suryna’s Illumination (2021) is inspired by Buddhist images she saw in Hong Kong. Some artists explore new forms of artistic expression to find connections between cultural symbols of the Hong Kong urban landscape and human presence in the virtual city.
        <br /><br />Andrew Luk, Alexis Mailles, Peter Nelson, and Vvzela Kook ponder human agency in viewing a digital urban landscape—how a smart participatory art form can facilitate viewers’ understanding of a virtual Hong Kong and the worldview behind a game. In Autosave: Redoubt, the reconstruction does not pursue total realism. The nature of video games requires artists to strike a balance between fantasy and realism. The 3D reconstruction is not virtual reality. The visual manipulation should be in accordance with the setting of an unreal world, placing players in a liminal land to reflect on the rules of the game.         <br /><br />In Kook’s Confidential Records: Dual Metropolitans, the 10-minute video includes a grand narrative like that of a sci-fi movie, talking about a future underground human Kowloon world battling the overground AI controlled city. What makes it distinctive from a sci-fi movie is how Kook employed both an AI perspective overseeing the overground city and a gamer’s perspective walking in the reconstructed 3D underground Kowloon city with a small real-time two-dimensional map. In this way, the video borrows the interactive effect of a video game. The virtual experience as a gamer encourages viewers to take initiatives to think about what viewers can do and how the architecture of Kowloon city stands between AI and human intelligence.
        The other three artists’ works are shown as a video, audio, or photos on the website. The presentation might seem straightforward, but the artists carefully consider how viewers would see and listen to the works. The way three works are presented online determines their interpretations. Elaine Wong turns photos into a curated video. Riar Rizaldi rearranges audio files into a radio play-like soundscape.         <br /><br />Kat Suryna’s work images are shown on the website in a particular way to encourage a certain reading. Online exhibitions allow artists and the curator to have more control over viewers’ attention. For example, when Suryna exhibited Illumination in person, she noticed that sometimes people would approach her paintings from the wrong angle or the wrong direction. The online presentation would direct viewers’ attention to see a familiar image of Buddha in an unfamiliar way. Thus, viewers would notice the skewed or demonic side of the Buddha image. In an interview about the presentation format, Suryna concluded that, “I also think that re-mediation of a traditional artwork within digital media may add new, exciting layers of meaning and lead to a better appreciation of that artwork.” As she says, digital media as a medium detaches imageries from reality and endows artists with freedom to reinterpret them.
        Some might argue that this type of new media art utilizes and distorts cultural symbols, risking nihilism and history revisionism. Indeed, artworks in this exhibition do not aim to reflect and analyze some phenomena objectively and comprehensively. The fragmentation of cultural symbols in art could instead counter an authoritative narrative and help shape a more sophisticated and profound understanding of a city.
        <br /><br />Ever since the pandemic in 2020, difficulties in international travel barred people from returning home. Just like social media, a representation of Hong Kong in the parallel digital universe can satisfy some of our emotional needs, providing an escape for some people from reality. Technology may have a dangerous tendency to weaken people’s real-life interactions. However, engaging in fantasies in the virtual world is not all that detrimental. Virtual worlds may also provide us with new perspectives to approach the real world. In an interview with Riar Rizaldi, he said, “I tried to make a soundscape that a friend of mine, a domestic worker, can also listen to on their weekends to somehow enjoy their time, so it’s like something I also want to present, giving back the knowledge they (domestic workers) gave me.”
        </p>
        <p>Sharon Xiaorong Liu   |   2022 / 04 / 26 </p>
        </>
  
      )

      case 'autosave':
      
      return (

        <>
        <h3>Autosave: Redoubt (2018)</h3>
        <div className="artistflex">
        <h4>Andrew LUK</h4>
        <h4>Alexis MAILLES</h4>
        <h4>Peter NELSON</h4>
        </div>
        <div className="artistflex">
        <a href="www.andrewluk.com" target="_blank">www.andrewluk.com</a>
        <a href="www.alexismailles.com" target="_blank">www.alexismailles.com</a>
        <a href="www.peteracnelson.com" target="_blank">www.peteracnelson.com</a>
        </div>
        <p>Autosave: Redoubt is made to be a playable map for the computer game Counter-Strike: Global Offensive. It is a site-specific recreation of the WWII bunkers and tunnels of the Kowloon Peninsula built by the British during the 1930s. This piece taps into the dysfunctional military architecture of the historical site as well as the contradictions embedded in the 3D computer game technology for virtual archaeology — the more realistic the site recreation became, the less playable it became as a computer game.
Andrew Luk is a Hong Kong artist who works across a range of media examining the intricacies of the human experience as well as the myths and histories associated with civilisation building. His work has been exhibited internationally including in Asia Society (Hong Kong), Tai Kwun Contemporary (Hong Kong), HOW Art Museum (Shanghai), and Kula Bazaar ACC (Gwangju). 
Alexis Mailles produces hybrid installations that border the frontiers of Arte Povera and cyberpunk styles by using digital and analogue techniques. He has exhibited worldwide, including the M21 Museum (Shanghai), the 18th Street Art Center (Los Angeles), the Digital Art Center (Taipei), and Espace C.O.N.S.O.L.E (Paris). 
Peter Nelson is a visual artist and academic working at the intersection of landscape theory and computer games. Originally trained in painting and drawing, Nelson currently produces exhibitions across a number of media, from painting and drawing, to animation, 3D printed sculpture and interactive game-based systems. He has held numerous group and solo exhibitions, including projects with HanArt TZ Gallery (Hong Kong), The National Palace Museum (Taiwan), The Sichuan Fine Art Academy Museum (Chongqing) and the K11 Art Foundation (Hong Kong). He is an Assistant Professor at Hong Kong Baptist University.</p>
<div id="armidmenu">
<img className="arlogo" src="/arlogo.png"/>
<button className="xp"><a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank"><img src="/encsbut.svg"></img></a></button>
<button className="xp"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1180213005&searchtext=Autosave%3A+Redoubt" target="_blank"><img src="/enarbut.svg"></img></a></button>
</div>
<div id="asytcontainer">
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/I3Mr4dbVDy4" allowFullScreen="" frameBorder="no"/>
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/XvERO-f8wfE" allowFullScreen="" frameBorder="no"/>
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/S1zhsv44qlU" allowFullScreen="" frameBorder="no"/>
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/hW2qJiNeotc" allowFullScreen="" frameBorder="no"/>
  </div>
        </>
  
      )
      
      case 'confidential':

      function getVid() {
        
        var getVid = document.getElementById("confreciframe");
        console.log(getVid.offsetWidth);
        getVid.style.height = (getVid.offsetWidth / 3.55848011083) + "px";
      }

      return (

        <>
        <h3>Confidential Records: Dual Metropolitans (2016 - 2018)</h3>
        <h4>Vvzela Kook</h4>
        <a href="www.vvzela.co" target="_blank">www.vvzela.co</a>
        <p>Confidential Records: Dual Metropolitans utilizes 3D animation to reconstruct the cyberspace of Kowloon Walled City and imagine what it would be like in the future governed by artificial intelligence. In reality, as an enclave inside Hong Kong during British colonization, Kowloon Walled City developed into a huge and comprehensive urban system. Ungoverned and outlandish, it has long served as an inspiration for cyberpunk-themed artworks. Kook’s project combines history, myth, and sci-fi narratives with digital media to dig into the aesthetics and architecture of dystopia.
        Vvzela Kook is a new media artist who mainly works in audiovisual mediums, including performance, theater, generative art and drawing. Kook’s works combine technology with her artistic practice to reproduce and convert urban cityscapes into an integrated virtual experience, guiding the audience on a cybernetic journey. Kook has participated and shown her works in Kathmandu Triennial, MoCA Taipei, Microwave International Media Festival (Hong Kong), PuSh Performing Art Festival (Vancouver), and Mill6 Foundation (Hong Kong)</p>
        <iframe width="100%" title="vimeo-player" frameBorder="no" src="https://player.vimeo.com/video/297653544?h=4ccbbb86fe" id="confreciframe" allowFullScreen></iframe>
        { setTimeout(()=>{getVid()}, 50) }
        { window.addEventListener("resize", getVid) }
        </>
  
      )

      case 'illumination':

   buddhachanger();

      return (

        <>
        <h3>Illumination (2021)</h3>
        <h4>Kat Suryna</h4>
        <a href="www.katsuryna.com" target="_blank">www.katsuryna.com</a>
        <p>Illumination presents the transformation of Buddha’s face in five steps. Through the nuanced changes of light and colors, the Buddha’s varied looks reflect the different spiritual spaces that Suryna has experienced through living in Hong Kong. Lit by warm natural light, the benign face of Buddha is the image Hong Kong aims to achieve via the many Buddha statues in the city. In contrast, inspired by the faces of people on the streets as they stare in concentration at their phones, the demonic look of Buddha lit by cold screen light mirrors an unflattering persona we often encounter/perform online through anonymous identity. The animation is made in collaboration with Sandu Cojocari.
Kat Suryna is an international figurative artist with a background in academic philosophy. She follows the tradition of Russian academic drawing and painting, in which she was formally instructed. Her work has been exhibited in Estonia, Hungary, Austria, and Hong Kong. Her art focuses on the human body, organic patterns in nature, and architectural narratives.</p>
       
        <div id="buddhacontainer">
        <img className="buddhaposition" id="buddha5" src="/5.png"></img>
        <img className="buddhaposition" id="buddha4" src="/4.png"></img>
        <img className="buddhaposition" id="buddha3" src="/3.png"></img>
        <img className="buddhaposition" id="buddha2" src="/2.png"></img>
        <img className="buddhaposition" id="buddha1" src="/1.png"></img>
        </div>
        </>

        
  
      )
      
      case 'butterflies':

      return (

        <>
        <h3>Butterflies on the Wheel (2020)</h3>
        <h4>Elaine Wong</h4>
        <a href="www.miss-wong.com" target="_blank">www.miss-wong.com</a>
        <p>Butterflies on the Wheel hails from a cruel imagery – the butterflies flew into a blender and broke their wings. The artwork aims to experiment with videography regarding different forms of presentation through interaction with space. Wong videotaped the cityscape of Hong Kong, and shattered the moving images into broken-down frames. She then projected the images onto her own living room wall. The polygonal and limited space generated multiple reflections, resulting in the fragmentalization of images. It seems to critique the fractured conditions of life caused by the deteriorating spatial capitalization in the city, or perhaps contemplates the relationship between women and the imagery of claustrophobia that Wong has also explored.
Elaine Wong explores and unveils the manifolds of daily encounters and inner conditions. She regards her practice as an investigation of the potentials of art beyond representation, its relation to sensation, documentation and experience. Her works have been shown internationally, 107 Projects (Australia), the Hong Kong Heritage Museum, Oi! Street Art Space (Hong Kong), EXIS Korea, and Poland Szczecin European Film Festival.</p>
<p id="manual">Click and drag, or zoom the image below to look around in Wong's living room.</p>
<iframe className="butterfliesframe" frameBorder="no" src="/english/butterflies_en.htm"></iframe>
        </>
  
      )

      case 'domestik':
        
      return (

        <>
        <h3>Domestik / Publik (2020)</h3>
        <h4>Riar Rizaldi</h4>
        <a href="www.riarrizaldi.com" target="_blank">www.riarrizaldi.com</a>
        <p>Domestik/Publik reflects the notions of sound and spatial knowledge as conceived by Indonesian domestic migrant workers in Hong Kong. The first part of the piece focuses on a ‘public ear’ while the second half is an investigation into a ‘domestic ear.’ A soundscape of Sunday at Victoria Park, the weekly women’s rights speech, public radio-karaoke, the soundtrack for Jaranan dance and a composed noise of domestic utensils are presented in this sonic-narrative that mimics the aesthetic of radio play.
<br /><br />Riar Rizaldi works as an artist and amateur researcher. Born in Indonesia and currently based in Hong Kong. His main focus is on the relationship between capital and technology, extractivism, and theoretical fiction. Through his works, he questions the notions of image politics, materiality, media archaeology and unanticipated consequences of technologies. His works have been shown at Locarno Film Festival, BFI Southbank London, International Film Festival Rotterdam, NTT InterCommunication Center Tokyo, and National Gallery of Indonesia amongst others.

<br /><br />Domestik/Publik is part of Riar Rizaldi’s project The Right to Do Nothing. 
For more info about the idea: <span><a href="https://www.ctm-festival.de/festival-2021/open-calls/ctm-radio-lab-2021">https://www.ctm-festival.de/festival-2021/open-calls/ctm-radio-lab-2021</a></span></p>
<>
  <iframe
    width="100%"
    height={100}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1279244449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  />
  <div
    style={{
      fontSize: 10,
      color: "#cccccc",
      lineBreak: "anywhere",
      wordBreak: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily:
        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
      fontWeight: 100
    }}
  >
    <a
      href="https://soundcloud.com/rizaldiriar"
      title="Riar Rizaldi"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Riar Rizaldi
    </a>{" "}
    ·{" "}
    <a
      href="https://soundcloud.com/rizaldiriar/domestikpublik"
      title="Domestik:Publik"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Domestik:Publik
    </a>
  </div>
</>
<img className="contentimg" src="/domestik.jpg"></img>
        </>
  
      )

    }

  } else {

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
        <br /><br />
        ＊施叔青  |  1997年<br /><br />
        《香港三部曲之1: 她名叫蝴蝶》，洪範書店有限公司
        </p>
      </>

      )

      case 'autosave':
      
      return (

        <>
        <h3>自動存檔：堡壘 2018年</h3>
        <div className="artistflex">
        <h4>陸浩明</h4>
        <h4>亞歷克斯·麥爾斯</h4>
        <h4>彼得·倪爾森</h4>
        </div>
        <div className="artistflex">
        <a href="www.andrewluk.com" target="_blank">www.andrewluk.com</a>
        <a href="www.alexismailles.com" target="_blank">www.alexismailles.com</a>
        <a href="www.peteracnelson.com" target="_blank">www.peteracnelson.com</a>
        </div>
        <p>《自動存檔：堡壘》是為電競射擊遊戲「絕對武力：全球攻勢」的玩家所創作的地圖。該地圖還原了英軍二戰時在九龍半島修築的、以抵禦日軍侵佔的壕溝與隧道。游戲媒介的運用不但讓玩家在電競中直接體驗到該歷史遺址在軍事功能上的缺陷，而且揭示了用計算機3D游戲科技介入虛擬考古學所引發的悖論──該游戲對歷史遺址的還原度越高，它的可玩性就越打折扣。
陸浩明是一名香港藝術家。他用不同媒介的創作來探尋人類經驗的紛繁複雜性，以及與人類文明建設相關的神話與歷史。他的作品曾展於亞洲協會（香港）、大館（香港）、昊美術館（上海）和Kula Bazaar ACC（光州）。
亞歷克斯·麥爾斯運用數碼和模擬技術來創作混合裝置，其作品橫跨貧窮藝術與賽博朋克的前沿。他的作品曾展出於二十一世紀民生美術館（上海）、第十八街藝術中心（洛杉磯）、數位藝術中心（臺北）和Espace C.O.N.S.O.L.E（巴黎）。
彼得·倪爾森是一名視覺藝術家和學術研究者。他的創作結合景觀理論和計算機游戲。繪畫訓練出身的倪爾森現創作的媒介包括繪畫、動畫、3D打印雕塑和交互式游戲系統。他的作品曾展於漢雅軒（香港）、國立故宮博物院（台灣）、四川美術學院美術館（重慶）和K11藝術基金會（香港）。倪爾森現任香港浸會大學助理教授。
</p>
<div id="armidmenu">
<img className="arlogo" src="/arlogo.png"/>
<button className="xp"><a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank"><img src="/chcsbut.svg"></img></a></button>
<button className="xp"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1180213005&searchtext=Autosave%3A+Redoubt" target="_blank"><img src="/charbut.svg"></img></a></button>
</div>
<div id="asytcontainer">
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/I3Mr4dbVDy4" allowFullScreen="" frameborder="no"/>
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/XvERO-f8wfE" allowFullScreen="" frameborder="no"/>
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/S1zhsv44qlU" allowFullScreen="" frameborder="no"/>
  <iframe className='autosaveVid' src="https://www.youtube.com/embed/hW2qJiNeotc" allowFullScreen="" frameborder="no"/>
  </div>
        </>
  
      )
      
      case 'confidential':

      
      function getVid() {
        
        if (page == 'confidential') {
        var getVid = document.getElementById("confreciframe");

        getVid.style.height = (getVid.offsetWidth / 3.55848011083) + "px";


      }
      }

      return (

        <>
        <h3>機密錄：雙城 2016﹣2018年</h3>
        <h4>曲淵澈</h4>
        <a href="www.vvzela.co" target="_blank">www.vvzela.co</a>
        <p>《自動存檔：堡壘》是為電競射擊遊戲「絕對武力：全球攻勢」的玩家所創作的地圖。該地圖還原了英軍二戰時在九龍半島修築的、以抵禦日軍侵佔的壕溝與隧道。游戲媒介的運用不但讓玩家在電競中直接體驗到該歷史遺址在軍事功能上的缺陷，而且揭示了用計算機3D游戲科技介入虛擬考古學所引發的悖論──該游戲對歷史遺址的還原度越高，它的可玩性就越打折扣。
陸浩明是一名香港藝術家。他用不同媒介的創作來探尋人類經驗的紛繁複雜性，以及與人類文明建設相關的神話與歷史。他的作品曾展於亞洲協會（香港）、大館（香港）、昊美術館（上海）和Kula Bazaar ACC（光州）。
亞歷克斯·麥爾斯運用數碼和模擬技術來創作混合裝置，其作品橫跨貧窮藝術與賽博朋克的前沿。他的作品曾展出於二十一世紀民生美術館（上海）、第十八街藝術中心（洛杉磯）、數位藝術中心（臺北）和Espace C.O.N.S.O.L.E（巴黎）。
彼得·倪爾森是一名視覺藝術家和學術研究者。他的創作結合景觀理論和計算機游戲。繪畫訓練出身的倪爾森現創作的媒介包括繪畫、動畫、3D打印雕塑和交互式游戲系統。他的作品曾展於漢雅軒（香港）、國立故宮博物院（台灣）、四川美術學院美術館（重慶）和K11藝術基金會（香港）。倪爾森現任香港浸會大學助理教授。
</p>
<iframe id="confreciframe" src="https://player.vimeo.com/video/297653544?h=4ccbbb86fe" width="100%;" height="100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        { setTimeout(()=>{getVid()}, 50) }
        { window.addEventListener("resize", getVid) }
        </>
  
      )

      case 'illumination':

      buddhachanger();

      return (

        <>
        <h3>啟示 2021年</h3>
        <h4>Kat Suryna</h4>
        <a href="www.katsuryna.com" target="_blank">www.katsuryna.com</a>
        <p>《啟示》呈現了佛像在不同明暗和顔色的光線中分五個階段的轉變。佛生諸態反映了Suryna在香港生活期間所體驗到的該城的精神空間。由自然暖光所照射的佛之善相接近於香港許多佛雕的樣態，是人們心中理想。然而，Suryna亦受香港路人普遍埋頭手機屏幕的狀態所感，而描畫出佛像在屏幕冷調光線下所顯現出的邪惡之相，以指涉我們在網絡上因匿名所遇到的、或者扮演的具有攻擊性的人格。該動畫效果由Suryna 与Sandu Cojocari 共同製作。
	        Kat Suryna是一名具有哲學學術背景的具象藝術家。她受俄羅斯學院繪畫傳統訓練。她的作品曾展於愛沙尼亞、匈牙利、澳大利亞和香港。她的藝術作品專注於挖掘人體、自然有機體的圖案和建築敘事。</p>
       <div id="buddhacontainer">
        <img className="buddhaposition" id="buddha5" src="/5.png"></img>
        <img className="buddhaposition" id="buddha4" src="/4.png"></img>
        <img className="buddhaposition" id="buddha3" src="/3.png"></img>
        <img className="buddhaposition" id="buddha2" src="/2.png"></img>
        <img className="buddhaposition" id="buddha1" src="/1.png"></img>
        </div>
        </>
  
      )
      
      case 'butterflies':

      return (

        <>
        <h3>碎蝶 2020年</h3>
        <h4>黃淑賢</h4>
        <a href="www.miss-wong.com" target="_blank">www.miss-wong.com</a>
        <p>從蝴蝶偶然飛進攪拌機而折翼的殘酷意象出發，《碎蝶》意在打開錄像創作中關於媒介與空間的展示形式的實驗。黃氏將所攝錄的香港城市空間流動影像剪斷、定格，然後逐一投射到她的居室中。影像在多邊形的狹小空間裏形成重重折射，最終呈現出的破碎畫面似在隱喻被資本邏輯所侵佔的城市空間中生活的破裂，又或是沿續黃氏對女性與幽閉空間意象之間的精神層面的反思。
黃淑賢探索並揭示生活及內在狀態的多種層面與複雜體驗。她關注藝術與感覺、記錄和體驗的關係，以及其超越表象的可能性。其作品曾展於107計劃（澳洲）、香港文化博物館、油街實現藝術空間（香港）、韓國EXiS流動影像媒體藝術節和波蘭什切青歐洲電影節。
</p>
<iframe className="butterfliesframe" frameBorder="no" src="/chinese/butterflies_ch.htm"></iframe>
        </>
  
      )

      case 'domestik':
        
      return (

        <>
        <h3>家居/公共 2020年</h3>
        <h4>Riar Rizaldi</h4>
        <a href="www.riarrizaldi.com" target="_blank">www.riarrizaldi.com</a>
        <p>《家居/公共》旨在反映在香港工作的印尼裔家傭對聲音和空間概念的理解。該作的前半部分和後半部分分別表現「公共耳朵」和「家居耳朵」的聽域。該作將星期天維多利亞公園的聲音景觀、每周一次的女性權利演講、公共廣播卡拉OK、東爪哇舞蹈的原聲帶和Rizaldi所編排的家用器皿的噪音混錄在一起，以廣播劇美學形態呈現出一種獨特的聲音敘事。
	Riar Rizaldi 是一名藝術家和研究愛好者。他出生於印尼，現居香港。他的創作專注於探討資本與科技、榨取主義及科幻理論之間的關係。他透過藝術質詢影像政治、物質性、媒介考古學和科技發展帶來的不可預料的後果。他的作品曾展於洛迦諾 電影節、倫敦BFI Southbank、鹿特丹國際電影節、東京NTT InterCommunication Center和印尼國立美術館。</p><a href="https://www.ctm-festival.de/festival-2021/open-calls/ctm-radio-lab-2021">https://www.ctm-festival.de/festival-2021/open-calls/ctm-radio-lab-2021</a>
 <>
  <iframe
    width="100%"
    height={100}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1279244449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  />
  <div
    style={{
      fontSize: 10,
      color: "#cccccc",
      lineBreak: "anywhere",
      wordBreak: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily:
        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
      fontWeight: 100
    }}
  >
    <a
      href="https://soundcloud.com/rizaldiriar"
      title="Riar Rizaldi"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Riar Rizaldi
    </a>{" "}
    ·{" "}
    <a
      href="https://soundcloud.com/rizaldiriar/domestikpublik"
      title="Domestik:Publik"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Domestik:Publik
    </a>
  </div>
</>
        <img className="contentimg" src="/domestik.jpg"></img>
        </>
  
      )

    }

  }

}


async function buddhachanger() {

  const buddhaimages = document.getElementsByClassName("buddhaposition");
  let index = 4;
  let direction = 'down';

  setInterval(() => {

    if (direction == 'down') {

      if (buddhaimages[index] != undefined) {
      buddhaimages[index].classList.remove("op1");
      buddhaimages[index].classList.add("op0");
      index -= 1;

          if (index == 1) {
            direction = "up";
          }
        }
    } else if (direction == 'up') {

      if (buddhaimages[index] != undefined) {

      buddhaimages[index].classList.remove("op0");
      buddhaimages[index].classList.add("op1");
      index += 1;

          if (index == 4) {
            direction = "down";
          }
      }
    }
  }, 5000);
}

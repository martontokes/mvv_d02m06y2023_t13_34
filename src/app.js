import React, { useState, useEffect } from 'react';

export default function App() {

  const [isWelcome, setWelcome] = useState(true);
  const [isEnglish, setEnglish] = useState(undefined);
  const [page, setPage] = useState(0);

  return (
    <>
      {isWelcome ? (
        <Welcome setWelcome={setWelcome} setEnglish={setEnglish} />
      ) : (
        <Content page={page} setPage={setPage} isEnglish={isEnglish} />
      )}
    </>
  );
}

function Welcome({ setWelcome, setEnglish }) {
  const setEng = () => {
    setTimeout(() => {
      setEnglish(true);
      setWelcome(false);
    }, 1000);
  };

  const setZh = () => {
    setTimeout(() => {
      setEnglish(false);
      setWelcome(false);
    }, 1000);
  };

  return (
    <>
      <h1>metro via virtual</h1>
      <h1>a virtual exhibition from Hong Kong</h1>
      <button onClick={setEng}>enter exhibition</button>
      <h1>虛擬都會</h1>
      <h1>來自香港的線上展覽</h1>
      <button onClick={setZh}>進入展覽</button>
    </>
  );
}

function Content({ isEnglish, page, setPage }) {
  if (isEnglish) {
    return <English page={page} setPage={setPage} />;
  } else {
    return <Chinese page={page} setPage={setPage} />;
  }
}

function English({ page, setPage }) {
  const handleContentChange = (newPage) => {
    setTimeout(() => {
      setPage(newPage);
    }, 2000);
  };

  return (
    <>
      <EnglishMenu handleContentChange={handleContentChange} />
      <EnglishContent page={page} />
    </>
  );
}

function Chinese({ page, setPage }) {
  const handleContentChange = (newPage) => {
    setTimeout(() => {
      setPage(newPage);
    }, 2000);
  };

  return (
    <>
      <ChineseMenu handleContentChange={handleContentChange} />
      <ChineseContent page={page} />
    </>
  );
}

function EnglishMenu({ handleContentChange }) {
  return (
    <>
      <h2>metro via virtual</h2>
      <h3>A virtual exhibition from Hong Kong</h3>
      <button onClick={() => handleContentChange(1)}>curatorial statement</button>
      <button onClick={() => handleContentChange(2)}>essay about the exhibition</button>
      <button onClick={() => handleContentChange(3)}>Autosave: Redoubt</button>
      <button onClick={() => handleContentChange(4)}>Confidential Records: Dual Metropolitans</button>
      <button onClick={() => handleContentChange(5)}>Illumination</button>
      <button onClick={() => handleContentChange(6)}>Butterflies on the Wheel</button>
      <button onClick={() => handleContentChange(7)}>Domestik/Publik</button>
    </>
  );
}

function ChineseMenu({ handleContentChange }) {
  return (
    <>
      <h2>虛擬都會</h2>
      <h3>虛擬都會</h3>
      <button onClick={() => handleContentChange(1)}>策展論</button>
      <button onClick={() => handleContentChange(2)}>自動存檔：堡壘</button>
      <button onClick={() => handleContentChange(3)}>機密錄：雙城</button>
      <button onClick={() => handleContentChange(4)}>啟示</button>
      <button onClick={() => handleContentChange(5)}>黃淑賢</button>
      <button onClick={() => handleContentChange(6)}>家居/公共</button>
    </>
  );
}

function EnglishContent({ page }) {
  const renderContent = () => {
    switch (page) {
      case 1:
        return (
          <>
            <h2>Page 1</h2>
            {/* JSX markup for page 1 */}
          </>
        );
      case 2:
        return (
          <>
            <h2>Page 2</h2>
            {/* JSX markup for page 2 */}
          </>
        );
      case 3:
        return (
          <>
            <h2>Page 3</h2>
            {/* JSX markup for page 3 */}
          </>
        );
      case 4:
        return (
          <>
            <h2>Page 4</h2>
            {/* JSX markup for page 4 */}
          </>
        );
      case 5:
        return (
          <>
            <h2>Page 5</h2>
            {/* JSX markup for page 5 */}
          </>
        );
        case 6:
          return (
            <>
              <h2>Page 6</h2>
              {/* JSX markup for page 5 */}
            </>
          );
          case 7:
            return (
              <>
                <h2>Page 7</h2>
                {/* JSX markup for page 5 */}
              </>
            );
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
}

function ChineseContent({ page }) {
  const renderContent = () => {
    switch (page) {
      case 1:
        return (
          <>
            <h2>Page 1</h2>
            {/* JSX markup for page 1 */}
          </>
        );
      case 3:
        return (
          <>
            <h2>Page 3</h2>
            {/* JSX markup for page 3 */}
          </>
        );
      case 4:
        return (
          <>
            <h2>Page 4</h2>
            {/* JSX markup for page 4 */}
          </>
        );
      case 5:
        return (
          <>
            <h2>Page 5</h2>
            {/* JSX markup for page 5 */}
          </>
        );
        case 6:
          return (
            <>
              <h2>Page 6</h2>
              {/* JSX markup for page 5 */}
            </>
          );
          case 7:
            return (
              <>
                <h2>Page 7</h2>
                {/* JSX markup for page 5 */}
              </>
            );
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
}
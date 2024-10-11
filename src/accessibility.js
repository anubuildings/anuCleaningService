import React, { useState, useEffect } from 'react';
import './accessibilityMenu.css'; // Include CSS for custom styles

const AccessibilityMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textScale, setTextScale] = useState(1); // Default scaling factor (1 = 100%)
  const [lineHeightScale, setLineHeightScale] = useState(1); // Default line height scaling factor
  const [isInverted, setIsInverted] = useState(false);
  const [isGray, setIsGray] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [isBigCursor, setIsBigCursor] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const increaseTextSize = () => {
    setTextScale(prevScale => prevScale + 0.1); // Increase text scaling by 10%
  };

  const decreaseTextSize = () => {
    setTextScale(prevScale => Math.max(prevScale - 0.1, 0.5)); // Decrease scaling, minimum 50%
  };

  const increaseLineHeight = () => {
    setLineHeightScale(prevScale => prevScale + 0.1); // Increase line height scaling
  };

  const decreaseLineHeight = () => {
    setLineHeightScale(prevScale => Math.max(prevScale - 0.1, 1)); // Decrease line height, minimum 1
  };

  const toggleInvertColors = () => {
    setIsInverted(!isInverted);
  };

  const toggleGrayHues = () => {
    setIsGray(!isGray);
  };

  const toggleUnderlineLinks = () => {
    setIsUnderlined(!isUnderlined);
  };

  const toggleBigCursor = () => {
    setIsBigCursor(!isBigCursor);
  };

  // Apply accessibility options to body
  useEffect(() => {
    const root = document.documentElement;

    // Apply scaling to body text and headings based on scale factor
    if (textScale !== 1) {
      const style = document.createElement('style');
      style.innerHTML = `
        body, p, span, a, ul, li {
          font-size: calc(16px * ${textScale}) !important; /* Scale based on 16px base */
        }
        h1 { font-size: calc(4.5rem * ${textScale}) !important; } /* Scale headings */
        h2 { font-size: calc(4rem * ${textScale}) !important; }
         h2 + div { font-size: 2.5rem !important; } /* Set div under h2 to 2.5rem */
        h3 { font-size: calc(2.5rem * ${textScale}) !important; }
        h4 { font-size: calc(1.5rem * ${textScale}) !important; }
        h5 { font-size: calc(1.25rem * ${textScale}) !important; }
        h6 { font-size: calc(1rem * ${textScale}) !important; }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style); // Clean up when component unmounts or textScale changes
      };
    }
  }, [textScale]);

  useEffect(() => {
    if (lineHeightScale !== 1) {
      const style = document.createElement('style');
      style.innerHTML = `
        body, p, div, span, a, ul, li, h1, h2, h3, h4, h5, h6 {
          line-height: calc(1.5 * ${lineHeightScale}) !important; /* Scale line height */
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style); // Clean up when component unmounts or lineHeightScale changes
      };
    }
  }, [lineHeightScale]);

  useEffect(() => {
    document.body.style.filter = isInverted ? 'invert(1)' : 'none';
    document.body.style.color = isGray ? '#555' : 'initial';
    document.body.style.cursor = isBigCursor ? 'url(big-cursor.png), auto' : 'auto';
  }, [isInverted, isGray, isBigCursor]);

  useEffect(() => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.textDecoration = isUnderlined ? 'underline' : 'none';
    });
  }, [isUnderlined]);

  return (
    <>
      <button className="floating-button" onClick={toggleMenu}>
        Accessibility
      </button>

      {isMenuOpen && (
        <div className="accessibility-menu">
          <h3>Accessibility Options</h3>
          <button onClick={increaseTextSize}>Increase Text Size</button>
          <button onClick={decreaseTextSize}>Decrease Text Size</button>
          <button onClick={increaseLineHeight}>Increase Line Height</button>
          <button onClick={decreaseLineHeight}>Decrease Line Height</button>
          <button onClick={toggleInvertColors}>
            {isInverted ? 'Normal Colors' : 'Invert Colors'}
          </button>
          <button onClick={toggleGrayHues}>
            {isGray ? 'Normal Colors' : 'Gray Hues'}
          </button>
          <button onClick={toggleUnderlineLinks}>
            {isUnderlined ? 'Normal Links' : 'Underline Links'}
          </button>
          <button onClick={toggleBigCursor}>
            {isBigCursor ? 'Normal Cursor' : 'Big Cursor'}
          </button>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;

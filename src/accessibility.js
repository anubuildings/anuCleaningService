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

  // Reset all settings to default values
  const resetAccessibility = () => {
    setTextScale(1);
    setLineHeightScale(1);
    setIsInverted(false);
    setIsGray(false);
    setIsUnderlined(false);
    setIsBigCursor(false);
  };

  // Apply accessibility options to body
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      body, p, a, ul, li, div, span {
        font-size: ${16 * textScale}px !important; /* Scale body text */
      }
      h1 { font-size: ${2.5 * textScale}rem !important; } /* Scale headings */
      h2 { font-size: ${2 * textScale}rem !important; }
      h3 { font-size: ${1.75 * textScale}rem !important; }
      h4 { font-size: ${1.5 * textScale}rem !important; }
      h5 { font-size: ${1.25 * textScale}rem !important; }
      h6 { font-size: ${1 * textScale}rem !important; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Clean up when component unmounts or textScale changes
    };
  }, [textScale]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      body, p, div, span, a, ul, li, h1, h2, h3, h4, h5, h6 {
        line-height: ${1.5 * lineHeightScale} !important; /* Scale line height */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Clean up when component unmounts or lineHeightScale changes
    };
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
          <button className="close-button" onClick={toggleMenu}>×</button> {/* Close Icon */}
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
          <button onClick={resetAccessibility}>Reset</button>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;

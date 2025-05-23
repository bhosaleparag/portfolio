import React, { useEffect, useRef } from 'react';
const Cursor = () => {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    const cursor = cursorRef.current;
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    const maxX = window.innerWidth - 40; // horizontal size screen
    const maxY = window.innerHeight - 40; // virtical size screen
    const newX = Math.min(maxX, Math.max(0, mouseX - 20));
    const newY = Math.min(maxY, Math.max(0, mouseY - 20));
    if(newX == 0 || newX == maxX){
      cursor.className = 'cursor rounded squeezeLeft'
    }else if(newY == maxY || newY == 0){
      cursor.className = 'cursor rounded squeezeUp'
    }else{
      cursor.className = 'cursor rounded'
    }
    cursor.style.transform = `translate3d(${newX}px, ${newY}px, 0) rotate(42deg)`;
  };
  useEffect(() => {
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="cursor rounded" ref={cursorRef}></div>
  );
};

export default Cursor;
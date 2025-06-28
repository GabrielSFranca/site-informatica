'use client'

import React from 'react';

interface BtnProps {
  texto: string;
  //onClick?: () => void; // sem tipo e estilo
}

export function Button({
  texto
  //onClick
} : BtnProps){
  return (
    <button
      //onClick={onClick}
      className='btn'
      >
        {texto}
    </button>
  );
}


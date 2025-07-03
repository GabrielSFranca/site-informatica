"use client";
import React from "react";

interface BtnProps {
  label : string
  onClick?: () => void
}

export function Button( { label, onClick } : BtnProps ) {
  return (
    <button
      onClick={onClick} 
      className="btn">
      {label}
    </button>
  );
}

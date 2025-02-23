import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = "", disabled = false }) => (
  <button onClick={onClick} className={`button ${className}`} disabled={disabled}>
    {children}
  </button>
);

export default Button;

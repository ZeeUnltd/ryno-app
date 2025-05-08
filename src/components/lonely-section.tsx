import React, { useState } from 'react';
import Image from 'next/image';

interface LonelySectionProps {
  title?: string;
  description?: string;
  className?: string;
}

const LonelySection: React.FC<LonelySectionProps> = ({
  title = "Don't let your data be lonely",
  description = "Connect your data sources and start exploring your data in minutes.",
  className = "",
}) => {
  const [isHovering, setIsHovering] = useState(false);
  
  
  return (
    <>
    hello</>
  )}
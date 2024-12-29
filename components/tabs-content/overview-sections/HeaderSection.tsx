import React from 'react';
import Image from 'next/image';

const HeaderSection = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-[80px] h-[80px]">
        <Image
          src="/tw-logo.png"
          alt="TradeWizz Logo"
          width={80}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-[#20152E]">TradeWizz</h1>
        <p className="text-gray-600">AI-powered e-commerce management platform</p>
      </div>
    </div>
  );
};

export default HeaderSection; 
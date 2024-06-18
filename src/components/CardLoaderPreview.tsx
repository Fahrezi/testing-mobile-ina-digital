import React from 'react';
import CreditCardIcon from './Icon/CreditCardIcon';
import { Card } from 'ina-ui/react';
import ChevronDownIcon from './Icon/ChevronDownIcon';

export default function CardLoaderPreview() {
  return (
    <Card className="!my-2">
      <div className="flex items-center justify-between animate-pulse">
        <div className="flex items-center space-x-1">
          <div className="flex items-center justify-center p-2">
            <CreditCardIcon />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          </div>
        </div>
        <div className="transition-all transform">
          <ChevronDownIcon />
        </div>
      </div>
    </Card>
  );
}

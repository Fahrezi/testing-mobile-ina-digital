import React from 'react';
import CreditCardIcon from './Icon/CreditCardIcon';
import { Card } from 'ina-ui/react';
import ChevronDownIcon from './Icon/ChevronDownIcon';

export default function CardLoaderPreview() {
  return (
    <Card className="!my-2">
      <div className="flex animate-pulse items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="flex items-center justify-center p-2">
            <CreditCardIcon />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="h-3 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="transform transition-all">
          <ChevronDownIcon />
        </div>
      </div>
    </Card>
  );
}

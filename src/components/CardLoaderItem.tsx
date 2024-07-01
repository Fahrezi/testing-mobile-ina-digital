import { Card } from 'ina-ui/react';
import React from 'react';

export default function CardLoaderItem() {
  return (
    <Card>
      <div className="flex animate-pulse flex-col space-y-2">
        <div className="flex items-start justify-between">
          <div className="mb-2 h-6 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div>
          <p className="text-xxs text-subtitle">No. BPJS Kesehatan</p>
          <div className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xxs text-subtitle">Peserta</p>
            <div className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xxs text-subtitle">Jenis Kelas</p>
            <div className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xxs text-subtitle">Tanggal Lahir</p>
            <div className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xxs text-subtitle">Faskes 1</p>
            <div className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </Card>
  );
}

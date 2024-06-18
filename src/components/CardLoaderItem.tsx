import { Card } from 'ina-ui/react';
import React from 'react';

export default function CardLoaderItem() {
  return (
    <Card>
      <div className="flex flex-col space-y-2 animate-pulse">
        <div className="flex items-start justify-between">
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
        </div>
        <div>
          <p className="text-subtitle text-xxs">No. BPJS Kesehatan</p>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-subtitle text-xxs">Peserta</p>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-subtitle text-xxs">Jenis Kelas</p>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-subtitle text-xxs">Tanggal Lahir</p>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-subtitle text-xxs">Faskes 1</p>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          </div>
        </div>
      </div>
    </Card>
  );
}

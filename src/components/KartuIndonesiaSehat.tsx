import { StringDictionary } from '@/lib/definitions'
import { Button } from 'ina-ui/react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function KartuIndonesiaSehat({ patientData } : { patientData: StringDictionary }) {  
  return (
    <div className="mb-4 relative">
      <Image src="/kartu-indonesia-sehat.png" alt="Kartu Indonesia Sehat" id="kis" className="!w-full" height={270} width={420} />
        {Object.keys(patientData).filter((value: string) => !['profession', 'classType'].includes(value)).map((value: string, key: number) => (
          <small 
            className={`absolute left-[32%] mb-[1px] block text-[8px] leading-[10px]`}
            key={key}
            style={{ top: `calc(39% + ${10 * key + (['birthDate', 'nik', 'firstFacility'].includes(value) ? 10 : 0)}px)`}}
          >
            {patientData[value]}
          </small>
        ))}
    </div>
  )
}

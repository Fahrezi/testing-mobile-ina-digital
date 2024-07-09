import KartuIndonesiaSehat from '@/components/KartuIndonesiaSehat'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function FullScreenCard() {

  useEffect(() => {
    window.screen.orientation['lock']('landscape').then(() => console.log('landscape'));
  }, []);
  interface StringDictionary {
    [key: string]: string
  }

  const patientData: StringDictionary = {
    idCard: '0000201234567',
    fullName: 'John Alatas',
    profession: 'Pemain Musik',
    classType: 'Kelas 1',
    address: 'Jl Pangeran Dipenogoro, Perumahan Warga Peruri, Blok K No.27, Kec.Gambir, Jakarta Pusat, DKI Jakarta',
    birthDate: '01-01-1990',
    nik: '31123456789',
    firstFacility: 'Klinik Kimia Farma'
  }

  return (
    <div className="bg-slate-100 h-screen text-base-black pt-6 px-4">
      <KartuIndonesiaSehat patientData={patientData} />
    </div>
  )
}

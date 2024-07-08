import React, { useState } from 'react'
import { IconCopy, IconInfoCircle } from '@tabler/icons-react'
import { Block, Button, Chip } from 'ina-ui/react'
import Image from 'next/image'
import Link from 'next/link';
import KartuIndonesiaSehat from '@/components/KartuIndonesiaSehat';

export default function DetailKartuBpjs() {
  const [isCopied, setIsCopied] = useState(false);
  const isActive = true;
  const chipClassName = {
    active: 'm-0.5 bg-green-300 text-green-500 font-medium',
    inactive: 'm-0.5 bg-red-600 text-red-700 font-medium'
  };

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

  function actionCopied() {
    navigator.clipboard.writeText(patientData.idCard).then(() => {
      setIsCopied(true);

      return setTimeout(() => setIsCopied(false), 3000);
    }).catch(err => {
      console.error('Failed to copy text', err);
    })
  }

  return (
    <div className="bg-slate-100 h-screen text-base-black pt-6">
       <Block
        className="!rounded-2xl"
        colors={{
          outlineMaterial: 'border-gray-200',
          strongBgMaterial: 'bg-white',
          outlineIos: 'border-gray-200',
          strongBgIos: 'bg-white',
        }}
        padding="p-4"
        margin="mt-0 mb-4"
        strong
        inset
        outline
      >
        <header className="flex items-center border-b border-b-gray-200 pb-4 mb-4">
          <Image alt="logo-kis" src="/logo.svg" height={24} width={24} />
          <h3 className="font-medium flex-grow ml-2">Kartu Indonesia Sehat</h3>
          <Chip className={chipClassName[isActive ? 'active' : 'inactive']}>{isActive ? 'Aktif' : 'Tidak Aktif'}</Chip>
        </header>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-base">{patientData.fullName}</h2>
          <div className="flex items-center relative">
            <div className="flex-grow">
              <h4 className="text-slate-500 mb-1">No. Kartu</h4>
              <p>{patientData.idCard}</p>
            </div>
            <Button clear className="w-min normal-case text-blue-700" onClick={() => actionCopied()}>Salin <IconCopy className="ml-1" height={20} width={20}/></Button>
            <Chip className={`bg-blue-700 text-white absolute right-0 top-[-20px] bg-opacity-100 text-xs !p-2 leading-3 transition-all ease-in-out -translate-y-1 ${isCopied ? 'h-max opacity-100 translate-y-0' : 'h-0 opacity-0'} duration-200`}>
              Disalin
            </Chip>
          </div>
          <div className="grid grid-cols-2 gap-y-2 mb-4">
            {
              [
                { key: 'Pekerjaan', value: patientData.profession },
                { key: 'Jenis Kelas', value: patientData.classType },
                { key: 'Tanggal Lahir', value: patientData.birthDate },
                { key: 'Faskes 1', value: patientData.firstFacility }
              ].map((value, key) => (
                <div key={key}>
                  <h4 className="text-slate-500 mb-1">{value.key}</h4>
                  <p>{value.value}</p>
                </div>
              ))
            }
          </div>
        </div>
        <Chip className="!px-2 !py-5 bg-red-600 border border-pink-300 text-gray-600 rounded-xl text-left w-full !justify-start">
          <IconInfoCircle className="mr-2" color="rgb(159 18 57)" /> Peserta tidak aktif. Masa berlaku telah habis
        </Chip>
      </Block>
      <Block
        className="!rounded-2xl"
        colors={{
          outlineMaterial: 'border-gray-200',
          strongBgMaterial: 'bg-white',
          outlineIos: 'border-gray-200',
          strongBgIos: 'bg-white',
        }}
        padding="p-4"
        margin="mb-12"
        strong
        inset
        outline
      >
        <KartuIndonesiaSehat patientData={patientData} />
        <Link href="/detail-kartu-bpjs/fullscreen-card" >
          <Button 
            colors={{
              outlineBorderMaterial: 'border-gray-500',
              outlineBorderIos: 'border-gray-500',
              fillBgMaterial: 'bg-gray-500',
              fillBgIos: 'bg-gray-500',
            }} 
            className="rounded-xl capitalize"
            outline 
            large
          >
            Lihat Kartu Lebih Besar
          </Button>
        </Link>
      </Block>
    </div>
  )
}

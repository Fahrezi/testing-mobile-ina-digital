import CardLoaderItem from '@/components/CardLoaderItem';
import { useMemberList } from '@/lib/hooks/useMemberList';
import { Badge, Button, Card, Page, Toolbar } from 'ina-ui/react';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  // const { isLoading, response } = useMemberList();
  const isLoading = false;
  const response = {
    data: [
      {
        name: 'pasien 1',
        status: 'Aktif',
        no_bpjs: '123456789',
        occupation: 'Karyawan Swasta',
        class: 'Kelas 1',
        birthdate: '1 April 2000',
        faskes: 'RS Tebet'
      },
      {
        name: 'pasien 2',
        status: 'Tidak Aktif',
        no_bpjs: '123456789',
        occupation: 'Pengangguran',
        class: 'Kelas 1',
        birthdate: '2 April 2000',
        faskes: 'RS Tebet'
      },
      {
        name: 'pasien 3',
        status: 'Aktif',
        no_bpjs: '123456789',
        occupation: 'Pekerja Lepas',
        class: 'Kelas 1',
        birthdate: '3 April 2000',
        faskes: 'RS Tebet'
      }
    ],
    status: 'success',
    message: ''
  }
  return (
    <Page className="!bg-f9fafb">
      {isLoading && (
        <div className="px-2">
          <CardLoaderItem />
        </div>
      )}
      {!isLoading && response.data && response.data.length > 0 && (
        <>
          <div className="flex flex-col px-2 pb-18">
            {response.data &&
              response.data.map((el) => {
                return (
                  <Card key={el.name}>
                    <div className="flex flex-col space-y-2 ">
                      <div className="flex items-start justify-between">
                        <p className="text-lg text-212121 font-semibold">
                          {el.name}
                        </p>
                        <Badge
                          className="text-xxs font-semibold !p-2"
                          colors={{
                            bg:
                              el.status === 'Aktif'
                                ? 'bg-success/20'
                                : 'bg-critical/20',
                            text:
                              el.status === 'Aktif'
                                ? 'text-success'
                                : 'text-critical',
                          }}
                        >
                          {el.status}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-subtitle text-xxs">
                          No. BPJS Kesehatan
                        </p>
                        <p className="text-333333 text-xs font-semibold">
                          {el.no_bpjs}
                        </p>
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-subtitle text-xxs">Peserta</p>
                          <p className="text-333333 text-xs font-semibold">
                            {el.occupation}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-subtitle text-xxs">Jenis Kelas</p>
                          <p className="text-333333 text-xs font-semibold">
                            {el.class}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-subtitle text-xxs">
                            Tanggal Lahir
                          </p>
                          <p className="text-333333 text-xs font-semibold">
                            {el.birthdate}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-subtitle text-xxs">Faskes 1</p>
                          <p className="text-333333 text-xs font-semibold">
                            {el.faskes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
          </div>
          <Toolbar
            top={false}
            className="left-0 bottom-0 fixed w-full !p-4"
            bgClassName="bg-white"
          >
            <Link href={'/card/user001'} className="w-full">
              <Button className="!bg-1f1f1f !py-6" rounded>
                <div className="capitalize">Lihat Kartu</div>
              </Button>
            </Link>
          </Toolbar>
        </>
      )}
      {!isLoading && response.status === 'error' && (
        <div className="text-xs italic text-critical flex items-center justify-center py-32">
          <span dangerouslySetInnerHTML={{ __html: response.message }}></span>
        </div>
      )}
    </Page>
  );
}

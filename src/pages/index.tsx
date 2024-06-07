import { MemberListHookResponse } from '@/lib/definitions';
import { useMemberList } from '@/lib/hooks/useMemberList';
import { Badge, Button, Card, Page, Toolbar } from 'ina-ui/react';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  const membersData: MemberListHookResponse = useMemberList();
  return (
    <Page className="!bg-f9fafb">
      <div className="flex flex-col px-2 pb-18">
        {membersData.data.map((el) => {
          return (
            <Card key={el.name}>
              <div className="flex flex-col space-y-2 ">
                <div className="flex items-start justify-between">
                  <p className="text-lg text-212121 font-semibold">{el.name}</p>
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
                  <p className="text-subtitle text-xxs">No. BPJS Kesehatan</p>
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
                    <p className="text-subtitle text-xxs">Tanggal Lahir</p>
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
    </Page>
  );
}

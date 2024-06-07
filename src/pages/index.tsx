import { memberList } from '@/lib/placeholder-data';
import {
  Badge,
  Button,
  Card,
  Navbar,
  NavbarBackLink,
  Page,
  Toolbar,
} from 'ina-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function HomePage() {
  const [members, setMembers] = useState(memberList);
  const router = useRouter();
  return (
    <Page className="!bg-f7f6f6">
      <Navbar
        title="Status BPJS Kesehatan"
        colors={{
          textIos: 'text-1f2026 dark:text-white',
          bgIos: 'bg-ios-light-surface dark:bg-1f2026',
        }}
        left={
          <div className="cursor-pointer" onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.5293 8.52918C10.603 8.46051 10.6621 8.37771 10.7031 8.28571C10.7441 8.19372 10.7662 8.0944 10.7679 7.9937C10.7697 7.893 10.7512 7.79297 10.7135 7.69958C10.6757 7.60619 10.6196 7.52136 10.5484 7.45014C10.4772 7.37892 10.3923 7.32277 10.2989 7.28505C10.2055 7.24733 10.1055 7.22881 10.0048 7.23059C9.90411 7.23236 9.8048 7.2544 9.7128 7.2954C9.6208 7.33639 9.538 7.39549 9.46934 7.46918L5.46934 11.4692C5.32889 11.6098 5.25 11.8004 5.25 11.9992C5.25 12.1979 5.32889 12.3886 5.46934 12.5292L9.46934 16.5292C9.538 16.6029 9.6208 16.662 9.7128 16.703C9.8048 16.7439 9.90412 16.766 10.0048 16.7678C10.1055 16.7695 10.2055 16.751 10.2989 16.7133C10.3923 16.6756 10.4772 16.6194 10.5484 16.5482C10.6196 16.477 10.6757 16.3922 10.7135 16.2988C10.7512 16.2054 10.7697 16.1054 10.7679 16.0047C10.7662 15.904 10.7441 15.8046 10.7031 15.7126C10.6621 15.6206 10.603 15.5378 10.5293 15.4692L7.80934 12.7492L17.4993 12.7492C17.6983 12.7492 17.889 12.6702 18.0297 12.5295C18.1703 12.3889 18.2493 12.1981 18.2493 11.9992C18.2493 11.8003 18.1703 11.6095 18.0297 11.4688C17.889 11.3282 17.6983 11.2492 17.4993 11.2492L7.80934 11.2492L10.5293 8.52918Z"
                fill="#282828"
              />
            </svg>
          </div>
        }
      />
      <div className="flex flex-col px-2 pb-18">
        {members.map((el) => {
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

import { memberList } from '@/lib/placeholder-data';
import { Card, Navbar, NavbarBackLink, Page } from 'ina-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CreditCardIcon from '@/components/Icon/CreditCardIcon';
import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import Image from 'next/image';

export default function DocumentPage() {
  const [members, setMembers] = useState(memberList);
  const [cardOpened, setCardOpened] = useState([] as string[]);
  const router = useRouter();
  function handleOpenCard(id: string) {
    if (cardOpened.includes(id)) {
      setCardOpened(cardOpened.filter((el) => el !== id));
    } else {
      setCardOpened([...cardOpened, id]);
    }
  }
  function isOpened(id: string) {
    return cardOpened.includes(id);
  }
  return (
    <Page className="!bg-f9fafb">
      <Navbar
        title={'Dokumen'}
        colors={{
          textIos: 'text-1f2026 dark:text-white',
          bgIos: 'bg-ios-light-surface dark:bg-1f2026',
        }}
        left={
          <div className="cursor-pointer" onClick={() => router.push('/')}>
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
      <div className="flex flex-col px-2">
        {members.map((el) => {
          return (
            <Card key={el.name} className="!my-2">
              <div className="flex flex-col">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleOpenCard(el.id)}
                >
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center justify-center p-2">
                      <CreditCardIcon />
                    </div>
                    <div>
                      <p className="text-xs text-black font-semibold">
                        {el.name}
                      </p>
                      <p className="text-xxs text-subtitle">{el.no_bpjs}</p>
                    </div>
                  </div>
                  <div
                    className={`transition-all transform ${
                      isOpened(el.id) ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <ChevronDownIcon />
                  </div>
                </div>
                {isOpened(el.id) && (
                  <div className="flex items-center justify-center w-full">
                    <Image
                      className="mt-4"
                      src={'/kartu-indonesia-sehat.png'}
                      alt={'kartu-indonsia-sehat-' + el.name}
                      width={311}
                      height={198}
                    />
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Page>
  );
}

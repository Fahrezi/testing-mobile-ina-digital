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
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Icon } from 'ina-ui/react';
import CreditCardIcon from '@/components/Icon/CreditCardIcon';
import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import Image from 'next/image';

export default function DocumentPage() {
  const [members, setMembers] = useState(memberList);
  const [cardOpened, setCardOpened] = useState([] as string[]);
  const router = useRouter();
  function handleOpenCard(id: string) {
    console.log('cardOpened before : ', cardOpened);
    console.log('id : ', id);
    if (cardOpened.includes(id)) {
      setCardOpened(cardOpened.filter((el) => el !== id));
      console.log('remove : ', cardOpened);
    } else {
      setCardOpened([...cardOpened, id]);
      console.log('add : ', cardOpened);
    }
  }
  function isOpened(id: string) {
    return cardOpened.includes(id);
  }
  return (
    <Page className="!bg-f7f6f6">
      <Navbar
        title={'Dokumen for user : ' + router.query?.id}
        colors={{
          textIos: 'text-1f2026 dark:text-white',
          bgIos: 'bg-ios-light-surface dark:bg-1f2026',
        }}
        left={<NavbarBackLink showText={false} onClick={() => router.back()} />}
      />
      <div className="flex flex-col px-2">
        {members.map((el) => {
          return (
            <Card key={el.name}>
              <div className="flex flex-col space-y-2">
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => handleOpenCard(el.id)}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCardIcon />
                    <p className="text-lg text-212121 font-semibold">
                      {el.name}
                    </p>
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

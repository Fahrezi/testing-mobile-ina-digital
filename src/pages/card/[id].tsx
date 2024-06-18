import { Card, Page } from 'ina-ui/react';
import React, { useState } from 'react';
import CreditCardIcon from '@/components/Icon/CreditCardIcon';
import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import Image from 'next/image';
import { useMemberList } from '@/lib/hooks/useMemberList';
import CardLoaderPreview from '@/components/CardLoaderPreview';

export default function DocumentPage() {
  const { isLoading, response } = useMemberList();
  const [cardOpened, setCardOpened] = useState([] as string[]);
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
      <div className="flex flex-col px-2">
        {isLoading && <CardLoaderPreview />}
        {!isLoading &&
          response.data &&
          response.data.map((el) => {
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
        {!isLoading && response.status === 'error' && (
          <div className="text-xs italic text-critical flex items-center justify-center py-32">
            <span dangerouslySetInnerHTML={{ __html: response.message }}></span>
          </div>
        )}
      </div>
    </Page>
  );
}

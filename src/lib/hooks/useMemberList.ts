import { useCallback, useEffect, useReducer, useState } from 'react';
import { APIResponse, Member } from '../definitions';

export function useMemberList(): {
  isLoading: boolean;
  response: APIResponse<Member[]>;
} {
  const initialResponse: APIResponse<Member[]> = {
    status: 'default',
    data: [],
    message: '',
  };
  type ActionType = {
    type: string;
    payload: {
      data: Member[];
      [key: string]: any;
    };
  };
  function reducer(
    state: APIResponse<Member[]>,
    actionType: ActionType
  ): APIResponse<Member[]> {
    const { type } = actionType;
    switch (type) {
      case 'success':
        return {
          ...state,
          ...actionType.payload,
        };
      case 'error':
        return {
          ...state,
          status: 'error',
          message:
            'Terjadi kesalahan pada sistem. <br/> Silahkan coba beberapa saat lagi',
          data: [],
        };

      default:
        return state;
    }
  }
  const [response, dispatchResponse] = useReducer(reducer, initialResponse);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async (userId: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.API_BACKEND}/kepesertaan/${userId}`
      );
      const resJson = await res.json();
      dispatchResponse({ type: 'success', payload: resJson });
      console.log('response : ', response);
    } catch (e) {
      dispatchResponse({ type: 'error', payload: { data: [] } });
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    // it will be userId from authentication
    const userId = '001';
    getData(userId);
    return () => {};
  }, [getData]);
  return {
    isLoading,
    response,
  };
}

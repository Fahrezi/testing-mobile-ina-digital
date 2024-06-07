import { useCallback, useEffect, useState } from 'react';
import { Member, MemberListHookResponse } from '../definitions';
import { memberList } from '../placeholder-data';

export function useMemberList(): MemberListHookResponse {
  const [members, setMembers] = useState([] as Member[]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const getData = useCallback(async (userId: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(
        `${process.env.API_BACKEND}/api/members/${userId}`
      );
      const resJson = await res.json();
      setError('');
    } catch (e) {
      setIsError(true);
      if (typeof e === 'string') setError(e);
      else if (e instanceof Error) setError(e.message);
      setMembers(memberList);
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
    data: members,
    error,
  };
}

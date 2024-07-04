import { useCallback, useEffect, useReducer, useState } from "react";
import { APIResponse, Member } from "../definitions";

export function useMemberList(): {
  isLoading: boolean;
  response: APIResponse<Member[]>;
} {
  const initialResponse: APIResponse<Member[]> = {
    status: "default",
    data: [],
    message: "",
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
    actionType: ActionType,
  ): APIResponse<Member[]> {
    const { type } = actionType;
    switch (type) {
      case "success":
        return {
          ...state,
          ...actionType.payload,
        };
      case "error":
        return {
          ...state,
          status: "error",
          message:
            "Terjadi kesalahan pada sistem. <br/> Silahkan coba beberapa saat lagi",
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
      const resBpjsTk = await fetch(
        `
https://www.bpjsketenagakerjaan.go.id/plkk-kontak`,
        {
          method: "POST",
          body: JSON.stringify({
            kodeKabupaten: "3174",
            page: 1,
          }),
        },
      );
      const res = await fetch(
        `${process.env.API_BACKEND}/kepesertaan/${userId}`,
      );
      const resJson = await res.json();

      const resJsonTK = await resBpjsTk.json();
      dispatchResponse({ type: "success", payload: resJson });
    } catch (e) {
      dispatchResponse({ type: "error", payload: { data: [] } });
      console.log("error : ", e);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    // it will be userId from authentication
    const userId = "001";
    getData(userId);
    return () => {};
  }, [getData]);
  return {
    isLoading,
    response,
  };
}

//import { authOptions } from "@nextAuthConfig/route";
//import { getServerSession } from "next-auth/next";
interface IInfo {
  url: string;
}

export type FetchResponse<T> = {
  data: T;
  error?: string;
  info: IInfo;
}

export async function fetchWrapper<T>(url: string): Promise<FetchResponse<T>> {
  const response = {
    data: null as T,
    error: undefined,
    info: { } as IInfo
  } as FetchResponse<T>
  
  try {
    //const session = await getServerSession(authOptions);
    const fullUrl = `${import.meta.env.VITE_API_BACKEND}${url}`

    // Info
    response.info.url = fullUrl
    
    //console.log('fetch',session)
    //if (!session) throw new Error("Not logged");
    const res = await fetch(
        fullUrl,
      {
        //@ts-ignore
        //headers: { Authorization: `Bearer ${session.accessToken}` },
      }
    );
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(
        `${fullUrl}\r\n` +
        `Failed to fetch data\r\n${res.status}-${res.statusText}`
      );
    }
    
    //@ts-ignore
    const data = await res.json();

    response.data = data as T
  } catch (error) { 
    //@ts-ignore
    response.error = error.toString()
    console.error(error)
  }
  return response
}

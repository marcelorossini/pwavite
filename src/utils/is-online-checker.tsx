import React from "react";
import isOnline from "is-online";
import { useAppStore } from "@/stores/app";

export default function IsOnlineChecker() { 
  async function checkIsOnline() {
    const isOnlineResponse = await isOnline();
    const { isOnline: isOnlineStore, setIsOnline, setIsNetworkChecked } = useAppStore.getState()

    if (isOnlineStore != isOnlineResponse) {
        setIsOnline(isOnlineResponse);
        console.log(`Conexão: ${isOnlineResponse ? 'online': 'offline'}`)
    }
    setIsNetworkChecked(true)
  }

  React.useEffect(() => {
    window.addEventListener("online", checkIsOnline);
    return () => {
      window.removeEventListener("online", checkIsOnline);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener("offline", checkIsOnline);
    return () => {
      window.removeEventListener("offline", checkIsOnline);
    };
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      checkIsOnline();
    }, 10000);
    checkIsOnline();
  }, []);

  return <></>;
}

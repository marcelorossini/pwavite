import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import { router } from "@/config/router";
import IsOnlineChecker from "@/utils/is-online-checker";
import { clearCache } from "@/components/sync";
import { initDB } from "@/utils/db";
import MantineProvider from "@/providers/mantine";
import { modals } from '@mantine/modals';

import { registerSW } from "virtual:pwa-register";
import { RouterProvider } from "react-router-dom";

const updateSW = registerSW({
  onNeedRefresh() {
    modals.openConfirmModal({
      title: 'Atualização',
      children: (
        <div>
          Há uma nova versão disponivel, deseja atualizar agora?
        </div>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => {},
      onConfirm: () => updateSW(true),
      centered: true
    })
  },
  onOfflineReady() {
    console.log("offline ready.");
  },
});

import { QueryClient, QueryClientProvider } from "react-query";
// Create a client
const queryClient = new QueryClient();

initDB();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <IsOnlineChecker />
    </MantineProvider>
  </React.StrictMode>
);

import React from "react";

import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

export default function MantineProviderComponent(props: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
  });

  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" style={{marginTop: '64px'}}/>
      <ModalsProvider>{props.children}</ModalsProvider>
    </MantineProvider>
  );
}

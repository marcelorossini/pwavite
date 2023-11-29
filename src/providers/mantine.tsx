import React from "react";

import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

export default function MantineProviderComponent(props: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
  });

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>{props.children}</ModalsProvider>
    </MantineProvider>
  );
}

import Head from "next/head";
import { Box, Container, Stack, Typography } from "@mui/material";
import { SettingsNotifications } from "src/sections/settings/settings-notifications";
import { SettingsPassword } from "src/sections/settings/settings-password";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { SettingsColors } from "src/sections/settings/settings-colors";
import { GeneralSettings } from "src/sections/settings/general-settings";

const Page = () => (
  <>
    <Head>
      <title>Parametrage | Todo</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">Parametrage de l'application</Typography>
          <GeneralSettings />
          <SettingsColors />
          <SettingsNotifications />
          {/* <SettingsPassword /> */}
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

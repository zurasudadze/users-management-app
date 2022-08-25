import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@mui/material";
import theme from "../theme";
import {NotificationsProvider} from './NotificationProvider'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const AppProviders = ({children}) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <NotificationsProvider>
        {children}
      </NotificationsProvider>
    </ThemeProvider>
  </QueryClientProvider>
)

export default AppProviders;

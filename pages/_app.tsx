import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer, Slide } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import { store, persister, wrapper } from "../store";
import "../scss/vendors/tailwind.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <PersistGate loading={null} persistor={persister}>
        <Provider store={store}>{layout}</Provider>
        <ToastContainer transition={Slide} />
      </PersistGate>
    </QueryClientProvider>
  );
}
export default wrapper.withRedux(MyApp);

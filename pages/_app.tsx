import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ToastContainer, Slide } from "react-toastify";

import "../scss/vendors/tailwind.css";

import { wrapper } from "@/store/store";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);
  return (
    <>
      {layout}
      <ToastContainer transition={Slide} />
    </>
  );
  // return getLayout(<Component {...pageProps} />);
}
export default wrapper.withRedux(MyApp);

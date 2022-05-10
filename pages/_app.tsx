import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../scss/layouts/dashboard.css";
import "../scss/vendors/tailwind.scss";

import { store } from "../store/store"
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const layout = getLayout(<Component {...pageProps} />)
  return(<Provider store={store}> {layout} </Provider>)
    

}
export default MyApp

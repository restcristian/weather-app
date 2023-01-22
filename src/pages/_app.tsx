import Layout from "@/components/Layout";
import { queryClient } from "@/config/queryClient";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

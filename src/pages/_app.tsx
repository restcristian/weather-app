import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { QueryClientProvider, QueryClient } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

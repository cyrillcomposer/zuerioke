import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </LanguageProvider>
  );
}
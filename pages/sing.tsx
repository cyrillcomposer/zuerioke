import type { GetServerSideProps } from "next";
import { getSingTarget } from "../lib/singStore";

export const getServerSideProps: GetServerSideProps = async () => {
  let destination = "https://zuerioke.ch/";
  try {
    const current = await getSingTarget();
    if (current?.url) destination = current.url;
  } catch {
    // Redis unreachable — fail open to the homepage, never a 500 during a live event
  }
  return { redirect: { destination, permanent: false } };
};

export default function Sing() {
  return null;
}

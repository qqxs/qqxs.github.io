import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout";
import Com from "../components/Com";

const AboutPage = () => {
  const [timer, setTimer] = useState(0);

  const handle = useCallback(() => {}, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTimer(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
        {timer}
      </p>
      <Com />
    </Layout>
  );
};

export default AboutPage;

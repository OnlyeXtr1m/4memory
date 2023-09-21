import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("rerender");
    return () => console.log("unmount");
  });

  return (
    <main className={styles.main}>
      <Image
        width={300}
        height={300}
        src="/images/main-logo-img.jpg"
        alt="logo"
      ></Image>
    </main>
  );
}

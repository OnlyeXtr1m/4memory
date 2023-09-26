"use client"

import { useEffect } from "react";

import { Button } from "@/components";
import Image from "next/image";

import styles from "./page.module.scss";

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
      <Button buttonType="primary">string</Button>
        <p>FOnt</p>
    </main>
  );
}

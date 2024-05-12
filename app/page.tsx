import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import { Htag, Button } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Htag tag="h1">Title</Htag>
      <Button appearance="ghost">Кнопка</Button>
    </main>
  );
}

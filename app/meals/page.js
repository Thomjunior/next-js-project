import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created by
          <span className={classes.highlight}>Doxa Delicacies</span>
        </h1>
        <p>
          choose your favourite recipee and cook it yourself,It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite Recipee</Link>
        </p>
      </header>
      <main className={classes.main}></main>
      <MealsGrid meals={[]} />
    </>
  );
}

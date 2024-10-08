'use client'

import styles from "./page.module.css";
import FilterBar from "@/components/Filtro/FilterBar";
import ProductsList from "@/components/Produtos/ProductsList";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar/>
        <ProductsList/>
      </main>
    </QueryClientProvider>
  );
}

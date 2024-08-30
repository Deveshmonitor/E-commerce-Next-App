"use client";

import Categories from "@/components/Categories";
import Carousel from "@/components/core/Carousel";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import TopBar from "@/components/TopBar";
import { getApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getApi("common");
      setdata(response);
    })();
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />
      <Carousel slides={data?.courasel?.data ?? []} />
      <Categories data={data?.category} />
      <Product data={data?.product?.data} title="Most Popular Products" />
      <Product data={data?.product?.data} title="Most Selling Products" />
      <Product data={data?.product?.data} title="Most Rated Products" />
    </div>
  );
}

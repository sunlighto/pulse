import React from 'react';
import '../dist/styles/vars.scss'
import '../dist//styles/main.scss'
import Banner from "../components/Banner/Banner";
import NumbersCar from "../components/NumbersCar/NumbersCar";
import TariffsBanner from "../components/TariffsBanner/TariffsBanner";
import Map from "../components/Map/Map";
export default function Home() {
  return (
    <>
      <Banner />
      <NumbersCar />
      <TariffsBanner />
      <Map />
    </>
  )
}

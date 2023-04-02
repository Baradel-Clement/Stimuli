import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Header from '../components/Header';
import Tips from '../components/Tips';
import Discover from '../components/Discover';
import Benefits from '../components/Benefits';
import Packs from '../components/Packs';


export default function Home() {
  return (
    <>
      <Header />
      <Tips />
      <Discover />
      <Benefits />
      <Packs />
    </>
  )
}

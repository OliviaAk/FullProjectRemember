import React,{useState} from "react";
import Home from "../../components/Home/Main";
import Layout from "../../layouts";
import Modal from '../../components/shared/Modal'
export default function HomePage() {

  const [open,setOpen]=useState(false)
  return (
    <>
    <Layout>
      <Home />
    </Layout>
    </>
  );
}

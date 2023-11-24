import React from 'react'
import Layout from '../components/layout'
import { ClearButton } from '@/components/sync';

import { countStoreData, Stores } from "@/utils/db";

export default function Favoritos() {
    const [data, setData] = React.useState('')
    React.useEffect(() => {
      const getData = async () => {
        const data1 = await countStoreData(Stores.Images)
        const data2 = await countStoreData(Stores.Requests)

        setData(`images: ${data1} requests: ${data2}`)
      }
      getData()
      setInterval(() => {
        getData()
      }, 1000)
    }, [])

    return (
      <Layout>
       {data}
       <ClearButton />
      </Layout>
    );
  }
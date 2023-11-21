import React from 'react'
import Layout from '../components/layout'

import { getStoreData, Stores } from "@/utils/db";

export default function Favoritos() {
    const [data, setData] = React.useState('')
    React.useEffect(() => {
      const getData = async () => {
        const data1 = await getStoreData(Stores.Images)
        const data2 = await getStoreData(Stores.Requests)

        setData(`images: ${data1.length} requests: ${data2.length}`)
      }
      getData()
    }, [])

    return (
      <Layout>
       fav<br/>
       {data}
      </Layout>
    );
  }
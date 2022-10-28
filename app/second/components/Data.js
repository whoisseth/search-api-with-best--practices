'use client'

import { useEffect, useState, useMemo, Suspense } from 'react'
import Delay from './../../Delay'
// const Demo_API = 'https://demo.dataverse.org/api/search?q=mobile'
export default function Data() {
  const [data, setData] = useState({
    q: '',
    items: [],
  })
  const [query, setQuery] = useState([])

  useEffect(() => {
    const getData = async () => {
      const Demo_API = `https://demo.dataverse.org/api/search?q=${query}`
      // if (query.length > 2)
      try {
        const res = await fetch(Demo_API)
        const data = await res.json()
        setData({
          q: data.data.q,
          items: data.data.items,
        })
      } catch (error) {
        console.log(error.message)
      }
    }
    getData()
  }, [query])

  return (
    <div className=" p-4">
      <input
        value={query}
        className=" mb-4 px-2 border-2 border-blue-400 rounded"
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      <h1 className="font-bold text-xl">
        <span> Title - </span>
        <span className="text-blue-500">{data.q && data.q}</span>
      </h1>

      {data.q && data.items.length < 1 && (
        <Delay loading={<h1>loading lists...</h1>} waitBeforeShow={1000}>
          'sorry no data found :('
        </Delay>
      )}
      {data.q &&
        data.items.length > 0 &&
        data.items.map((data, index) => <li key={index}>{data.name} </li>)}
    </div>
  )
}

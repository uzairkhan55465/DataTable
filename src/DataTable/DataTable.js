import React, { useEffect, useState } from "react"
import axios from "axios"
import "./style.css"
const DataTable = () => {
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState("")
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res)
      setData(res.data)
    })
  }, [])
  console.log("data", data)

  const filteredData = data.filter(
    items =>
      items.title.toLowerCase().includes(searchData) ||
      items.body.toLowerCase().includes(searchData) ||
      items.userId.toString().includes(searchData)
  )

  console.log("filteredData", filteredData)
  return (
    <div>
      <input
        placeholder="Title"
        onChange={e => setSearchData(e.target.value)}
      />
      <input placeholder="body" onChange={e => setSearchData(e.target.value)} />
      <input
        placeholder="userID"
        onChange={e => setSearchData(e.target.value)}
      />
      <h1>Data Table</h1>

      <table>
        <tr>
          <th>Id</th>
          <th>Body</th>
          <th>Title</th>
          <th>User Id</th>
        </tr>
        {filteredData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.body}</td>
            <td>{item.title}</td>
            <td>{item.userId}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default DataTable

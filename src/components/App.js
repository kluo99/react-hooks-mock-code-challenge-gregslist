import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [dataList, setDataList] = useState([])
  const [search, setSearch] = useState('')

  console.log(search)
  console.log("bye")
  console.log(dataList.description)
  console.log("hello")

  // dataList.forEach(item => {
  //   console.log(dataList);
  //   console.log('hello')
  // });


  

  // console.log(sortedLocation);
 
  useEffect(() => {
    fetch ('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setDataList(data)
    })
  }, [])

  // useEffect(() => {
  //   filterDataList();
  // }, [itemDelete])

  // function passListingToApp(listing) {
  //   setItemDelete(listing)
  // }

  // function filterDataList() {
  //   const newArray = dataList.filter((item) => item.includes(itemDelete))
  // }


  function setData(newArray) {
    setDataList(newArray)
  }

  function changeSearch(textInput) {
    console.log(textInput)
    setSearch(textInput)
  }

  return (
    <div className="app">
      <Header changeSearch={changeSearch} />
      
      <ListingsContainer dataList={dataList} setData={setData} search={search}/>
    </div>
  );
}

export default App;
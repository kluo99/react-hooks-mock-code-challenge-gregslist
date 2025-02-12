import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ dataList, setData, passListingToApp, search }) {
  console.log(dataList)

  // function deleteListings(listingId) {
  //   setDataList(dataList.filter((item) => listingId !== item.id))
  // }

  const searchedText = dataList.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))

  // sorting alphabetically
  // const sortedLocation = [...searchedText].sort((a,b) => {
  //   return a.location.localeCompare(b.location);
  // })

  searchedText.sort((a,b) => {
    return a.location.localeCompare(b.location);
  })

  return (
    <main>
      <ul className="cards">
        {searchedText.map((listing) => <ListingCard dataList={dataList} setData={setData} listing={listing} key={listing.description} passArrayToApp={passListingToApp} />)
      }
      </ul>
    </main>
  );
}

export default ListingsContainer;
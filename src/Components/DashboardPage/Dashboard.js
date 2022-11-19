import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DASHBOARD_API_URL } from '../Constants';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Tabs from './Tabs';
import Header from '../Header';
import Search from "./Search.js"
import Loading from './Loading';

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(DASHBOARD_API_URL).then((response) => {
      if (response.status == 200) {
        console.log(response.data)
        setData(response.data)
        setLoading(false);
      } else {
        alert("Data not found")
      }
    })
  }, []);
  console.log(data)

  var filteredCoins = data.filter((item) => {
    if (
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <>

      <Header />
      {/* <Search search={search} setSearch={setSearch} />
      <Tabs data={filteredCoins} />
      <div onClick={() => topFunction()} id="myBtn" className="top-btn">
        <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
      </div> */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <Tabs data={filteredCoins} />
          <div onClick={() => topFunction()} id="myBtn" className="top-btn">
            <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
          </div>
          {/* {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handleChange}
            />
          )} */}
        </>
      )}
    </>
  )
}

export default Dashboard
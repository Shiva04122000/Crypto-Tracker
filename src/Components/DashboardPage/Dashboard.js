import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DASHBOARD_API_URL } from '../Constants';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Tabs from './Tabs';
import Header from '../Header';
import Search from "./Search.js"
import Loading from './Loading';
import PaginationComponent from './Pagination';
// import { Pagination } from '@mui/material';

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCoins, setPageCoins] = useState([]);

  var filteredCoins = data.filter((item) => {
    if (
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });

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

  const handleChange = (event, value) => {
    setPageNumber(value);
    setPageCoins(data.slice((value - 1) * 10, (value - 1) * 10 + 10));
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <Tabs data={search ? filteredCoins : pageCoins} />
          <div onClick={() => topFunction()} id="myBtn" className="top-btn">
            <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
          </div>
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handleChange}
            />
          )}
        </>
      )}
    </>
  )
}

export default Dashboard
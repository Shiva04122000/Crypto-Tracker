import List from '../Components/DashboardPage/List'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/DashboardPage/Loading";
import Header from "../Components/Header";


function CoinPage() {
    const { id } = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            axios
                .get(`https://api.coingecko.com/api/v3/coins/${id}`)
                .then((response) => {
                    console.log(response.data)
                    setCoin({
                        id: response.data.id,
                        name: response.data.name,
                        symbol: response.data.symbol,
                        image: response.data.image.large,
                        desc: response.data.description.en,
                        price_change_percentage_24h: response.data.market_data.price_change_percentage_24h,
                        total_volume: response.data.market_data.total_volume.usd,
                        current_price: response.data.market_data.current_price.usd,
                        market_cap: response.data.market_data.market_cap.usd,
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Error>>>", error);
                });
        }
    }, [id]);


    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            {loading ? <Loading /> : <List coin={coin} />}
        </div>
    );
}

export default CoinPage;
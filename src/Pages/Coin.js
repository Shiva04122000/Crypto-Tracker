import List from '../Components/DashboardPage/List'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/DashboardPage/Loading";
import Header from "../Components/Header";
import '../index.css'
import Info from '../Components/CoinPage/Info';
import getCoinData from '../Functions/getCoinData';
import LineChart from '../Components/CoinPage/LineChart';
import getCoinPrices from '../Functions/getCoinPrices';
import { getDate } from '../Functions/getDate';



function CoinPage() {
    const { id } = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(30);

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{}],
    });



    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    const getData = async () => {
        // console.log("hii") 
        const data = await getCoinData(id);
        const prices = await getCoinPrices(id, days);


        if (data) {
            console.log("data", data)
            setCoin({
                id: data.id,
                name: data.name,
                symbol: data.symbol,
                image: data.image.large,
                desc: data.description.en,
                price_change_percentage_24h: data.market_data.price_change_percentage_24h,
                total_volume: data.market_data.total_volume.usd,
                current_price: data.market_data.current_price.usd,
                market_cap: data.market_data.market_cap.usd,
            });
            setLoading(false);
        }

        const options = {
            plugins: {
                legend: {
                    display: false,
                },
            },
            responsive: true,
            interaction: {
                mode: "index",
                intersect: false,
            }

        };


        if (prices) {

            console.log("Prices>>>>", prices)
            setChartData({
                labels: prices?.map((data) => getDate(data[0])),
                datasets: [
                    {
                        label: "Price",
                        data: prices?.map((data) => data[1]),
                        borderWidth: 1,
                        fill: false,
                        tension: 0.25,
                        backgroundColor: "transparent",
                        borderColor: "#3a80e9",
                        pointRadius: 0,
                    },
                ],
            });
        }
    }

    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            {loading ? (<Loading />) : (
                <>
                    <div className="grey-container">
                        <List coin={coin} delay={0.5} />
                    </div>
                    <div className="grey-container">
                        <LineChart chartData={chartData} />
                    </div>

                    <div className="grey-container">
                        <Info name={coin.name} desc={coin.desc} />
                    </div>
                </>
            )}
        </div>
    );
}
export default CoinPage;
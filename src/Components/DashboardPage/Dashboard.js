import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { DASHBOARD_API_URL } from '../Constants';
import Tabs from './Tabs';
import Header from '../Header';

const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
       axios.get(DASHBOARD_API_URL).then((response)=>{
        if(response.status==200){
            console.log(response.data)
            setData(response.data)
        }else{
            alert("Data not found")
        }
       }) 
    }, []);
    console.log(data)

  return (
    <>
        
        <Header/>
        <Tabs data={data}/>
    </>
  )
}

export default Dashboard
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Table } from "antd"; // Import Table from Ant Design
// import "antd/dist/antd.css"; // Import Ant Design styles

interface CoinData {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  image: string;
}

const AllCoinsData: React.FC = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCoinsData = async () => {
      try {
        const response = await axios.get<CoinData[]>(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              sparkline: false,
              price_change_percentage: "1h,24h,7d",
            },
          }
        );
        setCoins(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch coin data");
        setLoading(false);
      }
    };

    fetchAllCoinsData();
  }, []);
  console.table(coins);
  const getColor = (value: number) => {
    return value >= 0 ? "text-green-500" : "text-red-500";
  };

  // Define columns for the Ant Design table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: CoinData) => (
        <span>
          <Image
            src={record.image}
            alt={text}
            className="inline-block w-6 h-6 mr-2"
            width={24}
            height={24}
          />
          {text}
        </span>
      ),
    },
    {
      title: "Price",
      dataIndex: "current_price",
      key: "current_price",
      render: (price: number) => `$${price.toLocaleString()}`,
    },
    {
      title: "1h %",
      dataIndex: "price_change_percentage_1h_in_currency",
      key: "1h",
      render: (value: number) => (
        <span className={getColor(value)}>{value?.toFixed(2)}%</span>
      ),
    },
    {
      title: "24h %",
      dataIndex: "price_change_percentage_24h",
      key: "24h",
      render: (value: number) => (
        <span className={getColor(value)}>{value?.toFixed(2)}%</span>
      ),
    },
    {
      title: "7d %",
      dataIndex: "price_change_percentage_7d_in_currency",
      key: "7d",
      render: (value: number) => (
        <span className={getColor(value)}>{value?.toFixed(2)}%</span>
      ),
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
      key: "market_cap",
      render: (cap: number) => `$${cap.toLocaleString()}`,
    },
    {
      title: "Volume (24h)",
      dataIndex: "total_volume",
      key: "total_volume",
      render: (volume: number) => `$${volume.toLocaleString()}`,
    },
    {
      title: "Circulating Supply",
      dataIndex: "circulating_supply",
      key: "circulating_supply",
      render: (supply: number) => `${supply.toLocaleString()} BTC`,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">
        All Coins Market Data
      </h1>
      <Table
        dataSource={coins}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default AllCoinsData;

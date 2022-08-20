import React, { useState, useEffect } from "react";

import DetailCard from "components/DetailCard";
import ImageBanner from "components/ImageBanner";
import ApiService from "services/api";

const HomePage = () => {
  const [data, setData] = useState([]);

  // 페이지 진입시 데이터 불러오기
  useEffect(() => {
    ApiService.fetchDummy().then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ImageBanner />
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <DetailCard id={item.id} title={item.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;

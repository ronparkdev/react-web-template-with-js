import React, { useEffect, useState } from "react";

import ApiService from "services/api";

const RandomImageBanner = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    ApiService.fetchRandomImageUrl().then((result) => setImgUrl(result));
  }, []);

  return <img src={imgUrl} />;
};

export default RandomImageBanner;

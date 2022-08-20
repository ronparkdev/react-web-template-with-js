const SERVER_HOST = "https://via.placeholder.com/";

const ApiService = {
  // 리얼 API 를 사용하는 서비스 함수
  async fetchRandomImageUrl() {
    // 필요한 데이터를 반환
    return `${SERVER_HOST}${Math.ceil(Math.random() * 10) * 10}`;
  },

  // 더미 데이터를 사용하는 서비스 함수
  async fetchDummy() {
    return [
      { id: "fish", title: "Go to Fish page" },
      { id: "cat", title: "Go to Cat page" },
    ];
  },
};

export default ApiService;

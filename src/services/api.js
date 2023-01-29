import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("key", process.env.REACT_APP_API_KEY);
const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_API_HOST,
};

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_API_HOST,
};

const cryptoUrl = "https://coinranking1.p.rapidapi.com/";
const cryptoNewsUrl = "https://bing-news-search1.p.rapidapi.com";

const createCryptoRequest = (url) => ({ url, headers: cryptoApiHeaders });
const createCryptoNewsRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: cryptoUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createCryptoRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createCryptoRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createCryptoRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: cryptoNewsUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createCryptoNewsRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
export const { useGetCryptoNewsQuery } = cryptoNewsApi;

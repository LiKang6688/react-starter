import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCoins = async () => {
  try {
    const res = await axios.get("/coins");
    return await (res.data as Promise<Record<string, string>[]>);
  } catch (err) {
    console.error("error: ", err);
    throw new Error("Error getting coins");
  }
};

const useCoins = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["Coins"], queryFn: () => getCoins() });

  return {
    coins: data,
    isLoading,
    isError: !!error,
  };
};

function CoinsSection({ coins }: { coins: Record<string, string>[] }) {
  return (
    <>
      {coins.map((coin) => (
        <div key={coin.name} className="product-item">
          <div>{coin.name}</div>
          <div>{coin.website}</div>
        </div>
      ))}
    </>
  );
}

function Coins() {
  const { isLoading, isError, coins } = useCoins();

  if (isError) return <div>Unable to fetch products.</div>;

  if (isLoading) return <div>Loading products...</div>;

  return coins ? <CoinsSection coins={coins} /> : <div>Loading products...</div>;
}

export default Coins;

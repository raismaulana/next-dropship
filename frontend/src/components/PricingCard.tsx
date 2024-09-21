"use client"; 

import { useRouter } from "next/navigation";
import ButtonCard from "./ButtonCard";

interface PricingCardProps {
    id: string;
    title: string;
    price: string;
    highlighted?: boolean;
  }
  
  const PricingCard: React.FC<PricingCardProps> = ({ id, title, price, highlighted }) => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/subscribe/'+id);
    }

    return (
      <div className={`p-8 border ${highlighted ? 'border-red-500' : 'border-gray-600'} rounded-lg w-64 bg-gray-800`}>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-4xl font-bold mb-4">{price}</p>
        <ButtonCard label="Subscribe" highlighted handleClick={handleClick}/>
      </div>
    );
  };
  
  export default PricingCard;
  
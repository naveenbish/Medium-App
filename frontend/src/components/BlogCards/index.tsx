import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Hand } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import data from './json2.json';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


import { DataStructure, CardData } from "./types";
import { RootState } from "@/redux/rootReducer";

const BlogCards = () => {
  const navigate = useNavigate();
  // Type-casting the imported JSON data to our defined typ
  const cardData: DataStructure = data as DataStructure;
  const blogList: string = useSelector((state: RootState) => state.blogList.value)

  const handleClick = () => {
    navigate('/blogs');
  };

  return (
    <>
      <div className="p-4 pt-12 cursor-pointer" onClick={handleClick}>
        {cardData[blogList as keyof DataStructure].map((item: CardData) => (
          <>
            <div className="flex gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm">{item.name} <span className="text-gray-600">by </span>{item.community_name}</div>
            </div>
            <div>
              <div className="flex py-3 gap-4 md:gap-32">
                <div>
                  {/* Description  */}
                  <div className="text-xl md:text-2xl font-extrabold">
                    You’re Awesome At Python If You Can Answer These 7 Questions
                  </div>
                  {/* Title  */}
                  <div className="py-2 text-gray-600">
                    # No cheating pls!!
                  </div>
                </div>
                <div>
                  <img src="/img/austin-chan-ukzHlkoz1IE-unsplash.jpg" className="max-w-[80px] md:max-w-[160px] h-auto" alt="image" />
                </div>
              </div>
            </div>
            <div className="flex gap-5 text-sm items-center pb-7">
              <div>Apr 29</div>
              <div className="flex gap-1 items-center"><Hand className="w-4" /> 820</div>
              <div className="flex gap-1 items-center"><MessageCircle className="w-4" />5</div>
            </div>
            <hr className="pb-7" />
          </>
        ))}
      </div>
    </>
  );
};


export default BlogCards;

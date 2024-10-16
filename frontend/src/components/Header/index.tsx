import { Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="font-playfair text-4xl font-extrabold cursor-pointer" onClick={handleClick}>Medium</div>
        <div className="flex items-center gap-8">
          <div>
            <Search />
          </div>
          <div>
            <Bell />
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;

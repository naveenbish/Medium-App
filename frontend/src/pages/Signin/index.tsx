import Quote from "@/components/Quote";
import Auth from "@/components/Auth";

export default function Signin() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[50%] flex justify-center items-center w-full max-w-[400px]">
        <Auth type={'signin'} />
      </div>
      <div className="h-[50%] flex justify-center items-center  w-full max-w-[400px] py-10">
        <Quote />
      </div>
    </div>
  )

}


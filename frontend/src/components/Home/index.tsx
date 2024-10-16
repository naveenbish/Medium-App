import BlogCards from "../BlogCards";
import BlogList from "../BlogList";
import Header from "../Header";

export default function Home() {

  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div className="w-[800px]">
            <BlogList />
            <hr />
            <BlogCards />
          </div>
        </div>
      </div>
    </>
  );
}

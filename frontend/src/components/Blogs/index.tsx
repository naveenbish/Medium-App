import Header from "../Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CirclePlay, Share, Ellipsis } from "lucide-react";

const data = [
  {
    title: "Comparing FastAPI with Other Frameworks (Django, Flask)",
  }
]

const Blogs = () => {
  return (
    <>
      <Header />
      {data.map((item, index) => (
        <div className="pt-10 p-6" key={index}>

          {/* Heading  */}
          <div className="text-3xl font-extrabold">{item.title}</div>

          {/* Blog Profile Section  */}
          <BlogProfile />

          {/* Three buttons listen share and more... */}
          <div className="flex gap-2">
            <BlogButton Icon={<CirclePlay />} label="Listen" />
            <BlogButton Icon={<Share />} label="Share" />
            <BlogButton Icon={<Ellipsis />} label="More" />
          </div>

          {/* Blog Content */}
          <BlogContent />
        </div>
      ))}
    </>
  )
}

const BlogProfile = () => {
  return (
    <>
      <div className="py-6 flex">

        {/* Avatar Image */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Profile  detail section starts */}
        <div className="px-4">

          {/* First section  */}
          <div className="flex gap-2">
            <div className="cursor-pointer font-medium">Naveen Bisht</div>
            <div>.</div>
            <div className="text-green-500 font-medium cursor-pointer">Follow</div>
          </div>

          {/* Second section */}
          <div className="flex gap-2">
            <div className="text-base text-gray-600">Published in </div>
            <div className="text-base font-medium">AWS Tip</div>
          </div>

          {/* Third section */}
          <div className="flex gap-2 text-base text-gray-600">
            <div>4 min read</div>
            <div>.</div>
            <div>Jun 30,2024</div>
          </div>

        </div>
        {/* Profile  detail section ends */}

      </div>
    </>
  )
}

const BlogContent = () => {
  return (
    <>
      <div className="pt-6 pb-8">

        {/* Image incase  */}
        <img src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*LOZgruzs6i82_D2oMYG4bw.png" />

        {/* Paragraph starts here */}
        <div className="font-serif text-xl">
          <BlogText>

            {/* Intro */}
            <p>
              FastAPI is rapidly gaining popularity among developers for building APIs due to its modern approach and high performance. However, it’s essential to understand how it compares with other popular frameworks like Django and Flask. This article will highlight the differences, advantages, and disadvantages of FastAPI, Django, and Flask, helping you make an informed decision for your next project.
            </p>
            <div className="font-semibold my-4">1. Overview of the Frameworks</div>

            {/* First para  */}
            <div>
              <div className="font-semibold my-2">FastAPI:</div>
              <span className="font-semibold">- Description:</span> A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.
              <br />
              <span className="font-semibold">- Core Strengths:</span> Performance, type hints, automatic documentation, ease of use.
              <br />
              <span className="font-semibold">- Use Cases:</span>
              High-performance APIs, microservices, asynchronous applications.
            </div>

            <br />
            Django:
            - Description: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
            - Core Strengths: Complete web framework, ORM, admin interface, batteries-included philosophy.
            - Use Cases: Full-stack web applications, content management systems (CMS), e-commerce sites.

            Flask:
            - Description: A lightweight WSGI web application framework in Python. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.
            - Core Strengths: Simplicity, flexibility, lightweight, extensibility.
            - Use Cases: Simple web applications, microservices, prototyping.

            2. Differences in Design Philosophy

            FastAPI:
            - Type Hinting: Utilizes Python type hints for data validation and serialization, resulting in cleaner code and less boilerplate.
            - Asynchronous Support: Built-in support for asynchronous programming with async/await, making it suitable for handling concurrent requests efficiently.
            - Automatic Documentation: Automatically generates OpenAPI and JSON Schema documentation, making API development and testing easier.

            Django:
            - Monolithic Architecture: Comes with an ORM, authentication, admin interface, and many other features out-of-the-box.
            - Convention Over Configuration: Emphasizes conventions to reduce configuration time.
            - Sync-First: Primarily synchronous, although Django 3.1 introduced asynchronous capabilities, they are not as deeply integrated as in FastAPI.

            Flask:
            - Micro Framework: Minimalistic core, providing the essentials, with flexibility to choose components and libraries.
            - Sync-First: Mainly synchronous, although async support can be added with additional libraries.
            - Extensible: Highly extensible through Flask extensions for adding functionalities like ORM, authentication, etc.

            3. Performance

            FastAPI:
            - Speed: One of the fastest Python web frameworks thanks to its asynchronous capabilities and efficient use of Pydantic for data validation.
            - Concurrency: Handles a large number of concurrent requests efficiently with async/await.

            Django:
            - Speed: Generally slower compared to FastAPI due to its synchronous nature and monolithic design.
            - Concurrency: Less efficient in handling concurrent requests compared to FastAPI.

            Flask:
            - Speed: Faster than Django due to its lightweight nature but slower than FastAPI.
            - Concurrency: Handles concurrent requests adequately but not as efficiently as FastAPI.

            4. Use Cases and Suitability

            FastAPI:
            - Best For: APIs, microservices, applications requiring high performance and concurrency.
            - Examples: Real-time data applications, high-load APIs.

            Django:
            - Best For: Full-stack web applications where a lot of built-in functionalities are beneficial.
            - Examples: E-commerce sites, CMS, blogs.

            Flask:
            - Best For: Simple to medium complexity applications, microservices, and prototyping.
            - Examples: REST APIs, small web applications, lightweight services.

            5. Learning Curve and Community Support

            FastAPI:
            - Learning Curve: Steeper initially due to type hints and async programming but very productive once mastered.
            - Community: Growing rapidly, with increasing resources and community support.

            Django:
            - Learning Curve: Moderate, with a lot of built-in features to learn but excellent documentation and tutorials.
            - Community: Very large and mature, with extensive resources and third-party packages.

            Flask:
            - Learning Curve: Gentle, very easy to get started with, and highly flexible.
            - Community: Large and well-established, with numerous extensions and resources available.
          </BlogText>
        </div>

      </div >
    </>
  )
}

const BlogText: React.FC<BlogTextType> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

const BlogButton: React.FC<BlogButtonProps> = ({ Icon, label }) => {
  return (
    <div className="flex gap-2 px-3 py-1 rounded-full border text-gray-600 text-base border-gray-200 w-fit">
      {Icon}
      {label}
    </div>
  )
}

interface BlogButtonProps {
  Icon: React.ReactNode;
  label: string;
}

interface BlogTextType {
  children: React.ReactNode; // Declare the children prop
}


export default Blogs;

import React from "react";
import PDFFile from "./PDF/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <div className=" flex flex-col">
      <div className=" mx-20">
        <h1 className=" text-center font-bold text-3xl my-6 bg-orange-400 py-2 rounded-2xl font-serif">
          Frequently asked Question
        </h1>
        <main className=" text-zinc-900">
          {/* <!-- Q1  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold ">
              1. What differences between uncontrolled and controlled
              components.?
            </h1>
            <p className="lg:pl-8 pt-2 text-">
              Uncontrolled components operate independently, while controlled
              components are directed and controlled by other parts of the
              system. Understanding the differences between these two types of
              components is important in designing complex software systems that
              rely on a mix of both.
            </p>
          </div>
          {/* <!-- Q-2  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              2. How to validate React props using PropTypes?
            </h1>
            <p className="lg:pl-6 pt-2 text-lg">
              App.propTypes is used for props validation in react component.
              When some of the props are passed with an invalid type, you will
              get the warnings on JavaScript console. After specifying the
              validation patterns, you will set the App.defaultProps.
            </p>
          </div>
          {/* <!-- Q-3  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              3. What is the difference between nodejs and express js.?
            </h1>
            <p className="lg:pl-6 pt-2 text-lg">
              Node.js: <br />
              Node.js is an open source and cross-platform runtime environment
              for executing JavaScript code outside of a browser. You need to
              remember that NodeJS is not a framework and it’s not a programming
              language. Most of the people are confused and understand it’s a
              framework or a programming language. We often use Node.js for
              building back-end services like APIs like Web App or Mobile App.
              It’s used in production by large companies such as Paypal, Uber,
              Netflix, Walmart and so on.
              <br /> Express.js: <br />
              Express is a small framework that sits on top of Node.js’s web
              server functionality to simplify its APIs and add helpful new
              features. It makes it easier to organize your application’s
              functionality with middle ware and routing. It adds helpful
              utilities to Node.js’s HTTP objects. It facilitates the rendering
              of dynamic HTTP objects.
            </p>
          </div>
          {/* <!-- Q-4  --> */}
          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              4. What is a custom hook, and why will you create a custom hook?
            </h1>
            <p className="lg:pl-6 pt-2 text-lg">
              Custom React JS hooks offer reusability as when a custom hook is
              created, it can be reused easily, which makes the code cleaner and
              reduces the time to write the code. It also enhances the rendering
              speed of the code as a custom hook does not need to be rendered
              again and again while rendering the whole code.
            </p>
          </div>
        </main>
      </div>
     
      
      <div className=" justify-center text-center mt-10"> <PDFDownloadLink document={<PDFFile/>} filename="FORM">
        {({loading})=>(loading ? <button className=" px-3 py-3 font-semibold rounded-xl bg-orange-500 text-white">
          Download to PDF
        </button>: <button className=" px-3 py-3 font-semibold rounded-xl bg-orange-500 text-white">
          Download to PDF
        </button>)}
      </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Blog;

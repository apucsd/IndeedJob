import React from "react";

const Blogs = () => {
  return (
    <div className="md:w-1/2 mx-auto my-8">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 my-1\3"
      >
        <div className="collapse-title text-xl font-medium">
          1. When should you use context API?
        </div>
        <div className="collapse-content">
          <p>
            Context api is mainly used when someone need to pass data by many
            components instead of props drilling. Its is the alternative of
            props drilling. We should use context api when a same data need for
            many component's accessible.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 my-1\3"
      >
        <div className="collapse-title text-xl font-medium">
          2 .What is a custom hook?
        </div>
        <div className="collapse-content">
          <p>
            Custom hooks are functions that are made by developer for their own
            logic. The main use of custom hooks is DRY means "Don't Repeat
            Yourself" logic. Customs hooks are reusable that why custom hooks
            are used so much.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 my-1\3"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is useRef?
        </div>
        <div className="collapse-content">
          <p>
            useRef is a build in react hook that takes an arguments as the
            initial value and return a reference.The return reference is a
            mutable object.It is used "useRef" to access a DOM element or react
            element directly.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 my-1\3"
      >
        <div className="collapse-title text-xl font-medium">
          4. What is useMemo?
        </div>
        <div className="collapse-content">
          <p>
            useMemo is a build in react hook that takes two arguments.t is very
            useful in optimizing the performance of a React component by
            eliminating repeating heavy computations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

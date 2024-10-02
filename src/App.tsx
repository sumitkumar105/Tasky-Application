import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto h-screen w-full bg-neutral-700">
      <h1 className="text-3xl  text-center font-bold underline text-violet-500 ">
        Hello world!
      </h1>
    </div>
  );
}

export default App;

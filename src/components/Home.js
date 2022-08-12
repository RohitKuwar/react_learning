import React, { createContext, lazy, Suspense } from "react";
import useFetch from '../customHooks/useFetch'
import TodoAppRedux from './TodoAppRedux'

const CompA = lazy(() => import('./useContext/CompA'))

const MyContext = createContext()
function Home() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<div>loading...</div>}>
        <MyContext.Provider value={"from Home via CompA with useContext"}>
          <CompA />
        </MyContext.Provider>
      </Suspense>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          {data.map((item, index) => (
            <h4 key={index}>
              {index + 1}. {item.name}
            </h4>
          ))}
        </div>
      )}
      <TodoAppRedux />
    </div>
  );
}

export default Home;
export { MyContext };

// function Home() {
//   return (
//     React.createElement(
//       'h1',
//       null,
//       'Rohit Kuwar',
//     )
//   );
// }
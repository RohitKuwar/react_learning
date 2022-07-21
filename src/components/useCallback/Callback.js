import React, { useState, useCallback } from "react";
import Text from "./Text";
import Button from "./Button";

function Callback() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(50000);

  const countHandler = useCallback(() => setCount(count + 1), [count]);
  const salaryHandler = useCallback(() => setSalary(salary + 10000), [salary]);

  return (
    <div>
      <h1>useCallback Hook</h1>
      <div>
        <Text text={"Count"} count={count} />
        <Button btnText={"Increment Count"} handler={countHandler} />
      </div>
      <div>
        <Text text={"Salary"} count={salary} />
        <Button btnText={"Increment Salary"} handler={salaryHandler} />
      </div>
    </div>
  );
}

export default Callback;

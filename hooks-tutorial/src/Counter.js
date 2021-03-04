import React, { useState } from "react";

const Counter = () => {
  // useState 함수의 파라미터에는 상태의 기본값을 넣어준다
  // useState는 함수가 호출되면 배열을 반환 한다.
  // 첫번째 원소는 상태값, 두번째 원소는 상태를 설정하는 함수
  // 그렇기 때문에 비구조화 할당을 이용하여 맵핑한다
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;

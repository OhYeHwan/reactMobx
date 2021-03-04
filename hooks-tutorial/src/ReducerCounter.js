import React, { useReducer } from "react";
// useReducer의 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다는 점

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // useReducer의 첫번째 파라미터 reducer함수그자체, 두번째파라미터 해당 리듀서의 기본값
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //  state는 현재 가리키고있는 상태 , dispatch는 액션을 발생시키는 함수

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;

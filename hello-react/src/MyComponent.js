import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      Props 써보기, {props.name} <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};

// 부모 컴포넌트에서 props값을 지정해주지 않을 때 디폴트 값이 props값으로 지정된다.
MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Props 써보기, {name} <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

// 부모 컴포넌트에서 props값을 지정해주지 않을 때 디폴트 값이 props값으로 지정된다.
MyComponent.defaultProps = {
  name: "기본 기본기본",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "../store/userSlice.js";
import { addCount } from "./../store.js";
import { useState, memo } from "react";

// --------------------임포트-----------------------

// -------------컴포넌트--------------------

let Child = memo(function () {
  console.log("재렌더링");
  return <div>자식임</div>;
});

function Cart() {
  let state = useSelector((state) => state);
  // 자바스크립트 문법중괄호 리턴 동시 삭제가능 ((state))=>{return state}
  // console.log(state.user.name);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);
  return (
    <div>
      <Child />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        재렌더링하기{count}
      </button>
      <h4>의 장바구니</h4>
      <p>
        <button
          style={{ marginLeft: "5px" }}
          onClick={() => {
            dispatch(changeAge(10));
          }}
        >
          나이올리기
        </button>
        {state.user.age}
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cartinpo.map((a, i) => (
            <tr key={i}>
              <td>{state.cartinpo[i].id}</td>
              <td>{state.cartinpo[i].name}</td>
              <td>{state.cartinpo[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cartinpo[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

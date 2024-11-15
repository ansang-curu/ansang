import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "gray")};
`;

let Box = styled.div`
  background: #333;
  padding: 5px;
`;

let NewBtn = styled(YellowBtn)`
  /* 스타일을 추가하지 않음. YellowBtn에서 상속된 스타일 그대로 사용 */
`;

function News() {
  return (
    <>
      <h2>News</h2>
      <div className="newBox">
        <Box></Box>
        <p>뉴스내용입니다</p>
        <p>두번째 내용입니다</p>
        <YellowBtn bg="yellow">노란버튼</YellowBtn>
        <YellowBtn bg="blue">파란버튼</YellowBtn>
        <NewBtn bg="yellow">새노란버튼</NewBtn>
      </div>
    </>
  );
}

export default News;

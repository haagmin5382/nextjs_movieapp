// pre-rerendering (cmd + option + u 로 확인해보자)
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <Title title="Home" />
      <h1 className="active">Hello</h1>

      {/* 전역 스타일 추가 global속성을 붙인다. */}
      <style jsx global>
        {`
        a {
          color: skyblue;
          // global style을 적용했는데 /about 페이지에서 Home은 하늘색이 아니다
          // about 페이지에서 Home이 하늘색이 아닌 이유는 About 페이지로 넘어갈 때, 다른 페이지에 있기 때문이다.
          // index.js에 있는 global은 / 페이지에 있을 때 적용한다.
          // 렌더링되고 있는 컴포넌트 또한 다른 컴포넌트 이다.
      `}
      </style>
    </div>
  );
}

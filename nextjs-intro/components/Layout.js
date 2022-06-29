import NavBar from "./NavBar";

export default function Layout({ children }) {
  // children은 react.js가 제공하는 prop인데,
  // 하나의 component를 또 다른 component안에 넣을 때 쓸 수 있다.
  // layout의 children은 _app.js안에 <Layout> 태그 안쪽에 있는 것들을 의미한다. (component,footer)
  return (
    <>
      <NavBar />
      {/* app 컴포넌트들이 layout의 children에 의해서 보여지게 된다. */}
      <div id="children">{children}</div>
    </>
  );
}

import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {/* app 컴포넌트들이 layout의 children에 의해서 보여지게 된다. */}
      <div>{children}</div>
    </>
  );
}

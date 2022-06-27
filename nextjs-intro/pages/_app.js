// 하나의 blueprint 모든 페이지에 관여한다.
import Layout from "../components/Layout";
import "../styles/globals.css";
// NextJS로 앱을 만들 때는 global css 파일을 import 할 수 없다.
// 하지만 커스텀 app컴포넌트가 있는 이곳에서는 모든 global styles를 import 할 수 있다.

export default function App({ Component, pageProps }) {
  // 이것이 정해진대로 해야하는 프레임워크이다.

  return (
    <>
      <Layout>
        {/* layout의 children은 Component를 의미한다
          대부분의 사람들이 이러한 patterns를 사용하는데 너무 큰 app.js 파일을 원치 않기 때문이다.
         */}
        <Component {...pageProps} />
        <footer></footer>
        <style jsx global>
          {`
        a {
          color: skyblue;
      `}
        </style>
      </Layout>
    </>
  );
}

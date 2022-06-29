import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* Next.js 앱 내에서 페이지를 네비게이트할 때 사용해야만 하는 특정 컴포넌트가 존재한다.
      a태그를 쓰면 이동할 때 새로고침이 된다. => 클라이언트 사이드 네비게이션이 없다는 의미
      Link 태그는 Next.js 어플리케이션의 클라이언트 사이드 네비게이션을 제공해준다.
      Link 태그 이후 a태그로 감싸는 이유는 a태그에다 스타일을 지정할 수 있기 때문이다. ex)className, style 등등 */}
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>
            {/* class 이름을 두 개 이상 사용하고 싶으면 백틱을 활용 */}
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      {/* styles jsx */}
      {/* styles jsx는 컴포넌트 내부에 한정된다. */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        nav a {
          font-weight: 600;
          font-size: 30px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }

        .active {
          color: #93c3ff;
        }
      `}</style>
    </nav>
  );
}

// pre-rerendering (cmd + option + u 로 확인해보자)
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Title from "../components/Title";

export default function Home({ results }) {
  const [movies, setMovies] = useState();
  const router = useRouter();

  const goToMovie = (id, title) => {
    // router.push(
    //   // url을 설정하고 정보를 얹어주는 부분
    //   {
    //     pathname: `/movies/${id}`,
    //     query: {
    //       // title: "potatos",
    //       title,
    //     },
    //   }
    //   // 드러낼 url(마스킹 하지 않은)
    //   // `/movies/${id}`
    // );
    // // http://localhost:3000/movies/<영화아이디>?title=potatos

    router.push(`/movies/${title}/${id}`);
  };
  useEffect(() => {
    // (async () => {
    //   const { results } = await (await fetch("/api/movies")).json();
    //   setMovies(results);
    // })();

    // ==

    axios.get(`/api/movies`).then((object) => {
      // console.log(object);
      setMovies(object.data.results);
    });
  }, []);
  return (
    <div>
      <Title title="Home" />
      <h1 className="active">Home</h1>
      {/* 전역 스타일 추가 global속성을 붙인다. */}

      {/* loading 처리 */}
      {!results && <h4>Loading ...</h4>}

      <div className="container">
        {results?.map((movie) => {
          return (
            <div
              onClick={() => goToMovie(movie.id, movie.original_title)}
              className="movie"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h4>
                <Link
                  // href={{
                  //   pathname: `/movies/${movie.id}`,
                  //   query: {
                  //     // title: "potatos",
                  //     title: movie.original_title,
                  //   },
                  // }}
                  // as={`/movies/${movie.id}`}
                  href={`/movies/${movie.original_title}/${movie.id}`}
                >
                  {/* a 태그는 텍스트를 감싸야 한다  */}
                  <a> {movie.original_title}</a>
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // server쪽에서만 작동

  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: {
      // 백엔드에서 주는 정보
      // loading 화면 없이 API가 완료되도록 기다린 후에 모든 정보를 보여준다.
      // JavaScript 허용하지 않더라도 영화 정보들이 나온다 (서버에서 받아오는 것이기 때문이다.)
      // html이 완전히 상태로 준비되어서 나온다. => 즉, Server Side Rendering 이라는 뜻
      results,
    },
  };
}

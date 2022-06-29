// Dynamic Routes
// []를 씌운다.
// ex) localhost:3000/movies/123414

import { useRouter } from "next/router";
import Title from "../../components/Title";

export default function Detail({ params, result }) {
  const router = useRouter();
  // console.log(router);

  // Client Side Rendering
  // const [title, id] = router.query.params || [];
  // Incognito모드에서 접속하면 에러가 난다
  // 이 페이지가 백엔드에서 pre-render되기 때문이다.(|| []를 붙여주면 해결된다.)

  // Server Side Rendering
  console.log(params);
  console.log(result);
  // const [title, id] = params || [];
  return (
    <div>
      <Title title={result.original_title} />
      <h2>{result.original_title || "Loading ..."}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} />
      <h3>{result.overview}</h3>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  // getServerSideProps(ctx)
  // console.log("ctx", ctx); // NextJS가 server-side context를 제공해준다.

  // ctx.parmas.params
  console.log(params);

  const result = await (
    await fetch(`http://localhost:3000/api/movies/${params[1]}`)
  ).json();
  return {
    props: { params, result },
  };
}

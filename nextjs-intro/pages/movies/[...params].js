// Dynamic Routes
// []를 씌운다.
// ex) localhost:3000/movies/123414

import { useRouter } from "next/router";
import Title from "../../components/Title";

export default function Detail({ params }) {
  const router = useRouter();
  // console.log(router);

  // Client Side Rendering
  // const [title, id] = router.query.params || [];
  // Incognito모드에서 접속하면 에러가 난다
  // 이 페이지가 백엔드에서 pre-render되기 때문이다.(|| []를 붙여주면 해결된다.)

  // Server Side Rendering
  console.log(params);
  const [title, id] = params || [];
  return (
    <div>
      <Title title={title} />
      <h4>{title || "Loading ..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  // getServerSideProps(ctx)
  // console.log("ctx", ctx); // NextJS가 server-side context를 제공해준다.

  // ctx.parmas.params
  console.log(params);
  return {
    props: { params },
  };
}

/** @type {import('next').NextConfig} */

const mykey = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/contact", // contatct 주소를 입력하면 (localhost:3000/conatact)
        // source : '/old-blog/:path*' => /old-blog/12/contents/123412
        destination: "/form", // localhost:3000/form 주소로 이동
        // destination : '/new-blog/:path* => /new-blog/12/contents/123412
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies", // 이 주소로 api 호출을 한다는 것은
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${mykey}&language=en-US&page=1`, // 이 주소로 api 호출을 한다는 것과 같다
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${mykey}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;

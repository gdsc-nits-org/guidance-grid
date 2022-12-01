import { useFetchData } from "../../Hooks";
import { Button, ArticleCard, Loading } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");

  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Button type="button" />
      {articleRespState.loading && <Loading />}
      {articleRespState.error && <div>Error</div>}
      {articleRespState.response.map((item, index) => {
        return <ArticleCard data={item} id={index} key={item?.id} />;
      })}
    </main>
  );
};

export default Home;

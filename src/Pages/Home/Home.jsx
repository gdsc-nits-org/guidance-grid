import { Icon } from "@iconify-icon/react";
import { useFetchData } from "../../Hooks";
import {
  ArticleCard,
  Loading,
  Trending,
  Searchbar,
  SideBar,
  Navbar,
  Footer,
} from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");
  const [trendingRespState] = useFetchData("/articles/trending.json");

  return (
    <>
      <main className={style.home}>
        <Searchbar />
        <div className={style.trendTitle}>
          <Icon icon="mdi:trending-up" /> TRENDING ARTICLES
        </div>
        <div className={style.trending}>
          {trendingRespState.response.map((item, index) => (
            <Trending data={item} id={index} key={item?.id} />
          ))}
        </div>
        <div className={style.articlesection}>
          <div className={style.article}>
            {articleRespState.loading && <Loading />}
            {articleRespState.error && <div>Error</div>}
            {articleRespState.response.map((item, index) => (
              <ArticleCard data={item} id={index} key={item?.id} />
            ))}
          </div>

          <SideBar />
        </div>
      </main>
    </>
  );
};

export default Home;

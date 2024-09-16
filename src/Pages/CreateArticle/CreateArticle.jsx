import React, {useState, useRef, useMemo} from "react";
import JoditEditor from "jodit-react";
import style from "./CreateArticle.module.scss";
import { postArticle} from "../../utils/post.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateArticle = () => {
  const editor = useRef(null);
  let title = useRef("")
  const [content, setContent] = useState("");
  const notifyPosted = () => toast("Post Published!")
  return (
    <section className={style.createArticle}>
      <div className={style.leftSec}>
        <h1 className={style.secHead}>Add New Article</h1>
        <div className={style.title}>
          <h1 className={style.titleHead}>Title</h1>
          <p>Be specific with your title</p>
          <input type={style.text} placeholder="Enter your title"  ref={title}/>
        </div>
        <div className={style.content}>
          <h1 className={style.contentHead}>Content</h1>
          <p>Write about your topic</p>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={-0.5} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
        <div className={style.submit}>
          <button className={style.btn} onClick={async () => {
            const res = await postArticle(title.current.value, content)
            console.log(res);
            notifyPosted();
          }}>POST ARTICLE</button>
        </div>
      </div>
      <div className={style.rightSec}>
        <div className={style.rightImg}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1677011852/Guidance%20Grid/Blogging-pana_1_ihgns9.png"
            alt=""
          />
        </div>
        <div className={style.instructions}>
          <h2 className={style.instHead}>How to write articles?</h2>
          <ol>
            <li>What is ReactJS and how can it be used in development?</li>
            <li>What is ReactJS and how can it be used in development?</li>
            <li>What is ReactJS and how can it be used in development?</li>
            <li>What is ReactJS and how can it be used in development?</li>
          </ol>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default CreateArticle;

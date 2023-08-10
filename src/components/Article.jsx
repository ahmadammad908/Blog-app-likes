import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import LikeArticle from "./LikeArticle";
import Comment from "./Comment";
import { toast, ToastContainer } from "react-toastify";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
  return (
    <>
      {article && (
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {article.title}
              </h1>
              <p class="mb-8 leading-relaxed">
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man
                braid swag typewriter affogato, hella selvage wolf narwhal
                dreamcatcher.
              </p>

              <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
                {article.description}{" "}
              </p>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                width={"1000px"}
                src={article.imageUrl}
              />
              <div style={{ marginTop: "20px" }}>
                <Comment id={article.id} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* {article && (
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {article.title}
              </h1>
              <p class="mb-8 leading-relaxed">{article.description}</p>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={article.imageUrl}
              />
            </div>
           
          </div>
        </section>
      )} */}
    </>

    // <div className="container border bg-light" style={{ marginTop: 70 }}>
    //   {article && (
    //     <div className="row">
    //       <div className="col-3">
    //         <img
    //           src={article.imageUrl}
    //           alt={article.title}
    //           style={{ width: "100%", padding: 10 }}
    //         />
    //       </div>
    //       <div className="col-9 mt-3">
    //         <h2>{article.title}</h2>
    //         <h5>Author: {article.createdBy}</h5>
    //         <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
    //         <hr />
    //         <h4>{article.description}</h4>

    //         {/* <div className="d-flex flex-row-reverse">
    //           {user && <LikeArticle id={id} likes={article.likes} />}
    //           <div className="pe-2">
    //             <p>{article.likes.length}</p>
    //           </div>
    //         </div> */}
    //         {/* comment  */}
    // {/* <Comment id={article.id} /> */}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

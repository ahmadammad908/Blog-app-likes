import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
// import DeleteArticle from "../components/DeleteArticle";
import LikeArticle from "./LikeArticle";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div>
      {articles.length === 0 ? (
        <>
          <div className="loader"></div>
        </>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            comments,
          }) => (
            <div
              className="border mt-3 p-3 bg-light shadow-md rounded-md"
              key={id}
              style={{ margin: "40px", padding: "10px" }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <Link to={`/article/${id}`}>
                    <img
                      src={imageUrl}
                      alt="title"
                      width={"200px"}
                      height={"200px"}
                      className="h-48 md:h-auto w-full object-cover"
                    />
                  </Link>
                </div>
                <div className="md:w-2/3 md:pl-3">
                  <div className="flex justify-between items-center">
                    {/* {createdBy && (
                      <span className="bg-primary text-white py-1 px-2 rounded-full">
                        {createdBy}
                      </span>
                    )} */}
                  </div>
                  <h3
                    className="text-2xl"
                    style={{
                      color: "#570DF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-gray-500 mt-2"
                    style={{
                      color: "gray",
                      marginRight: "10px",
                      marginTop: "20px",
                    }}
                  >
                    {createdAt.toDate().toDateString()}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-gray-700 truncate"
                    style={{
                      color: "gray",
                      marginRight: "10px",

                      marginTop: "",
                    }}
                  >
                    {description}
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link
                      to={`/article/${id}`}
                      style={{
                        marginRight: "10px",
                        padding: "7px 30px",
                        borderRadius: "10px",
                        color: "white",
                        background: "#570Df8",
                        outline: "none",
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                  {/* {user && user.uid === userId && (
                    <DeleteArticle id={id} imageUrl={imageUrl} />
                  )} */}
                  <div className="flex justify-end items-center mt-6">
                    {user && <LikeArticle id={id} likes={likes} />}
                    <div className="pe-2" style={{ marginLeft: "10px" }}>
                      <p>{likes?.length} likes</p>
                    </div>
                    <p>{comments?.length} comments</p>

                    {/* {user && <LikeArticle id={id} likes={likes} />}
                    <p>{likes?.length} </p> */}
                    {/* Comment count */}
                  </div>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

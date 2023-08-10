import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { db, auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
// import { auth } from "./../firebaseConfig";

export default function Comment({ id }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentlyLoggedinUser] = useAuthState(auth);
  const [reply, setReply] = useState("");

  const commentRef = doc(db, "Articles", id);
  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      // Check if user is logged in
      if (currentlyLoggedinUser) {
        updateDoc(commentRef, {
          comments: arrayUnion({
            user: currentlyLoggedinUser.uid,
            userName: currentlyLoggedinUser.displayName,
            comment: comment,
            createdAt: new Date(),
            commentId: uuidv4(),
          }),
        }).then(() => {
          setComment("");
        });
      } else {
        alert("Please sign in to add a comment.");
      }
    }
  };
  // delete comment function
  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        {!currentlyLoggedinUser && (
          <p className="text-center mt-4">
            Please{" "}
            <Link to={"/register"} className="text-purple-500">
              Sign In
            </Link>{" "}
            to write a comment.
          </p>
        )}
        {currentlyLoggedinUser && (
          <>
            <h1>Add Comment</h1>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src={
                  currentlyLoggedinUser.photoURL ||
                  `https://avatars.dicebear.com/api/male/${currentlyLoggedinUser.uid}.svg`
                }
                alt="User Avatar"
              />
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full py-3 pl-10 pr-4 rounded-full bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  placeholder="Add a comment..."
                  onKeyUp={(e) => {
                    handleChangeComment(e);
                  }}
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 focus:outline-none"
                  onClick={() => {
                    if (comment.trim() !== "") {
                      updateDoc(commentRef, {
                        comments: arrayUnion({
                          user: currentlyLoggedinUser.uid,
                          userName: currentlyLoggedinUser.displayName,
                          comment: comment,
                          createdAt: new Date(),
                          commentId: uuidv4(),
                        }),
                      })
                        .then(() => {
                          setComment("");
                        })
                        .catch(() => {
                          alert(
                            "Failed to add comment. Please try again later."
                          );
                        });
                    } else {
                      toast("Please write a comment", { type: "error" });
                    }
                  }}
                >
                  <FiSend className="w-6 h-6" />
                </button>
              </div>
            </div>
          </>
        )}
        {comments !== null &&
          comments.map(({ commentId, user, comment, userName, createdAt }) => (
            <div key={commentId} className="border p-4 mt-4">
              <div className="flex">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={`https://avatars.dicebear.com/api/male/${user}.svg`}
                  alt="User Avatar"
                />
                <div>
                  <p className="font-bold">{userName}</p>
                  <p>{comment}</p>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-500 text-sm">
                      {createdAt.toDate().toLocaleTimeString()}
                    </p>

                    {user === currentlyLoggedinUser?.uid && (
                      <button
                        className="text-gray-500 hover:text-red-500 ml-4"
                        onClick={() =>
                          handleDeleteComment({
                            commentId,
                            user,
                            comment,
                            userName,
                            createdAt,
                          })
                        }
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
    // <div>
    //   <div className="container">
    //     {currentlyLoggedinUser && (
    //       <>
    //         <h1>Add Comment</h1>
    //         <div className="flex items-center mt-4">
    //           <img
    //             className="w-10 h-10 rounded-full mr-3"
    //             src={
    //               currentlyLoggedinUser.photoURL ||
    //               `https://avatars.dicebear.com/api/male/${currentlyLoggedinUser.uid}.svg`
    //             }
    //             alt="User Avatar"
    //           />
    //           <div className="relative flex-1">
    //             <input
    //               type="text"
    //               className="w-full py-3 pl-10 pr-4 rounded-full bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
    //               value={comment}
    //               onChange={(e) => {
    //                 setComment(e.target.value);
    //               }}
    //               placeholder="Add a comment..."
    //               onKeyUp={(e) => {
    //                 handleChangeComment(e);
    //               }}
    //             />
    //             <button
    //               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 focus:outline-none"
    //               onClick={() => {
    //                 if (comment.trim() !== "") {
    //                   updateDoc(commentRef, {
    //                     comments: arrayUnion({
    //                       user: currentlyLoggedinUser.uid,
    //                       userName: currentlyLoggedinUser.displayName,
    //                       comment: comment,
    //                       createdAt: new Date(),
    //                       commentId: uuidv4(),
    //                     }),
    //                   })
    //                     .then(() => {
    //                       setComment("");
    //                     })
    //                     .catch(() => {
    //                       alert(
    //                         "Failed to add comment. Please try again later."
    //                       );
    //                     });
    //                 } else {
    //                   toast("Please write a comment", { type: "error" });
    //                 }
    //               }}
    //             >
    //               <FiSend className="w-6 h-6" />
    //             </button>
    //           </div>
    //         </div>
    //       </>
    //     )}

    //     {comments !== null && (
    //       <div className="mt-4">
    //         <h3 className="text-xl font-semibold mb-2">Comments</h3>

    //         {comments.map(
    //           ({ commentId, user, comment, userName, createdAt }) => (
    //             <div key={commentId} className="flex items-start mb-4">
    //               <img
    //                 className="w-10 h-10 rounded-full mr-3"
    //                 src={`https://avatars.dicebear.com/api/male/${user}.svg`}
    //                 alt="User Avatar"
    //               />
    //               <div className="flex-1">
    //                 <div className="bg-gray-100 rounded-lg p-3">
    //                   <div className="flex items-center justify-between">
    //                     <span className="text-sm font-medium">{userName}</span>
    //                     {user === currentlyLoggedinUser?.uid && (
    //                       <>
    //                         <i
    //                           className="fa fa-times text-gray-500 cursor-pointer"
    //                           onClick={() =>
    //                             handleDeleteComment({
    //                               commentId,
    //                               user,
    //                               comment,
    //                               userName,
    //                               createdAt,
    //                             })
    //                           }
    //                         ></i>
    //                       </>
    //                     )}
    //                   </div>
    //                   <p className="text-gray-800 mt-1">{comment}</p>
    //                 </div>
    //                 <div className="text-gray-500 text-xs mt-1">
    //                   {createdAt.toDate().toLocaleString()}
    //                 </div>
    //               </div>
    //             </div>
    //           )
    //         )}
    //       </div>
    //     )}

    //     <ToastContainer
    //       position="bottom-center"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="light"
    //     />
    //   </div>
    // </div>
  );
}

// {comments !== null &&
//   comments.map(({ commentId, user, comment, userName, createdAt }) => (
//     <div key={commentId}>
//       <div className="border p-2 mt-2 row">
//         <div className="col-11">
//           <span
//             className={`badge ${
//               user === currentlyLoggedinUser?.uid
//                 ? "bg-success"
//                 : "bg-primary"
//             }`}
//           >
//             {userName}
//           </span>
//           {comment}
//         </div>
//         <div className="col-1">
//           {user === currentlyLoggedinUser?.uid && (
//             <i
//               className="fa fa-times"
//               style={{ cursor: "pointer" }}
//               onClick={() =>
//                 handleDeleteComment({
//                   commentId,
//                   user,
//                   comment,
//                   userName,
//                   createdAt,
//                 })
//               }
//             ></i>
//           )}
//         </div>
//       </div>
//     </div>
//   ))}

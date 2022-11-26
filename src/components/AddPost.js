import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPost } from '../reducers/BlogPosts';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux/es/exports';


function AddPost() {
   const postList = useSelector((state) => state.post.value);
   const navigate = useNavigate();
   const [errorMessage, setErrorMessage] = useState('');
   const [title, setTitle] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
   const dispatch = useDispatch();

   function NavigateToHome() {
      navigate('/');

   }
   function idMaker(ls){
      if(ls.length ==0){
         return 1;
      }else{
      return ls[ls.length - 1].id + 1
      }
   }
   function handleAddition() {
      const checkTitle = postList.find(post => post.title === title && post);
      if (!title || !category || !description) {
         setErrorMessage('Please Enter all Fields');
      }
      else if (checkTitle) {
         setErrorMessage('Title already Exsist, Please try again entering new value.');
      }
      else {
         setErrorMessage(null);
         //dispatch(addPost({ id: postList[postList.length - 1].id + 1, title, category, description, isLiked: false }));
         dispatch(addPost({ id: idMaker(postList) , title, category, description, isLiked: false }));
         NavigateToHome()
      }
   }

   return (<>
      <div className="container" style={{ marginTop: '-1%' }}>
         <div className="col-sm-9 col-md-7 col-lg-5 mx-auto" style={{ overflowY: 'auto', width: '85%' }}>
            <div className="card border-1 shadow rounded-3 my-5">
               <div className="card-body p-4 p-sm-5" style={{ marginTop: '-2%' }}>
                  <h4 style={{ paddingTop: '-30px', marginBottom: '20px' }} className="card-title text-center mb-5 fw-light fs-5">
                     <strong style={{ fontSize: '40px' }}>Add a Post </strong>
                  </h4>
                  <form style={{ marginTop: '-4%' }}>
                     <div className="row g-3 align-items-center">
                        <div className="input-group mb-3">
                           <span className="input-group-text">Title</span>
                           <input type="text" className="form-control"
                              onChange={(event) => {
                                 setTitle(event.target.value);
                              }}
                              placeholder="Add your Title" />
                        </div>
                     </div>
                     <div className="row g-3 align-items-center">
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">Category</span>
                           <input type="text" className="form-control"
                              onChange={(event) => {
                                 setCategory(event.target.value);
                              }}
                              placeholder="Add your Category" />
                        </div>
                     </div>
                     <div className="row g-3 align-items-center">
                        <div className="input-group">
                           <span className="input-group-text">Content</span>
                           <textarea className="form-control" aria-label="With textarea"
                              onChange={(event) => {
                                 setDescription(event.target.value);
                              }}
                              placeholder="Your content here..." defaultValue={""} />
                        </div>
                     </div>
                     <div align="left" style={{ color: 'red', marginTop: '10px' }}>
                        {errorMessage && (
                           <p className="error"> {errorMessage}  </p>
                        )}
                     </div>
                     <div align="right" style={{ marginTop: '25px' }}>
                        <div className="col-auto">
                           <button type="button"
                              //onClick={() => { dispatch(addPost({ id: postList[postList.length - 1].id + 1, title, category, description, isLiked:false })); NavigateToHome() }}
                              onClick={() => { handleAddition() }}
                              className="btn btn-outline mb-3" style={{ backgroundColor: '#FBE7C6', borderRadius: '40px' }}>Add Now</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </>
   );
}

export default AddPost;
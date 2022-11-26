import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

import { updatePost } from '../reducers/BlogPosts';

function EditPost() {
    // const [newTitle, setNewTitle] = useState("");
    // const [newCategory, setNewCategory] = useState("");
    // const [newDescription, setNewDescription] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const postList = useSelector((state) => state.post.value);
    const currPost = postList.find((post) => post.id === parseInt(id));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function navigateToHome() {
        navigate('/');
    }
    useEffect(() => {
        if (currPost) {
            setTitle(currPost.title);
            setCategory(currPost.category);
            setDescription(currPost.description);
        }
    }, [currPost]);
    return (
        <>
            <div className="container" style={{ marginTop: '-1%' }}>
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto" style={{ overflowY: 'auto', width: '85%' }}>
                    <div className="card border-1 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5" style={{ marginTop: '-2%' }}>
                            <h4 style={{ paddingTop: '-30px', marginBottom: '20px' }} className="card-title text-center mb-5 fw-light fs-5">
                                <strong style={{ fontSize: '40px' }}>Update Post </strong>
                            </h4>
                            <form style={{ marginTop: '-4%' }}>
                                <div className="row g-3 align-items-center">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Title</span>
                                        <input type="text" className="form-control" defaultValue={title}
                                            onChange={(event) => {
                                                //setNewTitle(event.target.value);
                                                setTitle(event.target.value);
                                            }}
                                            placeholder="Add your Title" />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Category</span>
                                        <input type="text" className="form-control" defaultValue={category}
                                            onChange={(event) => {
                                                //setNewCategory(event.target.value);
                                                setCategory(event.target.value);
                                            }}

                                            placeholder="Add your Category" />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center">
                                    <div className="input-group">
                                        <span className="input-group-text">Content</span>
                                        <textarea className="form-control" aria-label="With textarea" defaultValue={description}
                                            onChange={(event) => {
                                                //setNewDescription(event.target.value);
                                                setDescription(event.target.value);
                                            }}
                                            placeholder="Your content here..." />
                                    </div>
                                </div>
                                <div align="right" style={{ marginTop: '25px' }}>
                                    <div className="col-auto">
                                        <button type="button"
                                            onClick={() => {
                                                // dispatch(updatePost({ id: id, title: newTitle, category: newCategory, description: newDescription })); navigateToHome();
                                                dispatch(updatePost({ id: id, title: title, category: category, description: description })); navigateToHome();
                                            }}
                                            className="btn btn-outline mb-3" style={{ backgroundColor: '#FBE7C6', borderRadius: '40px', marginLeft: '15px' }}>Udate Now</button>
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
export default EditPost;
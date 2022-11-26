import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
function ViewPost() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const postList = useSelector((state) => state.post.value);
    const currPost = postList.find((post) => post.id === parseInt(id));
    useEffect(() => {
        setTitle(currPost.title);
        setCategory(currPost.category);
        setDescription(currPost.description);
    })
    return (<>
        <div className="container" style={{ marginTop: '-1%' }}>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto" style={{ width: '85%' }}>
                <div className="card border-1 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5" style={{ marginTop: '-2%' }}>
                        <h4 style={{ paddingTop: '-30px', marginBottom: '20px' }} className="card-title text-center mb-5 fw-light fs-5">
                            <strong style={{ fontSize: '30px', textDecoration: 'underline' }}>View Post </strong>
                        </h4>
                        <hr />
                        <div className="row">
                            <h5 style={{ textAlign: 'center' }}>Title: <span style={{ textDecoration: 'underline' }}>{currPost.title}</span> &nbsp; &nbsp; Category: <span style={{ textDecoration: 'underline' }}>{currPost.category}</span></h5>

                        </div>

                        <h6>Content: </h6>{currPost.description}
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ViewPost;
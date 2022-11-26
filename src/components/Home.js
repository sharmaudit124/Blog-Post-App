import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { deletePost, likePost } from '../reducers/BlogPosts';
import { useNavigate, Link, useLocation } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const postList = useSelector((state) => state.post.value);

    function navigateToEdit(id) {
        navigate('/editPost/' + id);
    }

    function handleLikeEvent(id, previousValue) {
        dispatch(likePost({ id: id, isLiked: !previousValue }))
    }

    const renderCard = () => {
        console.log(postList);
        return postList.map(data => {
            return (
                <div className="col-md my-3 mx-5 " key={data.id}>
                    <div className="card border-1 shadow rounded-3 my-5" style={{ width: '70%' }}>
                        <div className="card-body">
                            <h5 className="card-title">'{data.title}'</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{data.category}</h6>
                            <p className="card-text">{data.description.substring(0, 80)} . . . . . .
                                <Link to={"/viewPost/" + data.id} style={{ textDecoration: 'none', color: 'black' }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" height={'25px'}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg></Link>
                            </p>
                            <p style={{ marginLeft: '-5px' }}>
                                <button
                                    onClick={() => {
                                        handleLikeEvent(data.id, data.isLiked);
                                    }}
                                ><svg xmlns="http://www.w3.org/2000/svg" fill={data.isLiked == false ? "none" : "red"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1" height={'25px'}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                    </svg></button>

                                <button type="button"
                                    onClick={() => { navigateToEdit(data.id) }}
                                    className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " height={'25px'}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg></button>

                                <button type="button"
                                    onClick={() => {
                                        dispatch(deletePost({ id: data.id }))
                                    }}
                                    className="mx-1" style={{ outline: 'none' }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " height={'25px'}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>  {postList.length == 0 &&
                <p className="text-center col-span-2 " style={{ textDecoration: 'Underline', fontSize: '40px', marginTop: '200px' }}>NO Post Available.</p>
            }
            <div className=" grid" >
                {renderCard()}
            </div>
        </>
    );
}

export default Home;
import React, { useEffect, useContext } from 'react'
import PostItem from './PostItem'
import AuthContext from '../../Context/auth/authContext';
import PostContext from '../../Context/posts/postContext';
import { Spinner } from 'react-bootstrap'
const ShowPost = () => {
    const authContext = useContext(AuthContext)
    const postContext = useContext(PostContext);
    const { allposts, getData, loading, clearLoading } = postContext
    const { isAuthenticated, user } = authContext;

    const id = user._id;

    useEffect(() => {
        getData(id)
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (loading) {
            clearLoading();
        }

        //eslint-disable-next-line
    }, [loading])

    if (!isAuthenticated) {
        return <h1>Access Denied...</h1>
    }



    return (
        <div className="container mt-4">
            <form className="row">
                <div className="form-group col-8">
                    <input className="form-control" placeholder="Search Post..." />
                </div>
                <div className="form-group col-4">
                    <input type="button" value="Search" className="btn btn-block btn-dark" />
                </div>
            </form>
            {loading ? <Spinner animation="border" variant="dark" /> : (allposts.map(post => <PostItem
                key={post._id}
                image={post.image}
                title={post.title}
                info={post.info}
                date={post.date}
                id={post._id}
            />))}

        </div>
    )
}

export default ShowPost

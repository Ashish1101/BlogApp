import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostContext from '../../Context/posts/postContext';
import { Spinner } from 'react-bootstrap'
import Moment from 'react-moment'
const SinglePost = (props) => {

    const postContext = useContext(PostContext);
    const { getSinglePost, singlePost } = postContext;
    useEffect(() => {
        (function () {
            getSinglePost(props.match.params.id)
        })()
        //eslint-disable-next-line
    }, [])

    console.log(singlePost)

    if (singlePost !== null) {
        // console.log(singlePost.title)
        const { info, title, image, user, _id, date } = singlePost
        return (
            <div className="container w-75 mt-4 shadow">
                <div className="row">
                    <div>
                        < h2 className="display-3">{title}</h2>
                        <p className="lead">by {}<span className="text-muted">{user.name}</span> </p>
                        <p className="lead">Posted on <span className="text-muted"><Moment format="DD/MM/YYYY">
                            {date}
                        </Moment>
                        </span>
                        </p>
                    </div>
                    <div className="d-block h-25" >
                        <img className="img-fluid max-width:100%" src={require(`../../../public/upload/${image}`)} alt={_id} />
                    </div>
                    <p className="lead text-justify mt-4">{info}</p>
                </div>
            </div>
        )

    }
    return <Spinner animation="border" variant="dark" />
}




export default SinglePost

import React, { useContext } from 'react'
//import moment from 'moment'
import Moment from 'react-moment'
import PostContext from '../../Context/posts/postContext';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

const PostItem = ({ title, info, image, id, date }) => {
    const postContext = useContext(PostContext);
    const { deletePost, getSinglePost } = postContext;
    const deleteItem = () => {
        deletePost(id)
        toast.success("Post delete SuccessFully")
    }



    return (
        <div className="container ">
            <div className="row row-cols-sm-2 row-cols-md-2 mx-auto shadow mt-4">
                <div className="col">
                    <h1 className="text-wrap Capatilize">{title}</h1>
                    <p className="text-justify text-break text-truncate">{info}</p>
                    <div className="btn-group" role="group" aria-label="Basic example">

                        <Link to={`/posts/${id}`} className="btn btn-inline-block btn-outline-success ml-2" >Read</Link>
                        <Link to="#!" className="btn btn-inline-block btn-outline-success ml-2" >Edit</Link>
                        <Link to="#!" className="btn btn-inline-block btn-outline-danger ml-2" onClick={deleteItem}>Delete</Link>
                    </div>
                    <div className="pl-2 pt-4">
                        <p>Created At: <span> <Moment format="DD/MM/YYYY">
                            <p className="text-lead ">Created At : <span className="badge badge-primary">{date}</span></p>
                        </Moment></span> </p>
                    </div>
                </div>
                <div className="col ml-auto" style={{ width: "450px" }}>
                    <img className="img-thumbnail" src={require(`../../../public/upload/${image}`)} alt={id} />
                </div>
            </div>
            <br />
        </div>

    )
}

export default PostItem

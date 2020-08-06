import React, { useContext } from 'react'
//import moment from 'moment'
import Moment from 'react-moment'
import PostContext from '../../Context/posts/postContext';
import { toast } from 'react-toastify'
const PostItem = (props) => {
    const postContext = useContext(PostContext);
    const { deletePost } = postContext;

    const deleteItem = () => {
        deletePost(props.post._id)
        toast.success("Post delete SuccessFully")
    }
    return (
        <div className="container ">
            <div className="row row-cols-sm-2 row-cols-md-2 mx-auto shadow mt-4">
                <div className="col">
                    <h1 className="text-wrap Capatilize">{props.post.title}</h1>
                    <p className="text-justify text-break text-truncate">{props.post.info}</p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button className="btn btn-inline-block btn-outline-primary ml-2">Read</button>
                        <button className="btn btn-inline-block btn-outline-success ml-2" >Edit</button>
                        <button className="btn btn-inline-block btn-outline-danger ml-2" onClick={deleteItem}>Delete</button>
                    </div>
                    <div className="pl-2 pt-4">
                        <p>Created At: <span> <Moment format="YYYY/MM/DD">
                            <p className="text-lead ">Created At : <span className="badge badge-primary">{props.post.date}</span></p>
                        </Moment></span> </p>
                    </div>
                </div>
                <div className="col ml-auto" style={{ width: "450px" }}>
                    <img className="img-thumbnail pl-4" src={require(`../../../public/upload/${props.post.image}`)} alt={props.post._id} />
                </div>
            </div>
            <br />
        </div>

    )
}

export default PostItem

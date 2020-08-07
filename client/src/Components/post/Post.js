import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Context/auth/authContext'
import PostContext from '../../Context/posts/postContext'
//import AlertContext from '../../Context/alert/alertContext'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'


const Post = () => {

    const authContext = useContext(AuthContext)
    const postContext = useContext(PostContext)
    //const alertContext = useContext(AlertContext)
    const { error, createPost, imageStatus, clearStatus } = postContext
    const { isAuthenticated } = authContext
    //const { setAlert } = alertContext

    const [event, setEvent] = useState({
        title: "",
        info: "",
        image: null,
    });

    const { info, title, image } = event
    let history = useHistory()

    useEffect(() => {
        if (error === "Post already with title") {
            // setAlert(error, 'danger')
            toast.error(error)
        }
    }, [error])

    useEffect(() => {
        if (imageStatus) {
            history.push('/')
            toast.success("Post Created")
            clearStatus()
            //clearStatus function make the imageStatus as false so that 
            //it can not be true 
        }

    })

    const onChange = (e) => {
        e.preventDefault();
        setEvent({ ...event, [e.target.name]: e.target.value })
    }



    const getImage = (e) => {
        e.preventDefault();
        setEvent({ ...event, image: e.target.files[0] })
    }



    const submitForm = (e) => {
        e.preventDefault();
        if (info === '' || title === "") {
            //setAlert('Fill All field', 'danger')
            toast.warn('All fields required')
        }
        const data = new FormData();
        data.append('image', image);
        data.append('info', info)
        data.append('title', title)
        createPost(data);
        // axios.post('/blog/create', data).then(res => {
        //     console.log(res.statusText)
        //     setState({ info: '', title: '', image: null, imageStatus: true })
        // }).catch(err => console.log(err.message))
    }

    if (!isAuthenticated) {
        return <h1>Not Authenticated...</h1>
    }

    return (
        <div className="container w-50 mt-4 ">
            <h2 className="text-center text-md">Add <span className="text-primary">Post</span></h2>
            <form onSubmit={submitForm} encType="multipart/form-data">
                <div className="form-group">
                    <label >Title</label>
                    <input type="text"
                        className="form-control"
                        name="title"
                        value={event.title || ''}
                        onChange={onChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label >Write Content</label>

                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="info"
                        onChange={onChange}
                        value={event.info} />
                </div>
                <div className="custom-file">
                    <input type="file"
                        className="cutstom-file-input"
                        onChange={getImage}
                        name="image"
                    />

                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
            </form>

        </div>
    )
}

export default Post

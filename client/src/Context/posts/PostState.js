import React, { useReducer } from 'react'
import PostReducer from './postReducer';
import PostContext from './postContext';
import axios from 'axios'
import {
    CREATE_POST_FAIL,
    CREATE_POST_SUCCESS,
    GET_ALL_POST_FAIL,
    GET_ALL_POST_SUCCESS,
    CLEAR_STATUS,
    CLEAR_LOADING,
    DELETE_POST,
    DELETE_POST_FAIL,
    GET_SINGLE_POST,
    GET_SINGLE_POST_FAIL
} from '../types'

const PostState = (props) => {
    const initialState = {
        error: null,
        imageStatus: false,
        loading: false,
        deleteStatus: null,
        allposts: [],
        singlePost: null
    };

    const [state, dispatch] = useReducer(PostReducer, initialState);


    //create Post
    const createPost = async (formData) => {

        try {
            const res = await axios.post('/blog/create', formData);
            dispatch({
                type: CREATE_POST_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            const response = err.response;
            console.log(response)
            dispatch({
                type: CREATE_POST_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    //CLEAR STATUS
    const clearStatus = () => {
        dispatch({
            type: CLEAR_STATUS
        })
    }

    const clearLoading = () => {
        dispatch({
            type: CLEAR_LOADING
        })
    }
    const getData = async (id) => {
        try {
            const res = await axios.get(`/blog/posts/${id}`);
            dispatch({
                type: GET_ALL_POST_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            //TODO TO COMPLETE THIS FUNCTION
            dispatch({
                type: GET_ALL_POST_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    const deletePost = async (id) => {
        try {
            const res = await axios.delete(`/blog/${id}`)
            dispatch({
                type: DELETE_POST,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: DELETE_POST_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    //get Single Post
    const getSinglePost = async (id) => {
        try {
            const res = await axios.get(`/blog/${id}`);
            dispatch({
                type: GET_SINGLE_POST,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: GET_SINGLE_POST_FAIL,
                payload: err.response.data.msg
            })
        }
    }
    return (
        <PostContext.Provider value={{
            allposts: state.allposts,
            error: state.error,
            imageStatus: state.imageStatus,
            loading: state.loading,
            deleteStatus: state.deleteStatus,
            singlePost: state.singlePost,
            createPost,
            clearStatus,
            getData,
            clearLoading,
            deletePost,
            getSinglePost
        }} >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState
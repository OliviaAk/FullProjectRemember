import React, { Fragment, useState } from 'react';
import Message from '../Message';
import Progress from '../Progress';
import axios from 'axios';

const Upload = () => {
    const [profileImg, setProfileImg]= useState()

    const onFileChange =(e)=> {
        setProfileImg({ profileImg: e.target.files[0] })
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg',profileImg)
        axios.post("http://localhost:5000/img/", formData, {
        }).then(res => {
        })
    }
  return (
    <div className="container">
        <div className="row">
        <form onSubmit={onSubmit}>
                <div className="form-group">
                <input type="file" onChange={onFileChange} />
                </div>
                <div className="form-group">
                    <button  type="submit" >Загрузить</button>
                </div>
            </form>
        </div>
    </div>
)
};

export default Upload;
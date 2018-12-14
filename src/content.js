import React, { Component } from 'react';
import './content.css';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="about">
                    <div className="intro">
                        <h2>About Us</h2>
                        <p>We are added our major Services</p>
                    </div>
                    <div className="box">
                        <div className="box-inner box-1">
                            <h3><a href="#">FaceBook Marketing</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, magni.</p>
                        </div>
                        <div className="box-inner box-2">
                            <h3><a href="#">FaceBook Marketing</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, magni.</p>
                        </div>
                        <div className="box-inner box-3">
                            <h3><a href="#">FaceBook Marketing</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, magni.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;



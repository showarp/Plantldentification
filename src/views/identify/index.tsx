import "./identify.scss"
import { PictureFilled } from '@ant-design/icons';
import { YoutubeFilled } from '@ant-design/icons';
import React from 'react';
import { Col, Divider, Row } from 'antd';


function Identify() {
    return (
        <div className="identify-box">
            <div className="identify-button">
                <PictureFilled className="identify-img" />
                <p>图片识别</p>
            </div>
            <div className="identify-button">
                <YoutubeFilled className="identify-img" />
                <p>视频识别</p>
            </div>
        </div>

    )
}
export default Identify;
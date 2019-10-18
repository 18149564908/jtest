import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import styles from './test.less'
import { Button } from 'antd';
import BasicLayout from './layout/BasicLayout'

class Index extends React.Component{
    render() {
        return (
            <div className={styles.test}>
                <BasicLayout>
                    sss
                </BasicLayout>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
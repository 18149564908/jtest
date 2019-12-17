import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './test.less'
import { Button } from 'antd';
import BasicLayout from './layout/BasicLayout'

class Index extends React.Component{
    render() {
        return (
            <div>
                <BasicLayout>
                    
                    <div className={styles.test}>sss</div>
                </BasicLayout>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
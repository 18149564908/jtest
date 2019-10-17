import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import styles from './test.less'

class Index extends React.Component{
    render() {
        return <div className={styles.test}>sss</div>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
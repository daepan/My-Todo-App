import React, { Component } from 'react';

class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    }

    handleGoHome = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        //페이지 이동 시 정말 나갈것인지 질문한다.
        this.unblock = this.props.history.block('정말 이동하시겠습니까?')
    }

    componentWillUnmount() {
        //컴포넌트가 언마운트되면 질문을 멈춘다
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        <div>
            <button onClick={this.handleGoBack}>뒤로</button>
            <button onClick={this.handleGoHome}>앞으로</button>
        </div>
    }
}

export default HistorySample;
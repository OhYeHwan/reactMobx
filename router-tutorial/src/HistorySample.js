import React, {Component} from 'react';

class HistorySample extends Component {
    // 뒤로가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    handleGoProfiles = () => {
        this.props.history.push('/profiles')
    }

    componentDidMount() {
        // 페이지 변화가 생기려고 할 때마다 알림 창
        this.unblock = this.props.history.block("정말 끌거야?"); 
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트 되면 질문을 멈춤
        if (this.unblock) {
            this.unblock();
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
                <button onClick={this.handleGoProfiles}>프로파일로</button>
            </div>
        );
    }
}

export default HistorySample;
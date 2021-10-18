import React from 'react';
import qs from 'qs';

const TodoAbout = ({ loacation }) => {
    const query = qs.parse(loacation.search, {
        ignoreQueryPrefix: true
    });

    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>언제쯤 나는 어른이 될까</h1>
            <p>
                바리스타 1급이나 따버릴까
                {showDetail && <p>detail 값 true로 설정하였다.</p>}
            </p>
        </div>
    )
}

export default TodoAbout;
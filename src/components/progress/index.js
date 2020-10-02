import React from 'react';
import './progress.css';

function Progress(props) {
    return (
        // <p>Value: {props.value}</p>
        <div class="progress">
            <div class="progress-bg"></div>
            <div class="progress-fg" style={{
                '--color-start': props.start ?? '#b3e5fc',
                '--color-end': props.end ?? '#bbdefb',
                width: `${props.value * 10}%`
            }}></div>
        </div>
    );
}

export default Progress;
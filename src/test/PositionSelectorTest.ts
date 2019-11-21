import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StartPosSelector } from '../js/ctrls/StartPosSelector';

export const PositionSelectorTest = (props: {openingsPos: null}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(StartPosSelector, props), container, () => {});
};

if (!window['onixtest']) {
    window['onixtest'] = {};
}

window['onixtest'].PositionSelectorTest = PositionSelectorTest;
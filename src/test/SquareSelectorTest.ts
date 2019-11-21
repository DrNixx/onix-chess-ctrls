import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SquareSelector } from '../js/ctrls/SquareSelector';

export const SquareSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(SquareSelector, props), container, () => {});
};

if (!window['onixtest']) {
    window['onixtest'] = {};
}

window['onixtest'].SquareSelectorTest = SquareSelectorTest;
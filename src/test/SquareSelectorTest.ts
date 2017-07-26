import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SquareSelector } from '../ctrls/SquareSelector';

export const SquareSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(SquareSelector, props), container, () => {});
};
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SquareSelector } from '../js/ctrls/SquareSelector';

export const SquareSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(SquareSelector, props), container, () => {});
};

type hash = { [key: string]: any };

if (!(<hash>window)['onixtest']) {
    (<hash>window)['onixtest'] = {};
}

(<hash>window)['onixtest'].SquareSelectorTest = SquareSelectorTest;
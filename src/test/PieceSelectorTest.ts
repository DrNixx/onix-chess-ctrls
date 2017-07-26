import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PieceSelector } from '../ctrls/PieceSelector';

export const PieceSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(PieceSelector, props), container, () => {});
};
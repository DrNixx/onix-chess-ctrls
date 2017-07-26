import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WhoMoveSelector } from '../ctrls/WhoMoveSelector';

export const WhoMoveSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(WhoMoveSelector, props), container, () => {});
};
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WhoMoveSelector } from '../js/ctrls/WhoMoveSelector';

export const WhoMoveSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(WhoMoveSelector, props), container, () => {});
};

if (!window['onixtest']) {
    window['onixtest'] = {};
}

window['onixtest'].WhoMoveSelectorTest = WhoMoveSelectorTest;
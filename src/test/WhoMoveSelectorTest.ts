import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WhoMoveSelector } from '../js/ctrls/WhoMoveSelector';

export const WhoMoveSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(WhoMoveSelector, props), container, () => {});
};

type hash = { [key: string]: any };

if (!(<hash>window)['onixtest']) {
    (<hash>window)['onixtest'] = {};
}

(<hash>window)['onixtest'].WhoMoveSelectorTest = WhoMoveSelectorTest;
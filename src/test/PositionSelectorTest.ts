import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StartPosSelector, StartPosSelectorProps } from '../js/ctrls/StartPosSelector';

export const PositionSelectorTest = (props: StartPosSelectorProps, container: HTMLElement) => {
    ReactDOM.render(React.createElement(StartPosSelector, props), container, () => {});
};

type hash = { [key: string]: any };

if (!(<hash>window)['onixtest']) {
    (<hash>window)['onixtest'] = {};
}

(<hash>window)['onixtest'].PositionSelectorTest = PositionSelectorTest;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SizeSelector } from '../js/ctrls/SizeSelector';

export const SizeSelectorTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(SizeSelector, props), container, () => {});
};

if (!window['onixtest']) {
    window['onixtest'] = {};
}

window['onixtest'].SizeSelectorTest = SizeSelectorTest;
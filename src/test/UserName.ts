import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UserName } from '../js/ui/UserName';

export const UserNameTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(UserName, props), container, () => {});
};

type hash = { [key: string]: any };

if (!(<hash>window)['onixtest']) {
    (<hash>window)['onixtest'] = {};
}

(<hash>window)['onixtest'].UserNameTest = UserNameTest;
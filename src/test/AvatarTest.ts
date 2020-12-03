import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from '../js/ui/Avatar';

export const AvatarTest = (props: {}, container: HTMLElement) => {
    ReactDOM.render(React.createElement(Avatar, props), container, () => {});
};

type hash = { [key: string]: any };

if (!(<hash>window)['onixtest']) {
    (<hash>window)['onixtest'] = {};
}

(<hash>window)['onixtest'].AvatarTest = AvatarTest;
import * as React from 'react';
import {AvatarSizeMap, AvatarSizeType, Icons} from "../types/Interfaces";
import {Md5} from 'ts-md5/dist/md5';
import { IChessUser } from 'onix-chess';


export interface IAvatarProps {
    user?: IChessUser,
    size?: AvatarSizeType
}

export class Avatar extends React.Component<IAvatarProps, {}> {
    public static defaultProps: IAvatarProps = {
        user: undefined,
        size: 'Medium',
    }

    private sizes = {
        'Tiny': 25,
        'Small': 36,
        'Medium': 48,
        'Large': 80,
        'Original': 160
    };

    private retinaSizes: AvatarSizeMap = {
        'Tiny': 'Small',
        'Small': 'Medium',
        'Medium': 'Large',
        'Large': 'Original',
        'Original': 'Original'
    }

    /**
     * constructor
     */
    constructor(props: IAvatarProps) {
        super(props);
    }

    private getAvatarUrl = (id: number|string, size: AvatarSizeType = "Small", retina = false) => {

        if (retina) {
            size = this.retinaSizes[size];
        }

        const key: string = Md5.hashStr(`UserAvatar|${id}`) + ".jpeg";
        const ch = key[0];
        return `https://a0${ch}.chess-online.com/userpics/${key}?size=${size}`;
    }

    render() {
        const { user, size } = this.props;
        let urlOrig: string;
        let urlRetina: string;
        let name: string;
        const uid = user?.id ?? 1;
        if (user) {
            urlOrig = this.getAvatarUrl(uid, size, false);
            urlRetina = this.getAvatarUrl(uid, size, true);
            name = user?.display ?? '???';
        } else {
            urlOrig = this.getAvatarUrl(1, size, false);
            urlRetina = this.getAvatarUrl(1, size, true);
            name = '???';
        }

        const imgSize = this.sizes[size!];
        
        return (
            <img src={urlOrig}
                 alt={name}
                 title={name}
                 width={imgSize}
                 height={imgSize}
                 data-src={urlOrig}
                 data-src-retina={urlRetina}></img>
        );
    }
}

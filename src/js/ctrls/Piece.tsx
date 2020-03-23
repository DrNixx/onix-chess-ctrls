import * as React from 'react';

interface PieceProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    class?: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            piece: PieceProps;
        }
    }
}

export class Piece extends React.Component<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> {
    public render() {
        const { className, ...props } = this.props;
        return (
            <piece is="cg" class={className} {...props}></piece>
        );
    }
}
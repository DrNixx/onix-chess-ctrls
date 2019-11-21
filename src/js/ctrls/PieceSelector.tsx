import * as React from 'react';
import { FormControl, FormControlProps } from 'react-bootstrap';

const boardsData = require('onix-board-assets/dist/assets/pieces/pieces.json');

export interface PieceSelectorProps extends FormControlProps {
    defaultValue?: string;
    onChangePiece?: (piece: string) => void;
}

export class PieceSelector extends React.Component<PieceSelectorProps, {}> {
    public static defaultProps: PieceSelectorProps = {
        defaultValue: 'merida',
        size: 'sm'
    }

    /**
     * constructor
     */
    constructor(props: PieceSelectorProps) {
        super(props);
    }

    private onChange = (e) => {
        const { onChangePiece } = this.props;
        const piece = e.target.value; 

        if (onChangePiece) {
            onChangePiece(piece);
        }
    };

    private getPieces = () => {
        let result = [];
        boardsData.pieceFaces.forEach(element => {
            result.push(
                <option key={element.code} value={element.code}>{element.name}</option>
            );
        });

        return result;
    };

    render() {
        const { defaultValue, onChangePiece, size, ...otherProps } = this.props;
        return (
            <FormControl as="select" size={size} onChange={this.onChange} defaultValue={defaultValue} {...otherProps}>
                {this.getPieces()}
            </FormControl>
        );
    }
}
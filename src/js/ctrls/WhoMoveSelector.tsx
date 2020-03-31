import * as React from 'react';
import toSafeInteger from 'lodash-es/toSafeInteger';
import { _ } from 'onix-core';
import { FormControl, FormControlProps } from 'react-bootstrap';
import { register as i18nRegister } from '../Intl';
import { Colors, Color } from 'onix-chess';

export interface WhoMoveSelectorProps extends FormControlProps {
    defaultValue?: Colors.BW;
    onChangeTurn?: (color: Colors.BW) => void;
}

export class WhoMoveSelector extends React.Component<WhoMoveSelectorProps, {}> {
    public static defaultProps: WhoMoveSelectorProps = {
        defaultValue: Color.White,
        size: "sm",
    }

    /**
     * constructor
     */
    constructor(props: WhoMoveSelectorProps) {
        super(props);
        i18nRegister();
    }

    private onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { onChangeTurn } = this.props;
        const color: Colors.BW = toSafeInteger(e.target.value) as Colors.BW; 

        if (onChangeTurn) {
            onChangeTurn(color);
        }
    }

    render() {
        const { defaultValue, onChangeTurn, size, ...otherProps } = this.props;
        
        return (
            <FormControl as="select" size={size} onChange={this.onChange} defaultValue={defaultValue!.toString()} {...otherProps}>
                <option value={Color.White.toString()}>{_("chess-ctrls", "white_move")}</option>
                <option value={Color.Black.toString()}>{_("chess-ctrls", "black_move")}</option>
            </FormControl>
        );
    }
}

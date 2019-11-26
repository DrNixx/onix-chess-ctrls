import toSafeInteger from 'lodash-es/toSafeInteger';
import * as React from 'react';
import { Intl } from 'onix-core';
import { Intl as IntlCtrls } from '../Intl';
import { FormControl, FormControlProps } from 'react-bootstrap';
import { Color } from 'chessground/types';

export interface WhoMoveSelectorProps extends FormControlProps {
    defaultValue?: Color;
    onChangeTurn?: (color: Color) => void;
}

export class WhoMoveSelector extends React.Component<WhoMoveSelectorProps, {}> {
    public static defaultProps: WhoMoveSelectorProps = {
        defaultValue: 'white',
        size: 'sm',
    }

    /**
     * constructor
     */
    constructor(props: WhoMoveSelectorProps) {
        super(props);

        IntlCtrls.register();
    }

    private onChange = (e) => {
        const { onChangeTurn } = this.props;
        const color: Color = e.target.value; 

        if (onChangeTurn) {
            onChangeTurn(color);
        }
    }

    render() {
        const { defaultValue, onChangeTurn, size, ...otherProps } = this.props;
        return (
            <FormControl as="select" size={size} onChange={this.onChange} defaultValue={defaultValue} {...otherProps}>
                <option value="white">{Intl.t("chess-ctrls", "white_move")}</option>
                <option value="black">{Intl.t("chess-ctrls", "black_move")}</option>
            </FormControl>
        );
    }
}

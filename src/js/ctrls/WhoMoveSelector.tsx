import toSafeInteger from 'lodash-es/toSafeInteger';
import * as React from 'react';
import { Intl } from 'onix-core';
import { Intl as IntlCtrls } from 'onix-chess';
import { FormControl, FormControlProps } from 'react-bootstrap';
import { Color } from 'onix-chess';

export interface WhoMoveSelectorProps extends FormControlProps {
    defaultTurn?: number;
    onChangeTurn?: (color: number) => void;
}

export class WhoMoveSelector extends React.Component<WhoMoveSelectorProps, {}> {
    public static defaultProps: WhoMoveSelectorProps = {
        defaultTurn: Color.White,
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
        const color: number = toSafeInteger(e.target.value); 

        if (onChangeTurn) {
            onChangeTurn(color);
        }
    }

    render() {
        const { defaultTurn, onChangeTurn, size, ...otherProps } = this.props;
        return (
            <FormControl as="select" size={size} onChange={this.onChange} defaultValue={defaultTurn.toString()} {...otherProps}>
                <option value={Color.White.toString()}>{Intl.t("chess", "white_move")}</option>
                <option value={Color.Black.toString()}>{Intl.t("chess", "black_move")}</option>
            </FormControl>
        );
    }
}

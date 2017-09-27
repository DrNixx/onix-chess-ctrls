import * as React from 'react';
import toSafeInteger = require('lodash/toSafeInteger');
import { Intl } from 'onix-core';
import { Intl as IntlCtrls } from 'onix-chess';
import { FormControl, FormControlProps } from 'onix-ui';

export interface WhoMoveSelectorProps extends FormControlProps {
    defaultTurn?: number;
    onChangeTurn?: (color: number) => void;
}

export class WhoMoveSelector extends React.Component<WhoMoveSelectorProps, {}> {
    public static defaultProps: WhoMoveSelectorProps = {
        defaultTurn: 0,
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
        const { defaultTurn } = this.props;
        return (
            <FormControl componentClass="select" scale="small" onChange={this.onChange} defaultValue={defaultTurn.toString()}>
                <option value="0">{Intl.t("chess", "white_move")}</option>
                <option value="1">{Intl.t("chess", "black_move")}</option>
            </FormControl>
        );
    }
}

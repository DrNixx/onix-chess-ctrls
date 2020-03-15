import * as React from 'react';
import { Intl } from 'onix-core';
import { Intl as IntlCtrls } from '../Intl';
import { FormControl, FormControlProps } from 'react-bootstrap';
import { ColorName } from 'onix-chess';

export interface WhoMoveSelectorProps extends FormControlProps {
    defaultValue?: ColorName;
    onChangeTurn?: (color: ColorName) => void;
}

export class WhoMoveSelector extends React.Component<WhoMoveSelectorProps, {}> {
    public static defaultProps: WhoMoveSelectorProps = {
        defaultValue: "white",
        size: "sm",
    }

    /**
     * constructor
     */
    constructor(props: WhoMoveSelectorProps) {
        super(props);

        IntlCtrls.register();
    }

    private onChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const { onChangeTurn } = this.props;
        const color: ColorName = e.currentTarget.value as ColorName; 

        if (onChangeTurn) {
            onChangeTurn(color);
        }
    }

    render() {
        const { defaultValue, onChangeTurn, size, ...otherProps } = this.props;
        return (
            <FormControl as="select" size={size} onChange={this.onChange} defaultValue={defaultValue!.toString()} {...otherProps}>
                <option value="white">{Intl.t("chess-ctrls", "white_move")}</option>
                <option value="black">{Intl.t("chess-ctrls", "black_move")}</option>
            </FormControl>
        );
    }
}

import * as React from 'react';
import { Intl, Hashtable } from 'onix-core';
import { IOpeningPosition, FenString, FenFormat } from 'onix-chess';
import { FormControl, FormControlProps } from 'react-bootstrap';
import { Intl as IntlCtrl } from '../Intl';

export interface StartPosSelectorProps extends FormControlProps {
    fen?: string,
    openingsPos?: IOpeningPosition[],
    onChangeFen?: (fen: string) => void,
}

export interface StartPosSelectorState {
    openings: IOpeningPosition[],
}

export class StartPosSelector extends React.Component<StartPosSelectorProps, StartPosSelectorState> {
    private posMap: Hashtable<string> = {};

    public static defaultProps: StartPosSelectorProps = {
        fen: FenString.standartStart,
        openingsPos: [],
        size: 'sm',
    }

    /**
     * constructor
     */
    constructor(props: StartPosSelectorProps) {
        super(props);
        IntlCtrl.register();

        this.state = {
            openings: props.openingsPos!,
        };
    }

    componentDidMount() {
        if (process.env.NODE_ENV === 'production') {
            const { state } = this;

            if (state.openings.length === 0) {
                const ajaxCallback = this.ajaxCallback;
                fetch('https://www.chess-online.com/api/position/starting-positions', {mode: "cors"})
                    .then(function(response) {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        // Read the response as json.
                        return response.json();
                    })
                    .then(function(responseAsJson) {
                        ajaxCallback(responseAsJson);
                    })
                    .catch(function(error) {
                        console.log('Looks like there was a problem when reading openings: \n', error);
                    });
            } 
        }
    }

    private ajaxCallback = (data?: any) => {
        const { state } = this;

        let openings: IOpeningPosition[] = [];
        for (var i = 0; i < data.length; i++) {
            const option = data[i];
            const key = FenString.trim(option.fen, FenFormat.castlingEp);
            this.posMap[key] = option.fen;
            openings.push(option);
        }
        
        this.setState({
            ...state,
            openings: openings
        });
    }

    private onChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const { onChangeFen } = this.props;
        let fen: string = e.currentTarget.value; 

        if (fen === "---") {
            fen = window.prompt(Intl.t("chess-ctrls", "paste_fen_prompt"), "") || FenString.emptyBoard;
        }

        if (onChangeFen) {
            onChangeFen(fen);
        }
    };

    private getOpenings = (openingsPos: IOpeningPosition[]) => {
        if (openingsPos && openingsPos.length) {
            let openings = [];
            for (let i = 0; i < openingsPos.length; i++) {
                const option = openingsPos[i];
                const fen = FenString.trim(option.fen, FenFormat.castlingEp);
                openings.push(
                    <option key={i} value={fen}>{option.name}</option>
                );
            }

            return (
                <optgroup label={Intl.t("chess-ctrls", "popular_opening")}>
                    {openings}
                </optgroup>
            );

        } else {
            return null;
        }
    }
    
    render() {
        let { fen, openingsPos, onChangeFen, size, ...otherProps } = this.props;
        const { openings } = this.state;
        
        const std = FenString.trim(FenString.standartStart, FenFormat.castlingEp);
        const empt = FenString.trim(FenString.emptyBoard, FenFormat.castlingEp);
        fen =  fen || "";
        if (fen) {
            fen = FenString.trim(fen, FenFormat.castlingEp);
        }
        
        return (
            <FormControl as="select" size={size} onChange={this.onChange} defaultValue={fen} {...otherProps}>
                <optgroup label={Intl.t("chess-ctrls", "set_board")}>
                    <option value="">{Intl.t("chess-ctrls", "position_label")}</option>
                    <option value={std}>{Intl.t("chess-ctrls", "std_fen")}</option>
                    <option value={empt}>{Intl.t("chess-ctrls", "empty_fen")}</option>
                    <option value="---">{Intl.t("chess-ctrls", "get_fen")}</option>
                </optgroup>
                {this.getOpenings(openings)}
            </FormControl>
        );
    }
}

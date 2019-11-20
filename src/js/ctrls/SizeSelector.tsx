import * as React from 'react';
import { FormControl, FormControlProps } from 'react-bootstrap';

export interface SizeSelectorProps extends FormControlProps {
    defaultSize?: number;
    onChangeSize?: (size: number) => void;
}

export class SizeSelector extends React.Component<SizeSelectorProps, {}> {
    public static defaultProps: SizeSelectorProps = {
        defaultSize: 4,
    }

    /**
     * constructor
     */
    constructor(props: SizeSelectorProps) {
        super(props);
    }

    private onChange = (e) => {
        const { onChangeSize } = this.props;
        const size: number = e.target.value; 

        if (onChangeSize) {
            onChangeSize(size);
        }
    }

    render() {
        const { defaultSize } = this.props;
        return (
            <FormControl as="select" size="sm" onChange={this.onChange} defaultValue={defaultSize.toString()}>
                <option value="1">200x200</option>
                <option value="2">280x280</option>
                <option value="3">360x360</option>
                <option value="4">450x450</option>
                <option value="5">540x540</option>
                <option value="6">710x710</option>
            </FormControl>
        );
    }
}
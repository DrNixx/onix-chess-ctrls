import * as React from 'react';

export interface SquareSelectorProps {
    pgn?: string;
    readOnly?: boolean,
    onChange?: (pgn: string) => void;
}
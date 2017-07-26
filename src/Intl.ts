import { Intl as IntlCore } from 'onix-core';

var intlInitialized = false;

export function registerStrings() {
    if (!intlInitialized) {
        
        IntlCore.registerStrings('chess-ctrls', {
            'ru-ru': {
                set_board: "Установить позицию",
                position_label: "-- Позиция --",        
                std_fen: "Стартовая позиция",
                empty_fen: "Пустая доска",
                get_fen: "Загрузить FEN",
                paste_fen_prompt: "Скопируйте сюда собственный FEN",
                popular_opening: "Популярные дебюты",
            },

            'en-us': {
                set_board: "Set the board",
                position_label: "-- Position --",
                std_fen: "Standart start",
                empty_fen: "Empty board",
                get_fen: "Custom position",
                paste_fen_prompt: "Paste FEN position",
                popular_opening: "Popular openings"
            }
        });

        intlInitialized = true;
    }
}
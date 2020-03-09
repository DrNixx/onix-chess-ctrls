import { Intl as IntlCore } from 'onix-core';

export class Intl {
    private static intlInitialized = false;

    public static register() {
        if (!Intl.intlInitialized) {
            
            IntlCore.register();

            IntlCore.registerStrings('chess-ctrls', {
                'ru-ru': {
                    white_move: "Ход белых",
                    black_move: "Ход черных",
                    set_board: "Установить позицию",
                    position_label: "-- Позиция --",        
                    std_fen: "Стартовая позиция",
                    empty_fen: "Пустая доска",
                    get_fen: "Загрузить FEN",
                    paste_fen_prompt: "Скопируйте сюда собственный FEN",
                    popular_opening: "Популярные дебюты",
                    copy_to_clipboard: "Копировать в буфер обмена",
                },

                'en-us': {
                    white_move: "White move",
                    black_move: "Black move",
                    set_board: "Set the board",
                    position_label: "-- Position --",
                    std_fen: "Standart start",
                    empty_fen: "Empty board",
                    get_fen: "Custom position",
                    paste_fen_prompt: "Paste FEN position",
                    popular_opening: "Popular openings",
                    copy_to_clipboard: "Copy to clipboard",
                }
            });

            Intl.intlInitialized = true;
        }
    }    
}

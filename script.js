let GameBoard = () => 
{
    let board = [null, null, null, null, null, null, null, null, null];
    let itemList = document.querySelectorAll('.blocks');
    let item = document.getElementById('blockContainer');
    let move;
    function playMove(m)
    {
        item.removeEventListener('click', move);
        move = (e) => {
            if(e.target != e.currentTarget)
            {
                index = Array.from(itemList).indexOf(e.target);
                if(board[index] == null)
                {
                    board[index] = m;
                    console.log(board);
                }
            }
        };
        item.addEventListener('click', move);
    }
    function getBoard(){
        return board;
    }
    return {getBoard, playMove};
};

let Board = GameBoard();



let Player = (move) => 
{
    function playMove()
    {
        Board.playMove(move);
        console.log(Board.getBoard())
    }
    return {move, playMove};
}

let player2 = Player(2);
let player1 = Player(1);
let turn = 1;

// console.log(GameBoard.board);

// let board = [-1, -1, -1, -1, -1, -1];
// let itemList = document.querySelectorAll('.blocks');
// let item = document.getElementById('blockContainer')
// item.addEventListener('click', (e) => {
//     if(e.target != e.currentTarget)
//     {
//         index = Array.from(itemList).indexOf(e.target);
//         board[index] = playermove;
//     }
// });
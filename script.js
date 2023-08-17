(() => 
{
    let board = [null, null, null, null, null, null, null, null, null];
    let itemList = document.querySelectorAll('.blocks');
    let item = document.getElementById('blockContainer');
    let move = (e) => {
        if(e.target != e.currentTarget)
        {
            index = Array.from(itemList).indexOf(e.target);
            board[index] = 0;
            console.log(board);
        }
    };
    item.addEventListener('click', move);
})();



// let Player = (move) => 
// {
//     function playMove()
//     {
//         item.addEventListener('click', (e) => {
//         if(e.target != e.currentTarget)
//         {
//             index = Array.from(itemList).indexOf(e.target);
//             board[index] = move;
//         }
//         });
//     }
//     return {playMove};
// }

// let player1 = Player(1);
// let player2 = Player(2);
// player1.playMove();

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
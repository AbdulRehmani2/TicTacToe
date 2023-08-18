let GameBoard = (function()
{
    let board = [null, null, null, null, null, null, null, null, null];
    let itemList = document.querySelectorAll('.blocks');
    let item = document.getElementById('blockContainer');
    let title = document.querySelector('div>h1');
    let move;
    function playMove(m)
    {
        item.removeEventListener('click', move);
        move = (e) => {
            if(e.target != e.currentTarget)
            {
                index = Array.from(itemList).indexOf(e.target);
                if(board[index] == null && index != -1)
                {
                    let img = document.createElement('img');
                    if(m == 'X')
                    {
                        img.src = "/resources/cross.png";
                        player2.playMove();
                    }
                    else
                    {
                        img.src = "/resources/circle.png";
                        player1.playMove();
                    }
                    img.classList.add('image');
                    itemList[index].appendChild(img);
                    board[index] = m;
                    let result = CheckBoard();
                    if(result == 'X')
                    {
                        item.removeEventListener('click', move);
                        title.innerHTML = "Player 1 Wins"
                    }
                    else if(result == 'O')
                    {
                        item.removeEventListener('click', move);
                        title.innerHTML = "Player 2 Wins"
                    }
                    if(!board.includes(null))
                    {
                        item.removeEventListener('click', move);
                        title.innerHTML = "Draw"
                    }
                        
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
})()

let Board = GameBoard;

let Player = (move) => 
{
    function playMove()
    {
        Board.playMove(move);
        console.log(Board.getBoard())
    }
    return {move, playMove};
}

let player2 = Player('O');
let player1 = Player('X');

player1.playMove();

function CheckBoard()
{
    let board = Board.getBoard();
    for(let i = 0; i < board.length; i+=3)
    {
        if(board[i] == board[i+1] && board[i] == board[i+2])
        {
            if(board[i] != null)
            {
                ChangeColor(i, i+1, i+2);
            }
            return board[i];
        }
    }
    for(let i = 0; i < 3; i++)
    {
        if(board[i] == board[i+3] && board[i] == board[i+6])
        {
            if(board[i] != null)
            {
                ChangeColor(i, i+3, i+6);
            }
            return board[i];
        }
    }
    if(board[0] == board[4] && board[0] == board[8])
    {
        if(board[0] != null)
        {
            ChangeColor(0, 4, 8);
        }
        return board[0];
    }
    if(board[2] == board[4] && board[2] == board[6])
    {
        if(board[2] != null)
        {
            ChangeColor(2, 4, 6);
        }
        return board[2];
    }
}

function ChangeColor(num1, num2, num3)
{
    let items = document.querySelectorAll('.blocks');
    items[num1].style.border = '5px solid red';
    items[num2].style.border = '5px solid red';
    items[num3].style.border = '5px solid red';
}
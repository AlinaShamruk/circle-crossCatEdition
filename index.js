(() => {
    const container = document.getElementById("root")
    let moveNumber = 0

    const createField = () => {
        const field = document.createElement("div")
        field.className = "field"
        container.append(field)

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div")
            cell.className = "cell"
            field.append(cell)
        }
    }

    const getSimbol = (move) => {
        if (move % 2 === 0) {
            const cross = document.createElement("div")
            cross.className = "cross"
            return cross
        }
        const circle = document.createElement("div")
        circle.className = "circle"
        return circle
    }

    const makeMove = () => {
        const cell = document.getElementsByClassName("cell");

        for (let i = 0; i < cell.length; i++) {
            cell[i].addEventListener("click", function() {
                if (!this.innerHTML) {
                    this.append(getSimbol(moveNumber))
                    moveNumber = ++moveNumber

                }
                checkWin();
            })
        }
    }

    function checkWin() {
        let cross = `<div class="cross"></div>`;
        let circle = `<div class="circle"></div>`;
        let block = document.getElementsByClassName('cell');
        let sad = document.createElement('div');
        let div = document.getElementById('sad');
        sad.className = 'saad';
        let text = document.createTextNode("NOOOOOOOOOOOO! NOBODY WINS! TRY AGAIN HUMAN");
        let arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let x = 0; x < arr.length; x++) {
            if (block[arr[x][0]].innerHTML === cross &&
                block[arr[x][1]].innerHTML === cross &&
                block[arr[x][2]].innerHTML === cross) {
                setTimeout(() => { alert('Cross Wins!') }, 1000);
                setTimeout(() => location.reload(), 2000);
            } else if (block[arr[x][0]].innerHTML === circle &&
                block[arr[x][1]].innerHTML === circle &&
                block[arr[x][2]].innerHTML === circle) {
                alert("Circle Win");
                location.reload();
            } else if (moveNumber == 9) {

                div.append(sad);
                div.append(text);
                setTimeout(() => location.reload(), 5000);
            }
        }
    }
    createField()
    makeMove()
})()
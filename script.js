function task1() {
    let input = prompt("Введите число:");

    if (input === null || input.trim() === "" || isNaN(input)) {
        console.error("Ошибка: введено не число");
        return;
    }

    let numberStr = input.trim();

    if (numberStr[0] === "-") {
        numberStr = numberStr.slice(1);
    }

    numberStr = numberStr.split(".")[0];

    console.log("Количество цифр:", numberStr.length);
    console.log("Первая цифра:", numberStr[0]);
}

function task2() {
    let str = prompt("Введите строку:");

    if (str === null) return;

    let result = "";

    for (let i = str.length - 1; i >= 0; i -= 2) {
        result += str[i];
    }

    console.log("Результат:", result);
}

function task3() {
    let array = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j] ** 2;
        }
    }

    console.log("Сумма квадратов:", sum);
}
'use strict';

const getAsk = prompt(`Задай вопрос, ответ на который будет "да" или "нет"`);

const getAnswer = Math.random() * 10;
console.log(getAsk + "?");

switch (Number.parseInt(getAnswer)) {
    case 0:
    alert(`${getAsk}? Мой ответ: Больше да, чем нет`)
    console.log(`${getAsk}? Мой ответ: Больше да, чем нет`)
    break;
    case 1:
    alert(`${getAsk}? Мой ответ: Однозначно НЕТ!`)
    console.log(`${getAsk}? Мой ответ: Однозначно НЕТ!`)
    break;
    case 2:
    alert(`${getAsk}? Мой ответ: ммм... возможно`)
    console.log(`${getAsk}? Мой ответ: ммм... возможно`)
    break;
    case 3:
    alert(`${getAsk}? Мой ответ: Больше нет, чем да`)
    console.log(`${getAsk}? Мой ответ: Больше нет, чем да`)
    break;
    case 4:
    alert(`${getAsk}? Мой ответ: Уверен(а), что задал(а) правильный вопрос?`)
    console.log(`${getAsk}? Мой ответ: Уверен(а), что задал(а) правильный вопрос?`)
    break;
    case 5:
    alert(`${getAsk}? Мой ответ: 100% ДА`)
    console.log(`${getAsk}? Мой ответ: 100% ДА`)
    break;
    case 6:
    alert(`${getAsk}? Мой ответ: 100% НЕТ`)
    console.log(`${getAsk}? Мой ответ: 100% НЕТ`)
    break;
    case 7:
    alert(`${getAsk}? Мой ответ: Да ! Да ! Да !`)
    console.log(`${getAsk}? Мой ответ: Да ! Да ! Да !`)
    break;
    case 8:
    alert(`${getAsk}? Мой ответ: не исключаю оба варианта :)`)
    console.log(`${getAsk}? Мой ответ: не исключаю оба варианта :)`)
    break;
    case 9:
    alert(`${getAsk}? Мой ответ: Спроси чуть позже, интуиция в отпуске :)`)
    console.log(`${getAsk}? Мой ответ: Спроси чуть позже, интуиция в отпуске :)`)
    break;

}
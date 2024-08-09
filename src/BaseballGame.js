export default class BaseballGame {
    play(computerInputNumbers, userInputNumbers) {
        const computerArray = computerInputNumbers.split('');
        const userArray = userInputNumbers.split('');

        let strikes = 0;
        let balls = 0;

        for (let i = 0; i < 3; i++) {
            if (computerArray[i] === userArray[i]) {
                strikes++;
            } else if (computerArray.includes(userArray[i])) {
                balls++;
            }
        }

        if (strikes === 0 && balls === 0) {
            return '낫싱';
        }
        return `${balls > 0 ? balls + '볼 ' : ''}${strikes > 0 ? strikes + '스트라이크' : ''}`.trim();
    }
}

export const generateRandomNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 3) {
        numbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(numbers).join('');
};

export const validateInput = (input) => {
    if (!/^\d{3}$/.test(input)) {
        alert('세 자리 숫자를 입력해야 합니다.');
        return false;
    }
    const digits = new Set(input);
    if (digits.size !== 3 || [...digits].some(digit => digit === '0')) {
        alert('1에서 9까지의 서로 다른 숫자를 입력해야 합니다.');
        return false;
    }
    return true;
};

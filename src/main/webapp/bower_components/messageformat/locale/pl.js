MessageFormat.locale.pl = function (n) {
    if (n == 1) {
        return 'one';
    }
    if ((n % 10) >= 2 && (n % 10) <= 4 &&
        ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
        return 'few';
    }
    if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
        ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
        n == Math.floor(n)) {
        return 'many';
    }
    return 'other';
};

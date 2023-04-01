const ar = ['h', 'e', 'e', 'l', 'o'];

function rev (s) {
    if (s.length <= 1) return s;
    return rev(s.slice(1)) + s[0];
};

function split (x) {
    return x.split('');
};
console.log(split(rev(ar)));
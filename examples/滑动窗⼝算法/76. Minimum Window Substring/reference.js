/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
    let left = 0, right = 0;
    const tMap = new Map(), sMap = new Map();
    // Init tMap and sMap
    for (const char of t) {
        tMap.set(char, (tMap.get(char) | 0) + 1)
        sMap.set(char, 0)
    }

    let match = 0;
    let res = "", resLen = Infinity;

    // [left, right]
    while (right < s.length) {
        if (tMap.has(s[right])) {
            sMap.set(s[right], sMap.get(s[right]) + 1);
            if (sMap.get(s[right]) == tMap.get(s[right])) match++;
        }

        while (match == tMap.size) {
            str = s.slice(left, right + 1);
            if (str.length < resLen) {
                res = str;
                resLen = str.length;
            }

            sMap.set(s[left], sMap.get(s[left]) - 1);
            if (sMap.get(s[left]) < tMap.get(s[left])) match--;
            left++;
        }

        right++;
    }

    return res;
};
function solution(k, dungeons) {
    
    function getPermutations(arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
            const permutations = getPermutations(rest, selectNumber - 1);
            const attached = permutations.map((permutation) => [fixed, ...permutation]);
            results.push(...attached);
        });
        
        return results;
    }

    let maxCount = 0;
    const permutations = getPermutations(dungeons, dungeons.length);
    
    for (let perm of permutations) {
        let currentFatigue = k;
        let count = 0;
        for (let i = 0; i < perm.length; i++) {
            let [required, consumed] = perm[i];
            if (required > currentFatigue) {
                break;
            }
            currentFatigue -= consumed;
            count++;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}
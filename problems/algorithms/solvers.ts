
// FIX: Removed import from non-module script. Parsers are globally available on `window`.

export const solvers = {
    'two-sum': ({ arr, target }: { arr: string, target: any }) => {
        const nums = window.parseNumberArray(arr);
        const t = window.parseNumber(target);
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = t - nums[i];
            if (map.has(complement)) {
                return `[${map.get(complement)}, ${i}]`;
            }
            map.set(nums[i], i);
        }
        return "No two sum solution";
    },
    'binary-search': ({ arr, target }: { arr: string, target: any }) => {
        const nums = window.parseNumberArray(arr);
        const t = window.parseNumber(target);
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === t) return `Found at index: ${mid}`;
            if (nums[mid] < t) left = mid + 1;
            else right = mid - 1;
        }
        return "Target not found";
    },
    'bubble-sort': ({ arr }: { arr: string }) => {
        const nums = window.parseNumberArray(arr);
        for(let i=0; i < nums.length; i++) {
            for(let j=0; j < nums.length - 1 - i; j++) {
                if (nums[j] > nums[j+1]) {
                    // Swap elements
                    [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                }
            }
        }
        return `[${nums.join(', ')}]`;
    },
    'fizzbuzz': ({ num }: { num: any }) => {
        const n = window.parseNumber(num);
        let result = [];
        for (let i = 1; i <= n; i++) {
            if (i % 15 === 0) result.push('FizzBuzz');
            else if (i % 3 === 0) result.push('Fizz');
            else if (i % 5 === 0) result.push('Buzz');
            else result.push(i);
        }
        return result.join(', ');
    },
};
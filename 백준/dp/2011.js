const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim();
const MOD = 1000000;

int[] array = new int[len + 1];

		for (int i = 0; i < len; i++) {
			array[i + 1] = input.charAt(i) - '0';
		}


        
let result = [1];
for(let i =0; i<=input.length;i++){
    if(input[i] != 0){
        result[i] = (result[i-1]+result[i])%MOD;
    }

    let twoStr = input[i] + input[i - 1] * 10;
    if(10<=twoStr && 26>=twoStr){
        result[i] = (result[i-2]+result[i])%MOD;
    }
}

console.log(result);
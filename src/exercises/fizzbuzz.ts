// 1~100までの数値を出力
// 3 or 5の倍数の時はFizzBuzz
// 5の倍数の時は Buzz
// 3の倍数の時はFizz
const isDivisible = (target: number, divisor: number) => target % divisor === 0;
export const fizzBuzz = () => {
  const FIZZ = "Fizz";
  const BUZZ = "Buzz";
  for (let i = 1; i <= 100; i++) {
    const output = isDivisible(i, 15) ? FIZZ + BUZZ : isDivisible(i, 5) ? FIZZ : isDivisible(i, 3) ? BUZZ : i;
    console.log(output);
  }
};

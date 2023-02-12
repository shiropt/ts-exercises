/** 
整数numsの配列と整数targetが与えられたとき、2つの数値の足し算がtargetになるようなインデックスを返す。
各入力は正確に1つの解を持つと仮定してよく、同じ要素を2度使ってはならない。
また、同じ要素を2度使ってはならない。解答はどのような順序でも返すことができる。 */
export const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
};

/**
文字列の配列の中で、最も長い共通の接頭辞を持つ文字列を求める関数を作成しなさい。
共通の接頭辞がない場合は、空の文字列 "" を返す。 */
export const longestCommonPrefix = (strs: string[]): string => {
  // 配列の最初の要素の文字数分ループする
  for (let i = 0; i <= strs[0].length; i++) {
    // 2番目以降の要素の数分ループする
    for (let j = 1; j < strs.length; j++) {
      // 最初の要素のi番目の文字数が2番目以降の要素のi番目の文字列と異なれば
      if (strs[0][i] !== strs[j][i]) {
        // 最初の要素のi番目までの文字列を返す
        return strs[0].slice(0, i);
      } else {
        console.log(i);
      }
    }
  }
  console.log;
  return strs[0];
};

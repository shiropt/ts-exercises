export {};

/** 難易度：★☆☆☆　基礎の基礎レベル */

/** 1-1. 関数に型をつけよう */
function isPositive(num: number) {
  return num >= 0;
}

isPositive(3);

/** 1-2. オブジェクトの型 */
type User = {
  name: string;
  age: number;
  private: boolean;
};
function showUserInfo(user: User) {
  // 省略
}

// 使用例
showUserInfo({
  name: "John Smith",
  age: 16,
  private: false,
});

//** 1-3. 関数の型 */
type IsPositiveFunc = (num: number) => boolean;
const isPositive2: IsPositiveFunc = (num) => num >= 0;

// 使用例
isPositive2(5);

/** 1-4. 配列の型 */
function sumOfPos(arr: number[]): number {
  return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);

/** 難易度：★★☆☆　基本レベル */

/** 2-1. ジェネリクス */
function myFilter<T>(arr: T[], predicate: (arg: T) => boolean) {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}

// 使用例
const res = myFilter([1, 2, 3, 4, 5], (num: number) => num % 2 === 0);
const res2 = myFilter(["foo", "hoge", "bar"], (str: string) => str.length >= 4);

// エラー例
// myFilter([1, 2, 3, 4, 5], (str) => str.length >= 4);

/**2-2. いくつかの文字列を受け取れる関数 */
type Speed = "slow" | "medium" | "fast";

function getSpeed(speed: Speed): number {
  switch (speed) {
    case "slow":
      return 10;
    case "medium":
      return 50;
    case "fast":
      speed;
      return 200;
  }
}

// 使用例
const slowSpeed = getSpeed("slow");
const mediumSpeed = getSpeed("medium");
const fastSpeed = getSpeed("fast");

// エラー例
// getSpeed("veryfast");

/**2-3. 省略可能なプロパティ */
// 使用例

type Option =
  | {
      capture?: boolean;
      once?: boolean;
      passive?: boolean;
    }
  | boolean;
declare function addEventListener(event: string, callback: () => void, option?: Option): void;

addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false,
});

// エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true,
// });

/**2-4. プロパティを1つ増やす関数 */
function giveId<T>(obj: T): T & { id: string } {
  const id = "本当はランダムがいいけどここではただの文字列";
  return {
    ...obj,
    id,
  };
}
// 使用例
const obj1: {
  id: string;
  foo: number;
} = giveId({ foo: 123 });

const obj2: {
  id: string;
  num: number;
  hoge: boolean;
} = giveId({
  num: 0,
  hoge: true,
});

// エラー例
// const obj3: {
//   id: string;
//   piyo: string;
// } = giveId({
//   foo: "bar",
// });

/** 2-5. useState */

// 使用例
// number型のステートを宣言 (numStateはnumber型)

type UseStateUpdateArgument<T> = T | ((oldValue: T) => T);
declare function useState<T>(initialValue: T): [T, (updator: UseStateUpdateArgument<T>) => void];

const [numState, setNumState] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState((state) => state + 10);

// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState<number | null>(null);
setAnotherState(100);

// エラー例
setNumState(3);

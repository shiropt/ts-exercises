/** 難易度：★★★☆　脱入門レベル */

/** 3-1. 配列からMapを作る */
function mapFromArray<T, K extends keyof T>(arr: T[], key: K): Map<T[K], T> {
  const result = new Map<T[K], T>();
  for (const obj of arr) {
    result.set(obj[key], obj);
  }
  return result;
}

// 使用例
const data = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Mary Sue" },
  { id: 100, name: "Taro Yamada" },
];
const dataMap = mapFromArray(data, "id");
// エラー例
// mapFromArray(data, "age");

/** 3-2. Partial */
// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};
type T1 = MyPartial<{
  foo: number;
  bar: string;
}>;
/*
 * T2は { hoge?: { piyo: number; } } となる
 */
type T2 = MyPartial<{
  hoge: {
    piyo: number;
  };
}>;

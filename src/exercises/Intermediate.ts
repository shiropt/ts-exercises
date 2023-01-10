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

/** 3-3. イベント */
interface EventPayloads {
  start: {
    user: string;
  };
  stop: {
    user: string;
    after: number;
  };
  end: {};
}

class EventDischarger<E> {
  emit<Ev extends keyof E>(eventName: Ev, payload: E[Ev]) {
    // 省略
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();

ed.emit("start", {
  user: "user1",
});
ed.emit("stop", {
  user: "user1",
  after: 3,
});
ed.emit("end", {});

// エラー例
// ed.emit("start", {
//   user: "user2",
//   after: 0,
// });
// ed.emit("stop", {
//   user: "user2",
// });
// ed.emit("foobar", {
//   foo: 123,
// });

/** 3-4. reducer */
type Action =
  | {
      type: "increment";
      amount: number;
    }
  | {
      type: "decrement";
      amount: number;
    }
  | {
      type: "reset";
      value: number;
    };
const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    case "reset":
      return action.value;
  }
};

// 使用例
reducer(100, {
  type: "increment",
  amount: 10,
}) === 110;

reducer(100, {
  type: "decrement",
  amount: 55,
}) === 45;

reducer(500, {
  type: "reset",
  value: 0,
}) === 0;

// エラー例
// reducer(0, {
//   type: "increment",
//   value: 100,
// });

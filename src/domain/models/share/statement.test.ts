import { Statement } from "./statement.js";

describe('Statement 値オブジェクトのテスト', () => {
  describe('生成メソッド(create)でのインスタンス生成（不変条件）', () => {
    test('【正常系】生成メソッドでインスタンスの生成ができること', () => {
      const statement = Statement.create('円周率が3.05よりも大きいことを示せ');
      expect(statement instanceof Statement).toBe(true);
      expect(statement.value).toBe('円周率が3.05よりも大きいことを示せ');
    });
    test('【異常系】不正な入力（空文字）に対し、例外処理ができること', () => {
      expect(() => Statement.create('')).toThrow(/^空文字にはできません$/);
    });
    test('【異常系】不正な入力（全角スペースのみ）に対し、例外処理ができること', () => {
      expect(() => Statement.create('　')).toThrow(/^空文字にはできません$/);
    });
    test('【異常系】不正な入力（半角スペースのみ）に対し、例外処理ができること', () => {
      expect(() => Statement.create(' ')).toThrow(/^空文字にはできません$/);
    })
  });
  describe('等価性の検証 (equals)', () => {
    test('【正常系】値が同じなら true を返すこと', () => {
      const statement = Statement.create('円周率が3.05よりも大きいことを示せ');
      const other = Statement.create('円周率が3.05よりも大きいことを示せ');
      expect(statement.equals(other)).toBe(true);
    });
    test('【正常系】値が異なるなら false を返すこと', () => {
      const statement = Statement.create('円周率が3.05よりも大きいことを示せ');
      const other = Statement.create('円周率が3.15よりも小さいことを示せ');
      expect(statement.equals(other)).toBe(false);
    });
    test('【正常系】Statement以外のオブジェクトに対し、false を返すこと', () => {
      const statement = Statement.create('円周率が3.05よりも大きいことを示せ');
      const other = null;
      expect(statement.equals(other)).toBe(false);
    });
  });

});
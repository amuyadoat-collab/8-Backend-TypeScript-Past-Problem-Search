export class Statement {
  private constructor(public readonly value: string) {}
  
  static create(text: string): Statement {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      throw new Error('空文字にはできません');
    }
    return new Statement(trimmedText);
  }

  equals(other: unknown): other is Statement {
    if (!(other instanceof Statement)) {
      return false;
    }
    return this.value === other.value;
  }
}
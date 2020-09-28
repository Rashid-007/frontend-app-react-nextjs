class LocalStorageWrapper {
    public getItem(key: string): string {
      return localStorage.getItem(key);
    }
    public setItem(key: string, value: string): void {
      return localStorage.setItem(key, value);
    }
  
    public removeItem(key: string): void {
      return localStorage.removeItem(key);
    }
  
    public clear(): void {
      return localStorage.clear();
    }
  
    public key(index: number): string {
      return localStorage.key(index);
    }
  
    get length() {
      return localStorage.length;
    }
  }
  
  export { LocalStorageWrapper };
  
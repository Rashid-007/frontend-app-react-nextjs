class SessionStorageWrapper {
    public getItem(key: string): string {
      return sessionStorage.getItem(key);
    }
    public setItem(key: string, value: string): void {
      return sessionStorage.setItem(key, value);
    }
  
    public removeItem(key: string): void {
      return sessionStorage.removeItem(key);
    }
  
    public clear(): void {
      return sessionStorage.clear();
    }
  
    public key(index: number): string {
      return sessionStorage.key(index);
    }
  
    get length() {
      return sessionStorage.length;
    }
  }
  
  export { SessionStorageWrapper };
  
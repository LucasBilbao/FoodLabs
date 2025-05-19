export class UriBuilder {
  private path: string = '';
  private parameters: string = '';

  public setPath(path: string): UriBuilder {
    this.path = path;
    return this;
  }

  public appendParameter(param: string) {
    this.path = `${this.path}/${param}`;
    return this;
  }

  public appendQueries<T>(queries: T | any): UriBuilder {
    this.parameters = Object.entries(queries).reduce(
      (prev, [key, value]) => (value ? `${prev}${key}=${value}&` : prev),
      ''
    );
    return this;
  }

  public build() {
    return `${this.path}?${this.parameters}`;
  }
}

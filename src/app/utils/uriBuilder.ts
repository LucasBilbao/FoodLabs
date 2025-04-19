export class UriBuilder {
  private path: string = '';
  private parameters: string = '';

  public setPath(path: string): UriBuilder {
    this.path = path;
    return this;
  }

  public setParameters(parameters: {
    [key: string]: string | number;
  }): UriBuilder {
    this.parameters = Object.entries(parameters).reduce(
      (prev, [key, value]) => value ? `${prev}${key}=${value}&` : '',
      ''
    );
    return this;
  }

  public get() {
    return `${this.path}?${this.parameters}`;
  }
}

interface IRole {
  name: string;
  value: string;
}

export class Role implements IRole {
  name: string;
  value: string;

  constructor(name: string) {
    this.name = name;
    this.value = name;
  }
}

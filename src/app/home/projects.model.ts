export class Project {
  name!: string;
  route!: string;

  constructor(name: string, route: string) {
    this.name = name;
    this.route = route;
  }
}

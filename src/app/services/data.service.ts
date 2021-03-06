import { Injectable } from '@angular/core';

export interface Item {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: Item[] = [
    {
      "title": "minim consequat",
      "description": "Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation tempor exercitation sit id tempor."
  },
  {
      "title": "eu proident",
      "description": "Qui mollit dolore dolor pariatur magna fugiat anim voluptate eu. Consectetur qui aliqua irure fugiat laborum quis anim."
  },
  {
      "title": "cillum in",
      "description": "Qui cillum elit mollit nulla deserunt voluptate in et esse officia. In exercitation irure fugiat officia sint do sunt adipisicing labore reprehenderit qui in."
  },
  {
      "title": "tempor sunt",
      "description": "Nulla aliquip consectetur exercitation tempor. Reprehenderit irure enim pariatur nostrud incididunt incididunt eiusmod ullamco eu mollit et."
  },
  {
      "title": "veniam cillum",
      "description": "Sunt cupidatat duis tempor excepteur pariatur excepteur velit ad non. Et consequat officia irure cupidatat cillum ex do officia enim do et velit incididunt anim."
  }
  ];

  constructor() { }

  public getItems(): Item[] {
    return this.items;
  }

  public getItemById(title: string): Item {
    return this.items[title];
  }
}

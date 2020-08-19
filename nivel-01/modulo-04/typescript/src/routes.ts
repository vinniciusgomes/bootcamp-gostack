import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Vinnicius",
    email: "vinniciusgomes@outlook.com.br",
    password: "123",
    techs: [
      "Node.js",
      "ReactJS",
      "ReactNative",
      { title: "Javascript", experience: 100 },
    ],
  });
  return response.json({ message: "Hello World" });
}

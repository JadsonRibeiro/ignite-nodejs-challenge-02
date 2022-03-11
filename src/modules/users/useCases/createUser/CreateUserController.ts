import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { body } = request;
    try {
      const user = this.createUserUseCase.execute({
        email: body.email,
        name: body.name,
      });
      return response.status(201).json(user);
    } catch (e) {
      return response.status(400).json({ error: "Erro" });
    }
  }
}

export { CreateUserController };

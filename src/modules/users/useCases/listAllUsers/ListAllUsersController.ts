import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {
      headers: { user_id },
    } = request;
    try {
      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return response.json(users);
    } catch (e) {
      return response.status(400).json({ error: "Erro" });
    }
  }
}

export { ListAllUsersController };

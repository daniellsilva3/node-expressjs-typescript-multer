import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

class UserController{
    public async uploadAvatar(req: Request, res: Response) {
      
    if (req.file) {
       
  
        //Salvando os dados do usuário no MongoDB
        try {
          const { nome, email, telefone, cpf } = req.body;
          const user = await UserModel.create({ nome, email, telefone, cpf });
          console.log("Usuário salvo no banco de dados:", user);
          
        } catch (error) {
          console.error("Erro ao salvar usuário no banco de dados:", error);
          return res.status(500).json({ error: "Erro ao salvar usuário no banco de dados." });
        }
  
        return res.json({
          response: req.file,
          message: "Upload com sucesso!"
        });
  
      }
  

        res.status(409);
        return res.json({
            response: `Não é um tipo de arquivo válido`,
        });

    }
    public get(req: Request, res: Response){
        let data = {
            name: 'aula node express typecript mongo db mongoose',
        }
        return res.json(data)

    }

}
export const userController = new UserController();

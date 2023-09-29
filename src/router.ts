import { Router } from "express";
import multer from "multer";
import { userController } from "./app/controller/UserController"

import { uploadAvatar } from "./app/middlewere/upload/avatar";

const router: Router = Router();

router.post(
    "/",
    multer(uploadAvatar.getConfig).single("avatar"),userController.uploadAvatar

)

router.get("/aula-node", userController.get);

export {router};
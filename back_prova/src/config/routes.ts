import { Router } from "express";
import { DespesaController } from "../controllers/despesa.controller";
import { ListarDespesa } from "../controllers/listarDespesa.controller";
import { TotalMediaController } from "../controllers/totalMedia.controller";

const router: Router = Router();

router.post("/despesa/cadastrar", new DespesaController().cadastrar)
router.get("/", new ListarDespesa().listarDespesa)
router.get("/total", new TotalMediaController().listar)

export { router };

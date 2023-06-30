import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { Despesa } from "@prisma/client";


export class ListarDespesa {
    async listarDespesa(request: Request, response: Response) {

        const despesa: Despesa[] = await prismaClient.despesa.findMany();

        return response.json(despesa);
    }
}
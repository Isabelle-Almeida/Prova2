import { Request, Response } from "express";
import { Despesa } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

export class TotalMediaController {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
        const despesas = await prismaClient.despesa.findMany();
        
        const despesasCalculadas = despesas.map((despesaCadastrada: any) => {
            const totalDespesa = despesaCadastrada.total + despesaCadastrada.preco;

            return prismaClient.despesa.update({
                where: { id: despesaCadastrada.id},
                data: {
                    total: totalDespesa,
                   
                },
            });
        });

        await Promise.all(despesasCalculadas);

        const despesasAtualizadas = await prismaClient.despesa.findMany();

        return response.status(200).json({
            message: "Listagem",
            dados: despesasAtualizadas,
        });
    } catch (e) {
        return response.status(500  ).json({ error: "Erro ao listar as despesas" });
    }
  }


}


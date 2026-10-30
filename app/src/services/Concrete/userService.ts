import type { Prisma } from "@prisma/client";
import prisma from "../../configs/postgresConfig.js";

export const createUser = async (data: Prisma.UserCreateInput) => {
    return await prisma.user.create({
        data,
    });
};

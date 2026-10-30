import type { Request, Response } from "express";
import * as userService from "../services/Concrete/userService.js";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error instanceof Error ? error.message : "Internal Server Error",
        });
    }
};

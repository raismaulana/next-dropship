import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

import PartnerService from "../../../services/partner";

class LoginRequest {
    email: string;
    password: string;
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
    const partnerService: PartnerService =req.scope.resolve("partnerService");

    const body = req.body as LoginRequest;
    const { email, password } = body;

    const jwt = await partnerService.login(email, password)

    return res.status(200).json({ 
        message: "success", 
        data: {
            token: jwt,
        } 
    });
}

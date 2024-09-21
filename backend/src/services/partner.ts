import { TransactionBaseService } from "@medusajs/medusa";
import { Partner } from "../models/partner";
import { pbkdf2Sync } from 'crypto';
import * as jwt from 'jsonwebtoken';
import {
    IsNull,
} from "typeorm";
import { MedusaError } from "medusa-core-utils";

// Function to hash a password with PBKDF2
function hashPassword(plainPassword: string): string {
    const iterations = 10000;
    const keyLength = 64;
    const digest = 'sha256'; // You can use 'sha512' or other algorithms as well
    
    const hashedPassword = pbkdf2Sync(plainPassword, process.env.PARTNER_PASSWORD_SALT, iterations, keyLength, digest).toString('hex');
    return hashedPassword;
}

// Function to compare a password with a hashed password
function verifyPassword(plainPassword: string, hashedPassword: string): boolean {
    const hashToCompare = hashPassword(plainPassword);
    return hashToCompare === hashedPassword;
}

// Function to generate a JWT token
function generateJWT(userId: string): string {
    const secretKey = process.env.jwt_partner;  // You should store this in environment variables
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
    return token;
}

class PartnerService extends TransactionBaseService {

    async list(): Promise<Partner[]> {
        const partnerRepo = this.activeManager_.getRepository(
            Partner
        )
        
        return partnerRepo.find()
    }

    async login(email: string, password: string): Promise<string> {
        const partnerRepo = this.activeManager_.getRepository(
            Partner
        )
        const partner = await partnerRepo.findOne({
            where: [ {deleted_at:IsNull()}, {email: email} ]
        })
        if (!partner) {
            throw new MedusaError(
                MedusaError.Types.INVALID_ARGUMENT,
                "email atau password salah"
            )
        }
        
        if (!verifyPassword(password, partner.passwordHash)) {
            throw new MedusaError(
                MedusaError.Types.INVALID_ARGUMENT,
                "email atau password salah"
            )
        }

        return generateJWT(partner.id)
    }
        
}

export default PartnerService;
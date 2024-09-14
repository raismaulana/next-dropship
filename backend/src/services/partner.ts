import { TransactionBaseService } from "@medusajs/medusa";
import { Partner } from "../models/partner"

class PartnerService extends TransactionBaseService {

    async list(): Promise<Partner[]> {
        const partnerRepo = this.activeManager_.getRepository(
            Partner
        )
        
        return partnerRepo.find()
    }
        
}

export default PartnerService;
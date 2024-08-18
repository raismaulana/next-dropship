import { 
    BeforeInsert, 
    Column, 
    Entity, 
    ManyToOne, 
    PrimaryColumn,
  } from "typeorm"
import { SoftDeletableEntity } from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"
import { PartnerSubscription } from "./partner_subscription"
  
@Entity()
export class PartnerSubscriptionPayment extends SoftDeletableEntity {
    @PrimaryColumn({ type: "varchar" })
    id: string

    @ManyToOne( () => PartnerSubscription )
    name: PartnerSubscription

    @Column({ type: "timestamptz" })
    dueDate: Date

    @Column({ type: "int4" })
    amount: Date

    @Column({ type: "varchar" })
    channel: string

    @Column({ type: "varchar" })
    paidAt: Date

    @Column({ type: "varchar" })
    status: string

    @Column( { type: "jsonb", nullable: true })
    metadata: Record<string, unknown> | null

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "psb")
    }
}
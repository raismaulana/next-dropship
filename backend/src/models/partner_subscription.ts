import { 
    BeforeInsert, 
    Column, 
    Entity, 
    ManyToOne, 
    OneToOne, 
    PrimaryColumn,
  } from "typeorm"
import { SoftDeletableEntity } from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"
import { Partner } from "./partner"
import { PartnershipPackage } from "./partnership_package"
  
@Entity()
export class PartnerSubscription extends SoftDeletableEntity {
    @PrimaryColumn({ type: "varchar" })
    id: string

    @ManyToOne( () => Partner )
    name: Partner

    @ManyToOne( () => PartnershipPackage )
    partnershipPackage: PartnershipPackage

    @Column({ type: "timestamptz" })
    startAt: Date

    @Column({ type: "timestamptz" })
    endAt: Date

    @Column( { type: "jsonb", nullable: true })
    metadata: Record<string, unknown> | null

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "ps")
    }
}
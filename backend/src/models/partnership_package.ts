import { 
    BeforeInsert, 
    Column, 
    Entity, 
    PrimaryColumn,
  } from "typeorm"
import { SoftDeletableEntity } from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"
  
@Entity()
export class PartnershipPackage extends SoftDeletableEntity {
    @PrimaryColumn({ type: "varchar" })
    id: string

    @Column({ type: "varchar" })
    name: string

    @Column({ type: "varchar" })
    description: string

    @Column({ type: "int4" })
    amount: number

    @Column({ type: "int4" })
    day: number

    @Column({ type: "bool" })
    isVisible: boolean

    @Column( { type: "jsonb", nullable: true })
    metadata: Record<string, unknown> | null

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "psp")
    }
}
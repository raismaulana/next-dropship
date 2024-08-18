import { 
    BeforeInsert, 
    Column, 
    Entity, 
    PrimaryColumn,
  } from "typeorm"
import { SoftDeletableEntity } from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"
  
@Entity()
export class Partner extends SoftDeletableEntity {
    @PrimaryColumn({ type: "varchar" })
    id: string

    @Column({ type: "varchar" })
    email: string

    @Column({ type: "varchar" })
    fullName: string

    @Column({ type: "varchar" })
    passwordHash: string

    @Column({ type: "varchar", nullable: true })
    phone: string | null

    @Column( { type: "jsonb", nullable: true })
    metadata: Record<string, unknown> | null

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "post")
    }
}
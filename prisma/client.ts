import { PrismaClient } from "@prisma/client"

declare global {
    namespace NodeJS {
        interface Global {}
    }
}

// add prisma to nodejs global type
interface CustomNodeJsGlobal extends NodeJS.Global {
    prisma: PrismaClient
}

// prevent multiple instances of Prisma Client in develeopment
declare const global: CustomNodeJsGlobal

const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
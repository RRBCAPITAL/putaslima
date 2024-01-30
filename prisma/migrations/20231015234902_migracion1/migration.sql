-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "Blocked" AS ENUM ('FALSE', 'TRUE');

-- CreateEnum
CREATE TYPE "Pago" AS ENUM ('PAGO', 'NO_PAGO');

-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('INACTIVE_COMMERCIAL', 'PAYMENT_PENDING', 'ACTIVE_ADD');

-- CreateEnum
CREATE TYPE "NivelAnuncio" AS ENUM ('NOTHING', 'SIMPLE', 'MOTOMAMI', 'BICHOTA');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "estado" "Estado" NOT NULL DEFAULT 'INACTIVE_COMMERCIAL',
    "pago" "Pago" NOT NULL DEFAULT 'NO_PAGO',
    "blocked" "Blocked" NOT NULL DEFAULT 'FALSE',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anuncios" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tarifaxhr" INTEGER NOT NULL,
    "tarifaxmr" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "region" TEXT,
    "nacionalidad" TEXT,
    "lugar" TEXT,
    "diasAtencion" TEXT NOT NULL,
    "horarioInicio" TEXT NOT NULL,
    "horarioFin" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "idioma" TEXT[],
    "altura" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagenPrincipal" TEXT,
    "galeriaFotos" TEXT[],
    "galeriaVideos" TEXT[],
    "estado" BOOLEAN NOT NULL DEFAULT false,
    "nivel" "NivelAnuncio" NOT NULL DEFAULT 'NOTHING',
    "views" INTEGER NOT NULL DEFAULT 0,
    "questionEnd" TEXT NOT NULL,
    "atencion" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anuncios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "anuncios" ADD CONSTRAINT "anuncios_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

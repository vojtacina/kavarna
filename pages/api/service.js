import {PrismaClient} from '@prisma/client';


export default async (req, res) => {

    const prisma = new PrismaClient();
    const people = await prisma.persons.findMany({
        where: {
            AND: [{
                category: "service"
            }, {
                active: true
            }]
        }
    });

    await prisma.$disconnect()

    res.json(people)

}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function get({ url }) {
    try {
        const announcements = await prisma.announcement.findMany({
            where: {
                id: 0
            }
        });

        const data = announcements.map((announcement) => ({
            content: announcement.content
        }));

        return {
            status: 200,
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: error
            }
        };
    }
}

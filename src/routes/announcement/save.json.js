import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function post({ request, locals }) {
    // Check auth.
    if (!locals.user || !locals.user.userId) {
        return {
            status: 403,
            error: 'Unauthenticated. Please provide a valid cookie.'
        };
    }

    try {
        const body = await request.json();
        let { content } = body;

        const note = await prisma.announcement.upsert({
            update: {
                content: content
            },
            where: {
                id: 0
            },
            create: {
                content: content
            }
        });

        return {
            status: 200,
            body: {
                message: 'Announcement saved.',
                note: note
            }
        };
    } catch (error) {
        return {
            status: 400,
            body: {
                message: error.message
            }
        };
    }
}

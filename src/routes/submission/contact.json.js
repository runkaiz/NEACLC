import { prisma } from '$lib/prisma';

export async function post({ request, locals }) {
    const body = await request.json();

    try {
        const { first, last, email, phone, message } = body;

        console.log(body)

        if (!first || !last || !email || !phone || !message) {
            throw new Error('Invalid data');
        }

        const submission = await prisma.message.create({
            data: {
                firstname: first,
                lastname: last,
                email,
                phone,
                message
            }
        });

        return {
            status: 200
        };
    } catch (error) {
        console.log(error.message)

        return {
            status: 500,
            body: {
                error: error.message
            }
        };
    }
}

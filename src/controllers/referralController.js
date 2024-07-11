const { PrismaClient } = require('@prisma/client');
const sendEmail = require('../config/email');

const prisma = new PrismaClient();

exports.createReferral = async (req, res) => {
    try {
        const { referrerName, referrerEmail, refereeName, refereeEmail, course } = req.body;

        const newReferral = await prisma.referral.create({
            data: {
                referrerName,
                referrerEmail,
                refereeName,
                refereeEmail,
                course,
            },
        });

        await sendEmail(referrerEmail, refereeName, refereeEmail, course);

        res.status(201).json({ message: 'Referral created successfully', referral: newReferral });
    } catch (error) {
        console.error('Error creating referral:', error);
        res.status(500).json({ message: 'An error occurred while creating the referral' });
    }
};
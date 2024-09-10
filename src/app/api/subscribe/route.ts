import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(req) {
	const { email } = await req.json();

	if (!email) {
		return NextResponse.json(
			{ error: "Email is required." },
			{ status: 400 }
		);
	}

	// Basic email format validation using a regular expression
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return NextResponse.json(
			{ error: "Invalid email format." },
			{ status: 400 }
		);
	}

	// Check for length
	if (email.length > 254) {
		return NextResponse.json(
			{ error: "Email is too long." },
			{ status: 400 }
		);
	}

	try {
		// Check if the email already exists in the database
		const [rows]: any = await db.query(
			"SELECT * FROM subscriptions WHERE email = ?",
			[email]
		);

		if (rows.length > 0) {
			return NextResponse.json(
				{ error: "Email already subscribed." },
				{ status: 409 }
			);
		}

		// Insert the new email into the subscriptions table
		await db.query(
			"INSERT INTO subscriptions (email) VALUES (?)",
			[email]
		);

		return NextResponse.json(
			{ message: "Email subscribed successfully." },
			{ status: 201 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Server error. Please try again later." },
			{ status: 500 }
		);
	}
}

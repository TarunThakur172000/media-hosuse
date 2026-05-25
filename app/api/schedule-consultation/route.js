// app/api/schedule-consultation/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      company,
      service,
      budget,
      preferredDate,
      timezone,
      callWindow,
      projectDetails,
    } = body;

    // VALIDATION
    if (!fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        {
          status: 400,
        },
      );
    }

    // TODO:
    // SEND EMAIL
    // SAVE TO DATABASE
    // SEND TO CRM
    // SEND TO SLACK

    console.log("CONSULTATION REQUEST:", {
      fullName,
      email,
      company,
      service,
      budget,
      preferredDate,
      timezone,
      callWindow,
      projectDetails,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
}

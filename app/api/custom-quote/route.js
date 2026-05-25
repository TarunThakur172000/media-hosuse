// app/api/custom-quote/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      company,
      serviceType,
      projectType,
      estimatedBudget,
      propertySize,
      timeline,
      location,
      message,
    } = body;

    // VALIDATION
    if (!fullName || !email || !serviceType) {
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
    // SAVE DATABASE
    // CRM INTEGRATION
    // SLACK ALERT

    console.log("CUSTOM QUOTE REQUEST:", {
      fullName,
      email,
      company,
      serviceType,
      projectType,
      estimatedBudget,
      propertySize,
      timeline,
      location,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Custom quote request submitted successfully.",
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

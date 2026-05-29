// app/api/custom-quote/route.js

import { NextResponse } from "next/server";

import connectDB from "../../../lib/mongodb";

import CustomQuote from "../../../models/CustomQuote";

import { sendEmail } from "../../../lib/brevo";

export async function POST(req) {
  try {
    // CONNECT DATABASE
    await connectDB();

    // GET BODY
    const body = await req.json();

    const { fullName, email, projectType, details } = body;

    // VALIDATION
    if (!fullName || !email || !projectType) {
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

    const emailHtml = `
<div style="
  background:#F4F1EA;
  padding:50px 20px;
  font-family:Arial,sans-serif;
">

  <div style="
    max-width:680px;
    margin:auto;
    background:#ffffff;
    border-radius:28px;
    overflow:hidden;
    border:1px solid #E7E1D7;
    box-shadow:0 10px 40px rgba(0,0,0,0.08);
  ">

    <!-- HEADER -->
    <div style="
      background:linear-gradient(135deg,#111111 0%,#1A1A1A 100%);
      padding:42px;
    ">

      <p style="
        margin:0;
        color:#C8A15A;
        font-size:11px;
        letter-spacing:4px;
        text-transform:uppercase;
      ">
        High Desert Media
      </p>

      <h1 style="
        margin:14px 0 0;
        color:#ffffff;
        font-size:34px;
        line-height:1.2;
        font-weight:700;
      ">
        New Custom Quote Request
      </h1>

      <p style="
        margin:14px 0 0;
        color:rgba(255,255,255,0.65);
        font-size:15px;
        line-height:1.7;
      ">
        A new custom quote inquiry has been submitted from the website.
      </p>

    </div>

    <!-- BODY -->
    <div style="padding:42px;">

      <!-- NAME -->
      <div style="margin-bottom:28px;">

        <p style="
          margin:0 0 8px;
          color:#9B7B45;
          font-size:11px;
          font-weight:700;
          letter-spacing:2px;
          text-transform:uppercase;
        ">
          Full Name
        </p>

        <p style="
          margin:0;
          color:#111111;
          font-size:16px;
          line-height:1.6;
        ">
          ${fullName}
        </p>

      </div>

      <!-- EMAIL -->
      <div style="margin-bottom:28px;">

        <p style="
          margin:0 0 8px;
          color:#9B7B45;
          font-size:11px;
          font-weight:700;
          letter-spacing:2px;
          text-transform:uppercase;
        ">
          Email Address
        </p>

        <p style="
          margin:0;
          color:#111111;
          font-size:16px;
          line-height:1.6;
        ">
          ${email}
        </p>

      </div>

      <!-- PROJECT TYPE -->
      <div style="margin-bottom:28px;">

        <p style="
          margin:0 0 8px;
          color:#9B7B45;
          font-size:11px;
          font-weight:700;
          letter-spacing:2px;
          text-transform:uppercase;
        ">
          Project Type
        </p>

        <p style="
          margin:0;
          color:#111111;
          font-size:16px;
          line-height:1.6;
        ">
          ${projectType}
        </p>

      </div>

      <!-- PROJECT DETAILS -->
      <div style="
        margin-top:20px;
        background:#F8F5EF;
        border:1px solid #E7E1D7;
        border-radius:20px;
        padding:28px;
      ">

        <p style="
          margin:0 0 14px;
          color:#9B7B45;
          font-size:11px;
          font-weight:700;
          letter-spacing:2px;
          text-transform:uppercase;
        ">
          Project Details
        </p>

        <p style="
          margin:0;
          color:#444444;
          font-size:15px;
          line-height:1.9;
        ">
          ${details || "No details provided."}
        </p>

      </div>

    </div>

    <!-- FOOTER -->
    <div style="
      padding:24px 42px;
      background:#FAF8F4;
      border-top:1px solid #ECE7DD;
    ">

      <p style="
        margin:0;
        color:#888888;
        font-size:11px;
        letter-spacing:2px;
        text-transform:uppercase;
      ">
        High Desert Media • Luxury Cinematic Media
      </p>

    </div>

  </div>
</div>
`;

    // SAVE TO DATABASE
    const quote = await CustomQuote.create({
      fullName,
      email,
      projectType,
      details,
    });

    // SEND EMAIL
    await sendEmail({
      to: "steven@highdesertmediaaz.com",

      subject: `New Strategy Call Lead from ${fullName} ${new Date().toLocaleString()}`,

      htmlContent: emailHtml,

      replyTo: email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Custom quote request submitted successfully.",

        quote,
      },
      {
        status: 201,
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

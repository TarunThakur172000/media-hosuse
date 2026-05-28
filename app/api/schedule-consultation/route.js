import { NextResponse } from "next/server";

import connectDB from "../../../lib/mongodb";

import Consultation from "../../../models/Consultation";

import transporter from "../../../lib/mail";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    // SAVE TO DATABASE
    const consultation = await Consultation.create(body);

    // SEND EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: "steven@highdesertmediaaz.com",

      subject: `New Strategy Call Lead from  ${body.fullName} ${new Date().toLocaleString()}`,

      html: `
<div style="
  background:#F4F1EA;
  padding:50px 20px;
  font-family:Arial,sans-serif;
">

  <div style="
    max-width:720px;
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
        New Strategy Call Lead
      </h1>

      <p style="
        margin:14px 0 0;
        color:rgba(255,255,255,0.65);
        font-size:15px;
        line-height:1.7;
      ">
        A new consultation request has been submitted from the website.
      </p>

    </div>

    <!-- BODY -->
    <div style="padding:42px;">

      <!-- GRID -->
      <table width="100%" cellpadding="0" cellspacing="0">

        <tr>
          <td style="padding-bottom:26px;width:50%;">
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
              ${body.fullName}
            </p>
          </td>

          <td style="padding-bottom:26px;width:50%;">
            <p style="
              margin:0 0 8px;
              color:#9B7B45;
              font-size:11px;
              font-weight:700;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Email
            </p>

            <p style="
              margin:0;
              color:#111111;
              font-size:16px;
              line-height:1.6;
            ">
              ${body.email}
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding-bottom:26px;">
            <p style="
              margin:0 0 8px;
              color:#9B7B45;
              font-size:11px;
              font-weight:700;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Company
            </p>

            <p style="
              margin:0;
              color:#111111;
              font-size:16px;
            ">
              ${body.company || "N/A"}
            </p>
          </td>

          <td style="padding-bottom:26px;">
            <p style="
              margin:0 0 8px;
              color:#9B7B45;
              font-size:11px;
              font-weight:700;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Service
            </p>

            <p style="
              margin:0;
              color:#111111;
              font-size:16px;
            ">
              ${body.service}
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding-bottom:26px;">
            <p style="
              margin:0 0 8px;
              color:#9B7B45;
              font-size:11px;
              font-weight:700;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Budget
            </p>

            <p style="
              margin:0;
              color:#111111;
              font-size:16px;
            ">
              ${body.budget}
            </p>
          </td>

          <td style="padding-bottom:26px;">
            <p style="
              margin:0 0 8px;
              color:#9B7B45;
              font-size:11px;
              font-weight:700;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Preferred Date
            </p>

            <p style="
              margin:0;
              color:#111111;
              font-size:16px;
            ">
              ${body.preferredDate}
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding-bottom:26px;">
            <p style="
              margin:0 0 8px;
              color:#9B7B45;
              font-size:11px;
              font-weight:700;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Timezone
            </p>

            <p style="
              margin:0;
              color:#111111;
              font-size:16px;
            ">
              ${body.timezone}
            </p>
          </td>

          <td style="padding-bottom:26px;">
            <p style="
              margin:0 0 8px;
              color:#9B7B45;
              font-size:11px;
              font-weight:700;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Call Window
            </p>

            <p style="
              margin:0;
              color:#111111;
              font-size:16px;
            ">
              ${body.callWindow}
            </p>
          </td>
        </tr>

      </table>

      <!-- DETAILS -->
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
          ${body.projectDetails || "No details provided."}
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
        High Desert Media • Strategy Consultation Lead
      </p>

    </div>

  </div>
</div>
`,
    });

    return NextResponse.json(
      {
        success: true,
        consultation,
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
        message: "Server Error",
      },
      {
        status: 500,
      },
    );
  }
}

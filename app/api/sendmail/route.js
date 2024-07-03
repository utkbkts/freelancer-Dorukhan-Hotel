import { mailsOptions, transporter } from "@/utils/config";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  if (!body.name || !body.email || !body.subject || !body.message) {
    return NextResponse.json({
      success: false,
      message: "Tüm alanları doldurmalısın.",
    });
  }
  try {
    await transporter.sendMail({
      ...mailsOptions,
      subject: body.subject,
      text: "Dorukhan",
      html: body.message,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    success: true,
  });
}

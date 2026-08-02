import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateOrderId } from "@/lib/utils/generateOrderId";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const orderId = generateOrderId();

    const itemsHtml = body.items
      .map(
        (item: any) => `
          <tr>
            <td>${item.product.name}</td>
            <td>${item.quantity}</td>
            <td>৳${item.product.price}</td>
          </tr>
        `
      )
      .join("");

    const { data, error } = await resend.emails.send({
      from: "Amm-Ansi <onboarding@resend.dev>",
      to: process.env.BUSINESS_EMAIL!,
      subject: `🥭 New Mango Order - ${orderId}`,
      html: `
        <h2>🥭 New Mango Order</h2>

        <p><strong>Order ID:</strong> ${orderId}</p>

        <hr/>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email || "Not Provided"}</p>
        <p><strong>Address:</strong> ${body.address}</p>
        <p><strong>Notes:</strong> ${body.notes || "None"}</p>

        <hr/>

        <table border="1" cellpadding="8" cellspacing="0">
          <thead>
            <tr>
              <th>Mango</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <h2>Total: ৳${body.total}</h2>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    console.log("Email sent:", data);

    return NextResponse.json({
      success: true,
      orderId,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
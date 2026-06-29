export async function verifyPayment(
  response: RazorpayResponse
) {
  const res = await fetch(
    "/api/payments/verify",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(response),
    }
  );

  if (!res.ok) {
    throw new Error(
      "Payment verification failed."
    );
  }

  return res.json();
}
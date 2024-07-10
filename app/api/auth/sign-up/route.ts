import { NextResponse } from "next/server";

const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);
  return NextResponse.json({ message: "all ok" });
};

export { POST };

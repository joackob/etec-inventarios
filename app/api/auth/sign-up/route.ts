const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);
  return new Response(data, { status: 201 });
};

export { POST };

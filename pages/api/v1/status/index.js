function status(request, response) {
  response.status(200).json({ status: "O serviço está online e operando" });
}

export default status;

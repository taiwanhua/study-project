const express = require("express");
var cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");

const prisma = new PrismaClient();

const app = express();
const port = 3001;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/oneTable/getList", async (req, res) => {
  const result = await prisma.firsttable.findMany({
    // where: {
    //   adress: adress,
    // },
  });
  await prisma.$disconnect();
  res.send(result);
});

app.post("/oneTable/create", async (req, res) => {
  const param = req.body;
  console.log("送了什麼過來", param);
  const result = await prisma.firsttable.create({ data: param });
  await prisma.$disconnect();
  res.send(result);
});

app.get("/getThreeTableListData", async (req, res) => {
  const { adress } = req.query;
  console.log("送了什麼過來", adress);
  const result = await prisma.threetable.findMany({
    where: {
      adress: adress,
    },
  });
  await prisma.$disconnect();
  res.send(result);
});

app.get("/getThreeTableOneData", async (req, res) => {
  const { id } = req.body;
  console.log("送了什麼過來", id);
  const result = await prisma.threetable.findUnique({
    where: {
      id: +id,
    },
  });
  await prisma.$disconnect();
  res.send(result);
});

app.post("/create", async (req, res) => {
  const param = req.body;
  console.log("送了什麼過來", param);
  const result = await prisma.threetable.create({ data: param });
  await prisma.$disconnect();
  res.send(result);
});

app.put("/update", async (req, res) => {
  const { id, ...param } = req.body;
  console.log("送了什麼過來", param);
  const result = await prisma.threetable.update({
    data: param,
    where: {
      id: +id, // equal to parseInt(param.id)
    },
  });
  await prisma.$disconnect();
  res.send(result);
});

app.delete("/delete", async (req, res) => {
  const { id } = req.body;
  console.log("送了什麼過來", id);
  const result = await prisma.threetable.delete({
    where: {
      id: +id, // equal to parseInt(param.id)
    },
  });
  await prisma.$disconnect();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

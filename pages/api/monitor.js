const data = [
  {
    dbname: "rs_mitra",
    totalTable: 2,
    tableInfo: [
      {
        tableName: "admin",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 200,
      },
      {
        tableName: "notaris",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 200,
      },
      {
        tableName: "diagnose",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 200,
      },
      {
        tableName: "admin",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 200,
      },
      {
        tableName: "notaris",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 200,
      },
      {
        tableName: "diagnose",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 200,
      },
    ],
  },
  {
    dbname: "rs_edelweiss",
    totalTable: 2,
    tableInfo: [
      {
        tableName: "diagnose",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 400,
      },
      {
        tableName: "patient",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 100,
      },
      {
        tableName: "diagnose",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 400,
      },
      {
        tableName: "patient",
        totalRecord: 1,
        newData: 40,
        deltaData: 20,
        currentCaptured: 100,
      },
    ],
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

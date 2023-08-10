const data = [
  {
    dateTime: "24/07/2023, 21:06PM",
    healthcare: "RS Siloam Surabaya",
    dbName: "database1",
    tableName: "data_patient",
    recordId: "2468",
    createdAt: "25/05/23 09:30:00",
    status: "Success",
  },
  {
    dateTime: "23/07/2023, 21:06PM",
    healthcare: "RS Mayapada",
    dbName: "database2",
    tableName: "data_patient",
    recordId: "1357",
    createdAt: "25/05/23 09:30:00",
    status: "Success",
  },
  {
    dateTime: "22/07/2023, 21:06PM",
    healthcare: "RS Siloam Bandung",
    dbName: "database3",
    tableName: "data_patient",
    recordId: "7777",
    createdAt: "25/05/23 09:30:00",
    status: "Failed",
  },
  {
    dateTime: "21/07/2023, 21:06PM",
    healthcare: "RS Hasan Sadikin",
    dbName: "database4",
    tableName: "data_patient",
    recordId: "7777",
    createdAt: "25/05/23 09:30:00",
    status: "Success",
  },
  {
    dateTime: "21/07/2023, 21:06PM",
    healthcare: "RS Immanuel",
    dbName: "database5",
    tableName: "data_patient",
    recordId: "4512",
    createdAt: "25/05/23 09:30:00",
    status: "Failed",
  },
  {
    dateTime: "21/07/2023, 21:06PM",
    healthcare: "RS Edelweiss",
    dbName: "database6",
    tableName: "data_patient",
    recordId: "1764",
    createdAt: "25/05/23 09:30:00",
    status: "Failed",
  },
  {
    dateTime: "21/07/2023, 21:06PM",
    healthcare: "RS Edelweiss",
    dbName: "database6",
    tableName: "data_patient",
    recordId: "1764",
    createdAt: "25/05/23 09:30:00",
    status: "Failed",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

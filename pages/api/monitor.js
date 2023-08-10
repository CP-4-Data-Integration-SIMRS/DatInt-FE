const data = [
  {
    tableName: "data_patient",
    totalRecord: "10000",
    newData: "4000",
    deltaData: "4000",
    progressCapt: "75%",
  },
  {
    tableName: "data_person",
    totalRecord: "4000",
    newData: "4000",
    deltaData: "4000",
    progressCapt: "90%",
  },
  {
    tableName: "data_practitioner",
    totalRecord: "2500",
    newData: "4000",
    deltaData: "4000",
    progressCapt: "25%",
  },
  {
    tableName: "data_schedule",
    totalRecord: "5000",
    newData: "8000",
    deltaData: "8000",
    progressCapt: "50%",
  },
  {
    tableName: "data_location",
    totalRecord: "8000",
    newData: "2500",
    deltaData: "2500",
    progressCapt: "70%",
  },
  {
    tableName: "data_appointment",
    totalRecord: "4000",
    newData: "600",
    deltaData: "600",
    progressCapt: "50%",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

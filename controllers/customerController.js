const uuid = require("uuid").v4;
const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore({
  projectId: "semiotic-summer-421719", // Replace with your project ID
  keyFilename: "./semiotic-summer-421719-e39c6799be97.json", // Path to your service account key file
});

exports.createCustomer = async (req, res) => {
  //path /api/customers
  const { name, place } = req.body;
  let sessionId = uuid();
  try {
    const docRef = firestore.collection("customers").doc();
    await docRef.set({ name, place, sessionId });

    res.status(201).json("add successfully");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const userRef = firestore.collection("customers");
    const snapshot = await userRef.get();
    const customers = [];
    snapshot.forEach((doc) => {
      customers.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

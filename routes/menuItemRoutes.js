const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");


// POST route to add Menu Items
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  // Get method to get the Menu Items
router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });

    // Get method on Parametreized Menu Items
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType; // Extract the work type from the URL parameter
    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy") {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

//  updating data using PUT method

router.put("/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // Extract the id from the URL parameter
    const updatedItemData = req.body; // Updated data for the Menuitem

    const response = await MenuItem.findByIdAndUpdate(
      itemId,
      updatedItemData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run the validators on the updated document
      }
    );
    if (!response) {
        return res.status(404).json({error: 'item not Found'});
    }

    console.log("data updated");
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

// Deleting a Menu Item data using DELETE method

router.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // Extract the id from the URL parameter

    // Assuming You have a Menu model
    const response = await MenuItem.findByIdAndDelete(itemId);
    if (!response) {
      return res.status(404).json({ error: "Item not Found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

  
module.exports = router;
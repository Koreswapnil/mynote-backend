const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");

//Route 1 : Get All the notes: GET "http://localhost:5000/notes/fetchnotes". Login required
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add notes using: POST "http://localhost:5000/notes/addnote". Login required

router.post('/addnotes', fetchuser, async (req, res) => {
    try {
        const {title, description, tag} = req.body

        //console.log(title, description, tag)

        const notesData = new Notes ({
            "title": title,
            "description": description,
            "tag": tag,
            "user": req.user.id
        })

        await notesData.save()
        res.status(201).send({msg: 'Note Added Successfully'})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");    
    }
})

//Route 3: Update an existing notes using: PUT "http://localhost:5000/notes/updatenotes/:id". Login required
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
  try {
    const {title, description, tag} = req.body;
  //create a newNotes
  const newNotes = {};
  if (title){newNotes.title = title};
  if (description){newNotes.description = description};
  if (tag){newNotes.tag = tag};

  //Find the note to update and update it
  let notes = await Notes.findById(req.params.id);
  if(!notes){return res.status(404).send("Not Found")}

  if (notes.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed")
  }

  notes = await Notes.findByIdAndUpdate(req.params.id, {$set: newNotes}, {new: true})
  res.json({notes});

    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//Route 4: Delete notes using: delete "http://localhost:5000/notes/deletenotes/:id". Login required
router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
  try {
    const {title, description, tag} = req.body;
  

  //Find the note to delete and delete it
  let notes = await Notes.findById(req.params.id);
  if(!notes){return res.status(404).send("Not Found")}

  //Allow user if note is write by that user
  if (notes.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed")
  }

  notes = await Notes.findByIdAndDelete(req.params.id)
  res.json("Note is deleted successfully");

    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
  

module.exports = router;

const Student = require('../models/Student');

const listView = async (req, res) => {
    try {
        const students = await Student.find()
        res.send(students);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const detailedView = async (req, res) => {
    res.send(await Student.findOne({ _id: req.params.id }));
}

const createStudent = async (req, res) => {
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        major: req.body.major,
    })
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ error: 'Document not found.' });
        }

        res.json({ message: 'Document deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const updateStudent = async (req, res) => {
    const { name, age, major } = req.body;
    
    try {
      const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
        name,
        age,
        major,
        updatedDate: Date.now() // Set the updatedDate field to the current date and time
      }, { new: true });
      
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Document not found.' });
      }
      
      res.json(updatedStudent);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' });
    }
  };

module.exports = { listView, detailedView, createStudent, deleteStudent, updateStudent }
db.Library.create({ name: "Campus Library" })
  .then(dbLibrary => {
    console.log(dbLibrary);
  })
  .catch(({message}) => {
    console.log(message);
  });

app.post("/submit", ({body}, res) => {
  db.Book.create(body)
    // this will submit the new id you input in the form field and push it to the populate route
    // this is pushing into the book array / new returns the document to see it later 
    .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});


//return all the books
app.get("/books", (req, res) => {
  db.Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

// return all the library
app.get("/library", (req, res) => {
  db.Library.find({})
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

// find all of the information inside the library and then populate with a string of books.
app.get("/populated", (req, res) => {
  db.Library.find({})
    .populate("books")  // book.js with author and title 
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});
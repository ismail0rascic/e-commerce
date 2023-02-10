import _ from "lodash";
import Book from "../models/book.model.js";
import validateBook from "../validation/book.validation.js";

export const getBooks = (req, res) => {
  Book.find().then((data, err) => {
    res.status(200).json(data);
  });
};

export const addBook = (req, res) => {
  const { errors, isValid } = validateBook(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    image: req.body.image,
    record: req.body.record,
    stop: req.body.stop,
    stock: req.body.stock,
  });

  newBook
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

export const updateBook = (req, res) => {
  const { errors, isValid } = validateBook(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const id = req.body.id;
  Book.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }

     const Book = _.extend(data, req.body);

    Book.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};

export const deleteBook = (req, res) => {
  const id = req.params.id;
  Book.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    data.remove((err, data) => {
      if (err || !data) {
        return res.status(404).json(err.message);
      }
      res.status(200).json("Item deleted.");
    });
  });
};

export const filterBooks = (req, res) => {
  let filter = req.params.filter;
  Book.find().then((data, err) => {
    res.status(200).json(data.map((d) => d.title.includes(filter) && d));
  });
};

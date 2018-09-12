const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" }
];

const url = "https://chris-corey.com/json/users.json";
// const url = "https://api.github.com/users/github";

// Courses
app.get("/api", (req, res) => res.send("Hello world"));

app.get("/api/courses", (req, res) => res.send(courses));

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));

  if (!course)
    return res.status(404).send("The course with the given ID does not exist.");

  res.send(course);
});

// Users
app.get("/api/users", (req, res) => {
  fetch(url)
    .then(response => response.json())
    .then(users => {
      res.send(users);
    });
});

app.get("/api/users/:id", (req, res) => {
  fetch(url)
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.id === parseInt(req.params.id));

      if (!user)
        return res
          .status(404)
          .send("The user with the given ID does not exist.");

      res.send(user);
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const express = require("express");
const app = express();
//익스프레스 라이브러리 사용하겠다

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MongoClient } = require("mongodb");

let db;
const url =
  "mongodb+srv://komodoking:zhahehdhkd@komodo.p9prg.mongodb.net/?retryWrites=true&w=majority&appName=komodo";
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("forum");
    app.listen(8080, () => {
      console.log("http://localhost:8080 에서 서버실행중");
    });
  })
  .catch((err) => {
    console.log("error");
  });

app.get("/", (요청, 응답) => {
  응답.sendFile(__dirname + "/index.html");
});
//
app.get("/about", (요청, 응답) => {
  // db.collection("post").insertOne({ title: "어쩌구" });
  // 응답.sendFile(__dirname + "/about.html");
});
//
app.get("/list", async (요청, 응답) => {
  let result = await db.collection("post").find().toArray();
  // await= 다음줄 하기전에  잠깐 기다리세요. 이거해야해요.
  // 아니면 .then() 이용하면됨= 이거 하고나서 해주세요
  // 매우 자주쓰므로 외웁시다 await부분은
  console.log(result[0].name);
  응답.render("list.ejs", { posts: result }); //ejs로 데이터 전송
});

app.get("/time", (요청, 응답) => {
  응답.render("time.ejs", { time: new Date() });
});

app.get("/write", (요청, 응답) => {
  응답.render("write.ejs");
});
app.post("/newpost", async (요청, 응답) => {
  console.log(요청.body);
  const newPost = new Post({ title, content });
  await newPost.save();
});

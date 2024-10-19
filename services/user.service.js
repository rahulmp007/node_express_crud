const User = require("../models/user.model");

class UserService {
  async getAllUsers() {
    return await User.find();
  }

  async getUserById(userId) {
    let user = await User.findOne({ id: userId });
    return user;
  }

  async createUser(user) {
    return await User.create({ id: user.id, name: user.name });
  }

  async updateUser(userId, name) {
    const newUser = new User({ userId: userId, name: name });
    let result = await newUser.save();
    console.log(result);
  }

  async deleteUser(userId) {
    const doc = await User.deleteOne({ id: userId });
    console.log(doc);
  }
}

module.exports = new UserService();

// class UserService {
//   constructor() {
//     this.users = userList;
//   }

//   async getAllUsers() {
//     const readData = await fileService.readFile();
//     let savedUsers = [];
//     if (readData) {
//       savedUsers = JSON.parse(readData);
//     }

//     return savedUsers;
//   }

//   getUserById(userId) {
//     const user = userList.find((user) => user.id == parseInt(userId));
//     return user;
//   }

//   async createUser(user) {
//     let readResult = await fileService.readFile();
//     let savedUsers = [];
//     if (readResult) {
//       savedUsers = JSON.parse(readResult);
//     }

//     userList = [...savedUsers];

//     if (userList.length === 0) {
//       const newUser = { id: 1, name: user.name };
//       userList.push(newUser);
//       await fileService.writeFile(JSON.stringify(userList, null, 2));
//       return newUser;
//     } else {
//       const lastSavedId = userList[userList.length - 1].id;
//       const newUser = { id: lastSavedId + 1, name: user.name }; // Create a new user
//       const userFound = userList.some((u) => {
//         return u.id === newUser.id || u.name == newUser.name;
//       });
//       if (!userFound) {
//         userList.push(newUser);
//         await fileService.writeFile(JSON.stringify(userList, null, 2));
//         return newUser;
//       } else {
//         console.log("User already exists with ID:", newUser.id);
//       }
//     }
//   }

//   async updateUser(userId, name) {
//     let readData = await fileService.readFile();
//     let savedUsers = [];
//     if (readData) {
//       savedUsers = JSON.parse(readData);
//     }
//     userList = [...savedUsers];

//     if (userList.length === 0) {
//       return "Database empty, no users exists";
//     } else {
//       let foundUser = userList.find((user) => user.id === parseInt(userId));

//       console.log(`foundUser => ${foundUser}`);

//       if (!foundUser) {
//         return "no such user exists";
//       } else {
//         const userIndex = userList.findIndex(
//           (foundUser) => foundUser.id == parseInt(userId)
//         );
//         const newUser = { id: foundUser.id, name: name };
//         userList[userIndex] = newUser;

//         await fileService.writeFile(JSON.stringify(userList, null, 2));
//         return { id: userId, message: "update success" };
//       }
//     }
//   }

//   async deleteUser(userId) {
//     let readData = await fileService.readFile();
//     let savedUsers = [];
//     if (readData) {
//       savedUsers = JSON.parse(readData);
//     }
//     userList = [...savedUsers];
//     const foundUser = userList.find((user) => user.id === parseInt(userId));
//     if (!foundUser) {
//       return "no such user id exists";
//     } else {
//       const userIndex = userList.findIndex(
//         (user) => user.id === parseInt(userId)
//       );
//       console.log(`user index => ${userIndex}`);

//       userList.splice(userIndex, 1);
//       console.log(userList);

//       await fileService.writeFile(JSON.stringify(userList, null, 2));
//       return "delete success";
//     }
//   }
// }

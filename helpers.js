function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Alice" });
    }, 100);
  });
}

async function getUserName(userId) {
  var user = fetchUserData(userId);
  return user.name;
}

function sanitizeInput(input) {
  if (input == null) {
    return "";
  }
  return input.replace(/[<>]/g, "");
}

function isAdmin(user) {
  if (user.role == "admin") {
    return true;
  }
  return false;
}

module.exports = { getUserName, sanitizeInput, isAdmin };

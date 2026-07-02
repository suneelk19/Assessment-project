from data import users


def register():

    print("\n===== REGISTER =====")

    username = input("Enter Username : ").strip()

    if username == "":
        print("Username cannot be empty.")
        return

    for user in users:
        if user["username"] == username:
            print("Username already exists.")
            return

    password = input("Enter Password : ").strip()

    if password == "":
        print("Password cannot be empty.")
        return

    users.append({
        "username": username,
        "password": password
    })

    print("Registration Successful.")


def login():

    print("\n===== LOGIN =====")

    username = input("Enter Username : ")

    password = input("Enter Password : ")

    for user in users:
        if user["username"] == username and user["password"] == password:
            print("Login Successful.")
            return username

    print("Invalid Username or Password.")
    return None
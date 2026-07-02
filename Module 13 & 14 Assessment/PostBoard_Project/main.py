from auth import register
from auth import login

from post import create_post
from post import view_posts
from post import search_post


# User Menu
def user_menu(username):

    while True:

        print("\n===== USER MENU =====")

        print("1. Create Post")
        print("2. View All Posts")
        print("3. Search Posts by Username")
        print("4. Logout")

        choice = input("Enter Choice : ")

        if choice == "1":
            create_post(username)

        elif choice == "2":
            view_posts()

        elif choice == "3":
            search_post()

        elif choice == "4":
            print("Logout Successful.")
            break

        else:
            print("Invalid Choice")


# Main Program
while True:

    print("\n==========================")
    print("WELCOME TO POSTBOARD")
    print("==========================")

    print("1. Register")
    print("2. Login")
    print("3. Exit")

    choice = input("Enter Choice : ")

    if choice == "1":

        register()

    elif choice == "2":

        user = login()

        if user:
            user_menu(user)

    elif choice == "3":

        print("Thank You")
        break

    else:

        print("Invalid Choice")
from data import posts
from utils import get_date


def create_post(author):

    print("\n===== CREATE POST =====")

    title = input("Enter Title : ")
    description = input("Enter Description : ")

    posts.append({
        "author": author,
        "title": title,
        "description": description,
        "date": get_date()
    })

    print("Post Created Successfully.")


def view_posts():

    print("\n===== ALL POSTS =====")

    if len(posts) == 0:
        print("No Posts Available.")
        return

    for post in posts:
        print("----------------------")
        print("Author :", post["author"])
        print("Title :", post["title"])
        print("Date :", post["date"])
        print("Description :", post["description"])


def search_post():

    name = input("Enter Username : ")

    found = False

    for post in posts:

        if post["author"] == name:

            found = True

            print("----------------------")
            print("Title :", post["title"])
            print("Date :", post["date"])
            print("Description :", post["description"])

    if not found:
        print("No Posts Found.")
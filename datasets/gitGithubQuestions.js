const questions = [
	{
		"id": 0,
		"question": "What is the git command that downloads your repository from GitHub to your computer?",
		"answer": "git clone",
		"answered_correctly": false
	}, {
		"id": 1,
		"question": "What is the button called that creates a copy of a repo under your own GitHub account?",
		"answer": "fork",
		"answered_correctly": false
	}, {
		"id": 2,
		"question": "What is the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?",
		"answer": "git push",
		"answered_correctly": false
	}, {
		"id": 3,
		"question": "How do you check the state of your local git repository since your last commit?",
		"answer": "git status",
		"answered_correctly": false
	}, {
		"id": 4,
		"question": "How do you stage files for a commit?",
		"answer": "git add",
		"answered_correctly": false
	}, {
		"id": 5,
		"question": "How do you save the current state of your code into the git version control?",
		"answer": "git commit",
		"answered_correctly": false
	}, {
		"id": 6,
		"question": "What is a shortcut to staging all the changes you have?",
		"answer": "git add .",
		"answered_correctly": false
	}, {
		"id": 7,
		"question": "How do you supply a commit message to a commit?",
		"answer": "git commit -m",
		"answered_correctly": false
	}, {
		"id": 8,
		"question": "Which command is the correct way to initialize a new Git repository?",
		"answer": "git init",
		"answered_correctly": false
	}, {
		"id": 9,
		"question": "What is the correct commit syntax for all changes with a message?",
		"answer": "git commit -am",
		"answered_correctly": false
	}, {
		"id": 10,
		"question": "What comes first, git add . or git commit?",
		"answer": "git add",
		"answered_correctly": false
	}, {
		"id": 11,
		"question": "True or False? You can type git status at any point while in a git controlled directory to check the status of your files.",
		"answer": "true",
		"answered_correctly": false
	}, {
		"id": 12,
		"question": "True or False? You can type git status at any point while in a git controlled directory to check the status of your files.",
		"answer": "true",
		"answered_correctly": false
	}, {
		"id": 13,
		"question": "Which of the following commands will stage your entire directory and every non-empty directory inside your current directory?",
		"answer": "git add .",
		"answered_correctly": false
	}, {
		"id": 14,
		"question": "Which of the following commands will stage your entire directory and every non-empty directory inside your current directory?",
		"answer": "git add .",
		"answered_correctly": false
	}, {
		"id": 15,
		"question": "Weve just created a new file called index.html. How can you stage this one file so we can commit it?",
		"answer": "git add index.html",
		"answered_correctly": false
	}, {
		"id": 16,
		"question": "How do you push your files to the master?",
		"answer": "git push",
		"answered_correctly": false
	}, {
		"id": 17,
		"question": "What is the command to check the history of the repo?",
		"answer": "git log",
		"answered_correctly": false
	}, {
		"id": 18,
		"question": "What is the command to retrieve new changes made by others?",
		"answer": "git pull",
		"answered_correctly": false
	}, {
		"id": 19,
		"question": "What is the command to clone an online repository to the working folder?",
		"answer": "git clone",
		"answered_correctly": false
	}, {
		"id": 20,
		"question": "What is the command to check the current status of your git?",
		"answer": "git status",
		"answered_correctly": false
	}, {
		"id": 21,
		"question": "Where your files and their history are stored. Can be local or remote (One word only).",
		"answer": "repository",
		"answered_correctly": false
	}, {
		"id": 22,
		"question": "An approved revision of a document or source file from which subsequent work is done (One word only).",
		"answer": "master",
		"answered_correctly": false
	}, {
		"id": 23,
		"question": "What is the command to change branches in git?",
		"answer": "git checkout",
		"answered_correctly": false
	}, {
		"id": 24,
		"question": "How do you create and switch to a new branch?",
		"answer": "git checkout -b",
		"answered_correctly": false
	}, {
		"id": 25,
		"question": "What is the name of the file that contains file names and properties that you do not want git to commit or consider committing (One word only)?",
		"answer": "gitignore",
		"answered_correctly": false
	}, {
		"id": 26,
		"question": "What is the command to see a previous commit?",
		"answer": "git checkout branch",
		"answered_correctly": false
	}, {
		"id": 27,
		"question": "What is the command to create a new branch?",
		"answer": "git branch",
		"answered_correctly": false
	}, {
		"id": 28,
		"question": "What is the command to switch to the master branch?",
		"answer": "git checkout master",
		"answered_correctly": false
	}, {
		"id": 29,
		"question": "What is the command to undo a commit?",
		"answer": "git revert commit",
		"answered_correctly": false
	}, {
		"id": 30,
		"question": "What is the command to permanently undo a commit?",
		"answer": "git reset commit",
		"answered_correctly": false
	}, {
		"id": 31,
		"question": "What is the command you need to create a file?",
		"answer": "touch",
		"answered_correctly": false
	}, {
		"id": 32,
		"question": "What is the command to make a new directory?",
		"answer": "mkdir",
		"answered_correctly": false
	}, {
		"id": 33,
		"question": "What is the command to change to the src directory?",
		"answer": "cd src",
		"answered_correctly": false
	}
]

module.exports = {
  questions
};
git command:
+ git config --global user.name = ""
+ git config --global user.email = ""
+ git --checkout [file_name]
+ git status
+ git log

generate ssh-key
+ ls -al ~/.ssh (locate ssh-key)
+ ssh-keygen -t rsa -b 4096 -C "email@gmail.com" (generated)
+ eval "$(ssh-agent -s)" (check)
+ ssh-add ~/.ssh/id_rsa (add key)
+ less ~/.ssh/id_rsa.pub (get pub key)
+ ssh -T git@github.com (test connection)
setup git remote
+ git remote add origin [url]
+ git add .
+ git commit -m "Description"
+ git push -u origin master (git push)
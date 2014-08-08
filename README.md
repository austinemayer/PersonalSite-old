Deployment Plan

1. First we are going to ssh into the server.
	ssh root@119.9.79.236

2. Enter the Root Password that was given to you.
	e.g. - x23hb2j3j

3. Then we will need to create you a user name and password.
	adduser USERNAME

4. And add your new username to the sudo group.
	adduser USERNAME sudo

5. Now exit the root user.
	exit

6. Sign back in using your new username and password.
	ssh USERNAME@119.9.79.236

7. Make sure you have your branched files merged to the github master branch.

8. Now in Terminal we are going to sync to the server.

9. Make sure you are in the /var/www directory.
	cd /var/www

10. Now you want to pull the down the master branch to update the server.
	git pull portfolio master

11. And you are finished! exit the server.
	exit
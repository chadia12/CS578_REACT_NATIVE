# MIU-MSD-CS571-2022-10-Quiz01
# Write an appealing point in yesterday's lecture. What is it? Why do you like it? (1-3 sentences)

the appealing point in yesterday's lecture is the way to make blocking process into non- blocking process.
blocking process slow the cpu into v8 enginee. making a process asynchrnous doesn't means tthat it will be non blocking process.
inside libuv we have 4 threads which runnig at the same time. we can make process to be non blocking by using different ways like children process, worker threads and cluser cor & load balancer which will take short time in v8 enginee.

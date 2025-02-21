# Calculating mean squared error for bar plots and pie charts estimation

my_answers_bar = [29, 38, 29, 28, 40]
actual_answers_bar = [30, 37, 27, 27, 41]
my_answers_pie = [43, 45, 26, 31, 34]
actual_answers_pie = [45, 44, 26, 33, 35]

ses_bar = []
for mine, actual in zip(my_answers_bar, actual_answers_bar):
    se = (mine - actual) ** 2
    ses_bar.append(se)
print(sum(ses_bar) / len(ses_bar)) # 1.6

ses_pie = []
for mine, actual in zip(my_answers_pie, actual_answers_pie):
    se = (mine - actual) ** 2
    ses_pie.append(se)
print(sum(ses_pie) / len(ses_pie)) # 2.0

# Results: Study participants were able to estimate the size of the largest
# portion in bar plots than in pie charts. 
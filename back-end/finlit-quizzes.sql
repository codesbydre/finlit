-- ***** TO DO : Add in ~10 more quizzes regarding the same topics below but varying difficulty levels *****
-- Current Status: 10 quizzes , 9 topics 
INSERT INTO quizzes (title, difficulty, topic) VALUES
('Basic Budgeting', 'Easy', 'Budgeting'), 
('Understanding Taxes', 'Medium', 'Taxation'), 
('Investing 101', 'Easy', 'Investing'), 
('Advanced Investing Strategies', 'Hard', 'Investing'), 
('Retirement Planning Basics', 'Medium', 'Retirement'), 
('Credit Scores and Reports', 'Medium', 'Credit'), 
('Risk Management in Finance', 'Hard', 'Risk Management'), 
('Principles of Personal Finance', 'Easy', 'Personal Finance'), 
('Corporate Finance Overview', 'Medium', 'Corporate Finance'),
('Global Economic Trends', 'Hard', 'Economics');

-- 1. Basic Budgeting
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(1, 'What is the primary purpose of a budget?', 'To track expenses', 'To plan for future spending', 'To report to tax authorities', 'To limit income', 'B'),
(1, 'Which of the following is a benefit of budgeting?', 'Increases debt', 'Reduces financial awareness', 'Helps manage finances', 'Has no impact on savings', 'C'),
(1, 'What does "balancing a budget" mean?', 'Spending more than you earn', 'Earning more than you spend', 'Matching expenses with income', 'Borrowing money to cover deficits', 'C'),
(1, 'Which is a key component of a personal budget?', 'Investment portfolio', 'Retirement plan', 'Expense tracking', 'Credit card limits', 'C'),
(1, 'How often should you review and adjust your budget?', 'Once a year', 'Every month', 'Only when income changes', 'Never', 'B'),
(1, 'What is an emergency fund?', 'A special savings account for vacations', 'Money saved for unexpected expenses', 'Investment in stocks and bonds', 'A type of insurance policy', 'B'),
(1, 'Which of these is a fixed expense?', 'Groceries', 'Dining out', 'Rent or Mortgage', 'Entertainment', 'C'),
(1, 'What should you do if your expenses exceed your income?', 'Borrow money to cover the difference', 'Ignore the problem', 'Adjust your budget to cut expenses', 'Increase your credit card limit', 'C'),
(1, 'What is the 50/30/20 budget rule?', '50% needs, 30% wants, 20% savings', '50% savings, 30% needs, 20% wants', '50% wants, 30% savings, 20% needs', '50% entertainment, 30% needs, 20% savings', 'A'),
(1, 'What is "zero-based budgeting"?', 'Having zero expenses each month', 'Budgeting to have zero savings', 'Assigning every dollar a purpose', 'Maintaining a zero balance on credit cards', 'C');

-- 2. Understanding Taxes
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(2, 'What is a taxable income?', 'Total income', 'Income after deductions', 'Only salary income', 'Only business income', 'B'),
(2, 'Which of these is typically a tax-deductible expense?', 'Vacation expenses', 'Grocery shopping', 'Charitable donations', 'Clothing purchases', 'C'),
(2, 'What is a tax return?', 'Document to report income', 'Refund received from the IRS', 'Bill from the government', 'Record of taxes withheld', 'A'),
(2, 'What is the purpose of a W-4 form in the U.S.?', 'To file annual taxes', 'To determine tax withholding', 'To report capital gains', 'To apply for tax refunds', 'B'),
(2, 'Which of the following might result in a tax refund?', 'Owing taxes', 'Underpaying estimated tax', 'Overpaying through withholding', 'Not filing a tax return', 'C'),
(2, 'What does "gross income" refer to?', 'Income after taxes', 'Total income before any deductions', 'Income from investments only', 'Net business income', 'B'),
(2, 'What is the deadline for filing individual tax returns in the U.S.?', 'April 15', 'December 31', 'July 4', 'October 15', 'A'),
(2, 'Which form is commonly used to report individual income tax in the U.S.?', 'W-2', 'W-4', 'Form 1040', 'Form 1099', 'C'),
(2, 'What is an "audit" in the context of taxes?', 'A refund process', 'A review of a tax return by the IRS', 'A method of paying taxes', 'A type of tax deduction', 'B'),
(2, 'Which of the following income is usually tax-free?', 'Lottery winnings', 'Inheritance', 'Salary', 'Bonus payments', 'B');

-- 3. Investing 101
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(3, 'What is a stock?', 'A type of bond', 'Ownership in a company', 'A type of insurance policy', 'A fixed income instrument', 'B'),
(3, 'What is a mutual fund?', 'A single stock or bond', 'A collection of stocks, bonds, or other securities', 'A government savings scheme', 'A type of bank account', 'B'),
(3, 'What does diversification in investing mean?', 'Focusing on one type of investment', 'Spreading investments across various assets', 'Investing only in stocks', 'Buying and selling rapidly', 'B'),
(3, 'What is a dividend?', 'A type of stock', 'A fee paid to brokers', 'A share of a company’s profits paid to shareholders', 'Interest from a bond', 'C'),
(3, 'What is a bond?', 'Part ownership in a company', 'An investment in a government or corporation that pays interest', 'A type of mutual fund', 'A high-risk investment tool', 'B'),
(3, 'What does "liquidity" mean in financial terms?', 'The risk level of an investment', 'The ability to convert an asset to cash quickly', 'The level of profit from an investment', 'The amount of debt a company holds', 'B'),
(3, 'What is the primary risk of investing in stocks?', 'The price may increase over time', 'Stocks do not pay dividends', 'The value of stocks can decrease', 'Stocks always outperform bonds', 'C'),
(3, 'What is an index fund?', 'A fund that aims to match the performance of a market index', 'A fund that contains only bonds', 'A fund managed by a financial advisor', 'A type of stock', 'A'),
(3, 'What is the main difference between stocks and bonds?', 'Stocks represent ownership in a company, while bonds are loans to a company or government', 'There is no difference', 'Bonds are riskier than stocks', 'Stocks pay interest regularly', 'A'),
(3, 'Why is it important to consider the expense ratio when choosing a mutual fund?', 'It affects the color of the fund’s brochure', 'It’s the ratio of stocks to bonds in the fund', 'It’s the fee the fund charges, which can impact returns', 'It indicates the fund’s past performance', 'C');

-- 4. Advanced Investing Strategies
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(4, 'What is short selling in the stock market?', 'Selling stocks after a short period of buying', 'Selling borrowed stocks and buying them back later', 'Selling stocks at a low price', 'Selling stocks without owning them', 'B'),
(4, 'What is a hedge fund?', 'A low-risk investment fund', 'A government-operated investment fund', 'A private investment fund with various strategies', 'A fund exclusively for investing in commodities', 'C'),
(4, 'What does "arbitrage" mean in investing?', 'Investing in art', 'Buying and selling the same asset in different markets to profit from price differences', 'A type of stock trading', 'Investing based on a coin toss', 'B'),
(4, 'What is a derivative in financial markets?', 'A security whose value is derived from an underlying asset', 'A stock that pays high dividends', 'A new type of cryptocurrency', 'A bond with variable interest', 'A'),
(4, 'What is meant by "leverage" in investing?', 'The use of borrowed money to increase potential return of an investment', 'A strategy to reduce investment risk', 'Investing only in leveraged buyouts', 'The ability to influence market trends', 'A'),
(4, 'What is a "put option" in stock trading?', 'An option to put money into the stock market', 'A contract allowing the owner to sell a stock at a specific price', 'A request to stop trading a stock', 'An investment in technology stocks', 'B'),
(4, 'What is a "bull market"?', 'A market with declining stock prices', 'A market in which stock prices are stable', 'A market with rising stock prices', 'A market focused on animal stocks', 'C'),
(4, 'What is "market capitalization"?', 'The total debts of a company', 'The total dividends paid by a company', 'The total value of a company’s outstanding shares', 'The total number of a company’s employees', 'C'),
(4, 'What is "portfolio rebalancing"?', 'Changing the investment advisor of a portfolio', 'The process of realigning the weightings of a portfolio of assets', 'Converting all investments to cash', 'Investing in new financial markets', 'B'),
(4, 'What is "dollar-cost averaging"?', 'Investing a fixed dollar amount at regular intervals, regardless of share price', 'Investing only US dollars', 'Spending the same amount on stocks each day', 'A strategy to only buy low-cost stocks', 'A');

-- Retirement Planning Basics
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(5, 'What is a 401(k) plan?', 'A college savings plan', 'A high-interest savings account', 'A retirement savings plan offered by employers', 'A government-run pension scheme', 'C'),
(5, 'What is an IRA?', 'Individual Retirement Account', 'International Revenue Agency', 'Insurance Risk Assessment', 'Immediate Return Annuity', 'A'),
(5, 'What is the main benefit of a Roth IRA?', 'Contributions are tax-deductible', 'Tax-free withdrawals in retirement', 'Guaranteed returns', 'No contribution limits', 'B'),
(5, 'At what age can you start withdrawing from a 401(k) without penalty?', '55', '59½', '62', '65', 'B'),
(5, 'What is the primary purpose of a pension plan?', 'To save for college', 'To prepare for short-term unemployment', 'To provide income during retirement', 'To cover healthcare costs', 'C'),
(5, 'What does "vesting" mean in the context of a retirement plan?', 'Converting the plan to cash', 'Eligibility to keep employer contributions', 'Switching to a different plan', 'Investing in stocks', 'B'),
(5, 'Which investment option is typically considered safest for a retirement portfolio as one gets older?', 'Stocks', 'Bonds', 'Real estate', 'Commodities', 'B'),
(5, 'What is a defined benefit pension plan?', 'A plan with a variable retirement benefit', 'A plan where benefits depend on investment returns', 'A plan that promises a specified monthly benefit in retirement', 'A plan that only covers healthcare costs', 'C'),
(5, 'What is "catch-up contribution" in retirement plans?', 'Extra contributions to make up for missed payments', 'Contributions for those who start saving late', 'Additional contributions allowed for individuals over 50', 'A temporary increase in contribution limits', 'C'),
(5, 'Why is it important to start saving for retirement early?', 'To avoid taxes', 'To minimize risk', 'To take advantage of compound interest', 'Because it’s legally required', 'C');

-- Credit Scores and Reports
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(6, 'What is a credit score?', 'A numerical rating of your investment skills', 'A score that determines your eligibility for a mortgage', 'A numerical rating of your creditworthiness', 'A score assigned by banks to new account holders', 'C'),
(6, 'Which factor is most influential in determining your credit score?', 'Your income level', 'The amount of savings you have', 'Your payment history', 'Your education level', 'C'),
(6, 'What is the range of a typical credit score?', '0-500', '300-850', '200-800', '100-900', 'B'),
(6, 'What does a credit report include?', 'Only your current debt levels', 'Only your credit score', 'Detailed history of your credit activity', 'Only your account balances', 'C'),
(6, 'How often should you check your credit report?', 'Once in a lifetime', 'Every 10 years', 'Annually', 'Only when applying for loans', 'C'),
(6, 'What can a low credit score affect?', 'Your job performance', 'Your eligibility for certain loans and interest rates', 'Your marital status', 'Your educational opportunities', 'B'),
(6, 'Which action can help improve your credit score?', 'Closing old credit accounts', 'Missing a credit card payment', 'Maintaining low balances on credit cards', 'Applying for multiple new credit cards at once', 'C'),
(6, 'What might be a sign of identity theft on your credit report?', 'Accounts you did not open', 'A high credit score', 'Several student loans', 'One late payment', 'A'),
(6, 'What type of information is not included in a credit report?', 'Your credit score', 'Your current debts', 'Your payment history', 'Your shopping habits', 'D'),
(6, 'How can you obtain a free credit report?', 'Through a credit card company', 'Buying it online', 'Requesting it from a government agency', 'From authorized websites as mandated by law', 'D');

-- Risk Management in Finance
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(7, 'What is risk management in finance?', 'Investing in high-risk assets', 'Avoiding all types of financial investments', 'Identifying, analyzing, and mitigating financial risks', 'Borrowing funds to invest in the stock market', 'C'),
(7, 'What is diversification in investment?', 'Putting all your money into one investment', 'Spreading investments across various assets to reduce risk', 'Investing only in stock markets', 'Investing only in government bonds', 'B'),
(7, 'What is a hedge in financial terms?', 'A type of mutual fund', 'An investment to offset potential losses in another investment', 'A long-term investment strategy', 'A high-risk stock investment', 'B'),
(7, 'What does "liquidity risk" refer to?', 'The risk of not finding a buyer for an investment', 'The risk of a company going bankrupt', 'The risk of interest rate fluctuations', 'The risk of currency exchange rates', 'A'),
(7, 'What is "credit risk"?', 'The risk associated with borrowing too much money', 'The risk that a borrower might default on a loan', 'The risk of interest rates rising', 'The risk of investing in stocks', 'B'),
(7, 'What is "operational risk"?', 'The risk of a decline in investment value', 'The risk from operational failures such as systems or human error', 'The risk associated with changing market conditions', 'The risk of investing in new technology', 'B'),
(7, 'What is "systematic risk"?', 'Risk specific to an individual company', 'Risk associated with specific industries', 'Market risk that cannot be eliminated through diversification', 'Risk of government policy changes', 'C'),
(7, 'What is "market risk"?', 'The risk of investing only in the stock market', 'The risk of a specific stock underperforming', 'The risk of the overall market performing poorly', 'The risk of a specific market sector', 'C'),
(7, 'What is an "interest rate risk"?', 'The risk of interest rates in savings accounts decreasing', 'The risk of fixed-income securities losing value due to interest rate changes', 'The risk of not having enough interest in an investment', 'The risk of interest rates rising on a mortgage', 'B'),
(7, 'What role do derivatives play in risk management?', 'They increase the overall risk', 'They have no impact on risk', 'They are used to speculate and increase profits', 'They can be used to hedge and manage risk', 'D');

-- Principles of Personal Finance
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(8, 'What is the first step in creating a personal budget?', 'Setting financial goals', 'Paying off debt', 'Opening a savings account', 'Investing in the stock market', 'A'),
(8, 'What is an emergency fund?', 'A fund for unplanned vacations', 'Savings for unexpected expenses', 'Money set aside for retirement', 'A fund for luxury purchases', 'B'),
(8, 'What is the purpose of setting financial goals?', 'To keep up with friends’ spending', 'To ensure you have enough debt', 'To provide direction and purpose in financial planning', 'To complicate your financial life', 'C'),
(8, 'Why is it important to understand your credit score?', 'It impacts your ability to rent an apartment', 'It determines your employment eligibility', 'It affects your ability to obtain loans and the interest rates you pay', 'It influences your investment choices', 'C'),
(8, 'What is the 50/30/20 rule in budgeting?', '50% needs, 30% wants, 20% savings', '50% savings, 30% wants, 20% needs', '50% leisure, 30% savings, 20% needs', '50% debt payment, 30% leisure, 20% savings', 'A'),
(8, 'What is compound interest?', 'Interest paid only on the initial amount of money', 'Interest paid on both the initial amount and accumulated interest', 'A government-imposed tax on savings', 'A fixed interest rate that never changes', 'B'),
(8, 'What is the difference between "needs" and "wants"?', 'Needs are optional, wants are essential', 'Needs are essentials for living, wants are non-essential luxuries', 'There is no difference', 'Wants are more important than needs', 'B'),
(8, 'How does insurance work as a personal finance tool?', 'To invest in the stock market', 'To reduce financial risk by providing compensation in the case of loss', 'To increase wealth rapidly', 'To provide loans', 'B'),
(8, 'What is the purpose of a financial plan?', 'To track daily expenses only', 'To manage your money to achieve personal economic satisfaction', 'To ensure you spend all your money', 'To calculate your taxes', 'B'),
(8, 'Why is it important to review and adjust your financial plan regularly?', 'Financial situations and goals never change', 'To ensure it remains aligned with your changing financial goals and circumstances', 'It’s not necessary to review or adjust it', 'To make it more complicated', 'B');

-- Corporate Finance Overview
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(9, 'What is the primary goal of corporate finance?', 'To increase sales', 'To minimize financial risks', 'To maximize shareholder value', 'To expand the number of employees', 'C'),
(9, 'What does "capital structure" refer to in corporate finance?', 'The layout of a company’s headquarters', 'The mix of a company’s long-term debt and equity', 'The structure of a company’s product line', 'The organization chart of a company', 'B'),
(9, 'What is a "balance sheet"?', 'A list of a company’s outstanding loans', 'A statement showing a company’s assets, liabilities, and equity', 'A record of a company’s sales and expenses', 'A document outlining employee salaries', 'B'),
(9, 'What is "working capital"?', 'Capital used for day-to-day operations', 'Long-term investments', 'Shareholders’ equity', 'Funds allocated for new projects', 'A'),
(9, 'What is "return on investment" (ROI)?', 'The time it takes for an investment to double in value', 'The interest rate on a loan', 'A measure of the profitability of an investment', 'The dividend yield on a stock', 'C'),
(9, 'What does "liquidity" refer to in a corporate context?', 'The company’s ability to meet its long-term debts', 'The ease with which a company’s assets can be converted into cash', 'The amount of liquid assets a company holds', 'The company’s ability to increase its product line', 'B'),
(9, 'What is a "cash flow statement"?', 'A document showing the flow of cash in and out of a company', 'A report detailing a company’s revenue and expenses', 'A statement of a company’s profits and losses', 'A summary of a company’s investment activity', 'A'),
(9, 'What is "debt financing"?', 'Investing in debt instruments', 'Raising funds through bank loans or issuing bonds', 'Reducing a company’s operational costs', 'Selling company shares', 'B'),
(9, 'What is "equity financing"?', 'Taking a loan from a financial institution', 'Selling company shares to investors', 'Leasing company assets', 'Issuing corporate bonds', 'B'),
(9, 'What does "leveraging" mean in corporate finance?', 'Reducing a company’s debt', 'Investing only in low-risk assets', 'Using borrowed funds for investment', 'Increasing employee productivity', 'C');

-- Global Economic Trends
INSERT INTO quiz_questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES
(10, 'What is "globalization" in an economic context?', 'Focusing a business solely on local markets', 'The process of businesses operating on an international scale', 'The trend of declining global trade', 'The global reduction of interest rates', 'B'),
(10, 'What does "emerging market" refer to?', 'New stock markets', 'Economies in the process of rapid growth', 'Markets that are declining', 'Developed economies', 'B'),
(10, 'What is a "trade deficit"?', 'When a country’s exports exceed its imports', 'When a country’s imports exceed its exports', 'Equal trade between two countries', 'A ban on international trade', 'B'),
(10, 'What are "tariffs"?', 'International trade agreements', 'Taxes imposed on imported goods', 'Global currency exchange rates', 'International business laws', 'B'),
(10, 'What is "Brexit"?', 'A global economic crisis', 'The United Kingdom’s decision to leave the European Union', 'A type of international trade agreement', 'A global environmental policy', 'B'),
(10, 'What does the term "BRICS" stand for?', 'Brazil, Russia, India, China, South Africa', 'A global banking system', 'An international environmental policy', 'A type of emerging technology', 'A'),
(10, 'What is "quantitative easing"?', 'Reducing government spending', 'A monetary policy to increase the money supply', 'Raising interest rates', 'Implementing trade barriers', 'B'),
(10, 'What is a "bull market" in global terms?', 'A market trend characterized by falling prices', 'A market trend characterized by rising prices', 'A global recession', 'A term for trade wars', 'B'),
(10, 'What is the "GDP" and what does it stand for?', 'Gross Domestic Product, a measure of a country’s economic performance', 'Global Debt Policy, a measure of a country’s debt', 'General Duty and Protection, a trade term', 'Government Directed Pricing, a pricing strategy', 'A'),
(10, 'What is "cryptocurrency"?', 'A new type of global bank', 'A digital or virtual currency using cryptography for security', 'A global trade currency', 'An economic policy', 'B');

import {UserCredentials} from '../../models/auth/UserCredentials';
import {OperationType} from '../../models/user/Operation';
import {User} from '../../models/user/User';
import {UserRegistration} from '../../models/user/UserRegistration';

const login = (credentials: UserCredentials) => {
  const dummyUser: User = {
    firstName: 'john',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
    account: {
      balance: 3469.52,
      cards: [
        {
          name: 'John doe',
          company: 'Crowdform Platinum',
          cardCompany: 'VISA',
          number: '4756 **** **** 9018',
        },
      ],
      Insights: [
        {day: '1 Jan', value: 537},
        {day: '2 Jan', value: 762},
        {day: '3 Jan', value: 610},
        {day: '4 Jan', value: 899},
        {day: '5 Jan', value: 478},
        {day: '6 Jan', value: 695},
        {day: '7 Jan', value: 823},
        {day: '8 Jan', value: 541},
        {day: '9 Jan', value: 987},
        {day: '10 Jan', value: 624},
        {day: '11 Jan', value: 759},
        {day: '12 Jan', value: 890},
        {day: '13 Jan', value: 602},
        {day: '14 Jan', value: 714},
        {day: '15 Jan', value: 856},
        {day: '16 Jan', value: 932},
        {day: '17 Jan', value: 578},
        {day: '18 Jan', value: 701},
        {day: '19 Jan', value: 843},
        {day: '20 Jan', value: 654},
        {day: '21 Jan', value: 789},
        {day: '22 Jan', value: 925},
        {day: '23 Jan', value: 537},
        {day: '24 Jan', value: 678},
        {day: '25 Jan', value: 802},
        {day: '26 Jan', value: 913},
        {day: '27 Jan', value: 546},
        {day: '28 Jan', value: 732},
        {day: '29 Jan', value: 889},
        {day: '30 Jan', value: 615},
      ],
      operations: [
        {amount: 300, title: 'Gas', type: OperationType.OUTCOME},
        {amount: 50, title: 'Groceries', type: OperationType.OUTCOME},
        {amount: 1200, title: 'Salary', type: OperationType.INCOME},
        {amount: 20, title: 'Coffee', type: OperationType.OUTCOME},
        {amount: 800, title: 'Freelance Work', type: OperationType.INCOME},
        {amount: 150, title: 'Dinner', type: OperationType.OUTCOME},
        {amount: 100, title: 'Gift', type: OperationType.OUTCOME},
        {amount: 600, title: 'Bonus', type: OperationType.INCOME},
        {amount: 40, title: 'Books', type: OperationType.OUTCOME},
        {amount: 200, title: 'Electricity', type: OperationType.OUTCOME},
      ],
    },
  };

  return dummyUser;
};

const createAccount = (userRegistration: UserRegistration) => {
  return userRegistration;
};

export const authService = {
  login,
  createAccount,
};

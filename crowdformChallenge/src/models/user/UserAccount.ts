import {Card} from './Card';
import {Insight} from './Insight';
import {Operation} from './Operation';

export type UserAccount = {
  balance: number;
  cards: Card[];
  Insights: Insight[];
  operations: Operation[];
};

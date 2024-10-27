import IChair from '../../interfaces/Chair';

export default class VictorianChair implements IChair {
  sitOn(): string {
    return 'Sitting on a Victorian chair.';
  }
}

import IChair from '../../interfaces/Chair';

export default class ModernChair implements IChair {
  sitOn(): string {
    return 'Sitting on a modern chair.';
  }
}

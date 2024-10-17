import CharacterMemento from './CharacterMemento';

// Caretaker class

class CharacterHistory {
  private mementoList: CharacterMemento[] = [];
  private currentIndex: number = -1;

  public save(memento: CharacterMemento): void {
    // Cut off any future states if undo has been used
    this.mementoList = this.mementoList.slice(0, this.currentIndex + 1);
    this.mementoList.push(memento);
    this.currentIndex++;
  }

  public undo(): CharacterMemento | null {
    if (this.currentIndex <= 0) {
      console.log('No more undos available.');
      return null;
    }

    this.currentIndex--;
    return this.mementoList[this.currentIndex];
  }

  public redo(): CharacterMemento | null {
    if (this.currentIndex >= this.mementoList.length - 1) {
      console.log('No more redos available.');
      return null;
    }

    this.currentIndex++;
    return this.mementoList[this.currentIndex];
  }
}

export default CharacterHistory;

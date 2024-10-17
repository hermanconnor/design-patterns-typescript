import TextMemento from './TextMemento';

// Caretaker class

class History {
  private mementoList: TextMemento[] = [];
  private currentIndex: number = -1;

  public save(memento: TextMemento): void {
    // If we're in the middle of the history, cut off the future
    this.mementoList = this.mementoList.slice(0, this.currentIndex + 1);
    this.mementoList.push(memento);
    this.currentIndex++;
  }

  public undo(): TextMemento | null {
    if (this.currentIndex <= 0) {
      console.log('No more undos available.');
      return null;
    }

    this.currentIndex--;
    return this.mementoList[this.currentIndex];
  }

  public redo(): TextMemento | null {
    if (this.currentIndex >= this.mementoList.length - 1) {
      console.log('No more redos available.');
      return null;
    }

    this.currentIndex++;
    return this.mementoList[this.currentIndex];
  }
}

export default History;

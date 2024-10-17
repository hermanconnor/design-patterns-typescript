import CharacterHistory from './CharacterHistory';
import GameCharacter from './GameCharacter';

const character = new GameCharacter();
const history = new CharacterHistory();

// User makes changes
character.setHealth(80);
character.setLevel(2);
character.addItem('Sword');
history.save(character.save());

character.setHealth(60);
character.setLevel(3);
character.addItem('Shield');
history.save(character.save());

// User wants to undo changes
const mementoUndo1 = history.undo();
if (mementoUndo1) {
  character.restore(mementoUndo1);
}

// Undo again
const mementoUndo2 = history.undo();
if (mementoUndo2) {
  character.restore(mementoUndo2);
}

// Redo the last change
const mementoRedo1 = history.redo();
if (mementoRedo1) {
  character.restore(mementoRedo1);
}

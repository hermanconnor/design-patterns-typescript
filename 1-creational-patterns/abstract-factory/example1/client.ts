import Application from './Application';
import GUIFactory from './interfaces/GUIFactory';
import MacFactory from './macos/MacOSFactory';
import WindowsFactory from './windows/WindowsFactory';

function main() {
  let factory: GUIFactory;

  // Choose the factory based on the environment (e.g., user preference or system type)
  const isWindows = true; // Simulating a condition

  if (isWindows) {
    factory = new WindowsFactory();
  } else {
    factory = new MacFactory();
  }

  const app = new Application(factory);
  app.renderUI();
}

main();

import Button from './Button';
import Panel from './Panel';
import Window from './Window';

/**
 * In this example, we'll focus on a graphical user interface (GUI) framework. In this scenario, we will model UI components such as buttons, panels, and entire windows, allowing for a tree-like structure where components can contain other components.
 
    In this example, we will have:
      1. UIComponent: An interface representing all UI components.
      2. Button: A leaf component that represents a button.
      3. Panel: A composite component that can contain multiple UI components.
      4. Window: A composite component representing a top-level window that can contain panels.

Explanation of the Code:
  1. UIComponent Interface: This defines the common interface for all UI components with a `render` method.

  2. Button Class: This is a leaf component that implements the `UIComponent` interface. It has a label and implements the `render` method to show its label.

  3. Panel Class: This is a composite component that can contain multiple `UIComponent` objects (both buttons and other panels). It implements the `add`, `remove`, and `render` methods.

  4. Window Class: This is a composite component representing a window that can contain multiple panels. It implements the `addPanel` and `render` methods.

  5. Client Code: This creates a main window with panels and buttons, and renders the entire structure.
 */

const mainWindow = new Window('Main Window');
const mainPanel = new Panel('Main Panel');
const settingsPanel = new Panel('Settings Panel');

const button1 = new Button('Save');
const button2 = new Button('Cancel');
const button3 = new Button('Change Settings');

mainPanel.add(button1);
mainPanel.add(button2);
settingsPanel.add(button3);

mainWindow.addPanel(mainPanel);
mainWindow.addPanel(settingsPanel);

// Render the entire GUI structure
mainWindow.render('');

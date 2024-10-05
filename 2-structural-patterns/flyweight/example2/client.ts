import TextEditor from './TextEditor';

/**
In this example, we will create a text editor that handles various text segments. Each segment can have its own content but share formatting properties like font style, size, and color.

Explanation of the Code
  1. TextFormat Interface: Defines a method `apply` that takes the extrinsic state (content) to apply formatting.

  2. Concrete Flyweights (BoldFormat, ItalicFormat, UnderlineFormat): Each class holds intrinsic state (color and font size) and implements the `apply` method to show how the formatting is applied to the text content.

  3. TextFormatFactory: Manages the creation and retrieval of text format objects. It checks if a specific format with the given type, color, and font size already exists and creates it if not.

  4. TextEditor: The client that uses the `TextFormatFactory` to create text segments and apply the necessary formatting. It provides the content and applies the shared formatting.

 
 */

// Usage
const editor = new TextEditor();
editor.createDocument();

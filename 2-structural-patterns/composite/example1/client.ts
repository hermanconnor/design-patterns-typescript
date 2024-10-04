import Directory from './Directory';
import File from './File';

/**
 This example is in the context of a file system. We’ll represent files and directories where both files and directories can be treated uniformly.
 
    In our file system, we will have:
      1. **File**: Represents a single file.
      2. **Directory**: Represents a collection of files and/or directories.

Explanation of the Code
  1. FileSystemComponent Interface: This defines the common interface with `getName` and `display` methods for both files and directories.

  2. File Class: This is a leaf that implements the `FileSystemComponent` interface. It has a name and implements the `display` method to show its name.

  3. Directory Class: This is a composite that can contain both `File` and other `Directory` objects. It manages its children with `add`, `remove`, and implements the `display` method to print its name and call `display` on its children with increased indentation for better visibility.

  4. Client Code: This creates a root directory and adds subdirectories and files to it. Finally, it displays the entire structure.
 */

const rootDirectory = new Directory('Root');
const documents = new Directory('Documents');
const images = new Directory('Images');

const file1 = new File('Resume.docx');
const file2 = new File('CoverLetter.docx');
const image1 = new File('Vacation.png');
const image2 = new File('Profile.jpg');

documents.add(file1);
documents.add(file2);
images.add(image1);
images.add(image2);

rootDirectory.add(documents);
rootDirectory.add(images);

// Display the entire file system structure
rootDirectory.display('');

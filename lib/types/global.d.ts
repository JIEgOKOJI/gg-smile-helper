// Define a new interface representing the additional properties/methods on the window object
interface CustomWindow {
    Utils: any; // Replace 'any' with the specific type if known
    // Add more custom properties or methods as needed
}

// Merge the CustomWindow interface with the global Window interface
declare global {
    interface Window extends CustomWindow {}
}
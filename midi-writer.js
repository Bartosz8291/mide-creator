// midi-writer.js library code
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.MidiWriter = factory();
    }
}(this, function() {
    // MIDIWriter.js code...
}));

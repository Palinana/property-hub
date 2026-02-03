/**
 * Converts a Mongoose lean document into a serializable plain JavaScript object.
 *
 * @param {Object} leanDocument - The Mongoose lean document to be converted.
 * @returns {Object} A plain JavaScript object that is a serializable representation of the input document.
 */

export function convertToSerializeableObject(leanDocument) {
    if (!leanDocument) return null;
  
    for (const key of Object.keys(leanDocument)) {
        const value = leanDocument[key];
    
        if (value && value.toJSON && value.toString) {
            leanDocument[key] = value.toString();
        }
    }
  
    return leanDocument;
}
  